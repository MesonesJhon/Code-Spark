import { afterEach, describe, expect, it, vi } from 'vitest';
import { enableAutoUnmount, flushPromises, mount } from '@vue/test-utils';
import App from '../src/App.vue';
import FotoIntegrante from '../src/components/common/FotoIntegrante.vue';
import TarjetaIntegrante from '../src/components/team/TarjetaIntegrante.vue';
import { integrantes, proyectos } from '../src/data/equipo';
import { revelar } from '../src/directives/revelar';

vi.mock('../src/data/equipo', async () => {
  const datos = await import('./fixtures');
  return { configuracion: datos.configuracionPrueba, integrantes: datos.integrantesPrueba, proyectos: datos.proyectosPrueba };
});

enableAutoUnmount(afterEach);
function montarPagina() { return mount(App, { attachTo: document.body, global: { directives: { revelar } } }); }

describe('Interacciones de la landing Vue', () => {
  it('presenta a todo el equipo y los proyectos', () => {
    const pagina = montarPagina();
    expect(pagina.findAll('.tarjeta-equipo')).toHaveLength(integrantes.length);
    expect(pagina.findAll('details.proyecto')).toHaveLength(proyectos.length);
    expect(pagina.get('.aviso-demo').text()).toContain('ficticios');
  });
  it('filtra en la interfaz usando una especialidad y una tecnología', async () => {
    const pagina = montarPagina();
    const filtro = pagina.findAll('.filtro').find(boton => boton.text() === 'Frontend')!;
    await filtro.trigger('click'); await pagina.get('#buscar-equipo').setValue('vue');
    expect(pagina.findAll('.tarjeta-equipo')).toHaveLength(1);
    expect(pagina.get('.tarjeta-equipo h3').text()).toBe('Diego Torres');
  });
  it('permite limpiar una búsqueda sin resultados', async () => {
    const pagina = montarPagina();
    await pagina.get('#buscar-equipo').setValue('inexistente');
    expect(pagina.findAll('.tarjeta-equipo')).toHaveLength(0);
    await pagina.get('.estado-vacio button').trigger('click');
    expect(pagina.findAll('.tarjeta-equipo')).toHaveLength(integrantes.length);
    expect((pagina.get('#buscar-equipo').element as HTMLInputElement).value).toBe('');
  });
  it('cambia el tema y lo recupera al volver a montar la aplicación', async () => {
    const pagina = montarPagina();
    await pagina.get('#boton-tema').trigger('click');
    expect(document.documentElement.dataset.tema).toBe('oscuro');
    expect(localStorage.getItem('code-spark-tema')).toBe('oscuro');
    pagina.unmount();
    const siguiente = montarPagina();
    expect(siguiente.get('#boton-tema').attributes('aria-pressed')).toBe('true');
    window.dispatchEvent(new StorageEvent('storage', { key: 'code-spark-tema', newValue: 'claro' }));
    await flushPromises();
    expect(siguiente.get('#boton-tema').attributes('aria-pressed')).toBe('false');
  });
  it('abre un perfil, navega las pestañas y devuelve el foco al cerrar', async () => {
    const pagina = montarPagina();
    const boton = pagina.get('.boton-perfil');
    await boton.trigger('click'); await flushPromises();
    expect((pagina.get('#modal-perfil').element as HTMLDialogElement).open).toBe(true);
    expect(pagina.get('#titulo-modal').text()).toBe('Valeria Ramos');
    await pagina.get('#tab-trayectoria').trigger('keydown', { key: 'ArrowRight' });
    expect(pagina.get('#tab-aportes').attributes('aria-selected')).toBe('true');
    expect(pagina.get('#panel-trayectoria').attributes()).toHaveProperty('hidden');
    expect(pagina.get('#panel-aportes').text()).toContain('API de actividades');
    await pagina.get('#cerrar-modal').trigger('click'); await flushPromises();
    expect((pagina.get('#modal-perfil').element as HTMLDialogElement).open).toBe(false);
    expect(document.body.classList.contains('modal-abierto')).toBe(false);
    expect(document.activeElement).toBe(boton.element);
  });
  it('abre directamente los aportes desde un participante de proyecto', async () => {
    const pagina = montarPagina();
    await pagina.get('.boton-participante').trigger('click'); await flushPromises();
    expect(pagina.get('#tab-aportes').attributes('aria-selected')).toBe('true');
    await pagina.get('#modal-perfil').trigger('cancel'); await flushPromises();
    expect((pagina.get('#modal-perfil').element as HTMLDialogElement).open).toBe(false);
  });
  it('cierra el menú cuando se selecciona un destino', async () => {
    const pagina = montarPagina();
    await pagina.get('#boton-menu').trigger('click');
    expect(pagina.get('#boton-menu').attributes('aria-expanded')).toBe('true');
    await pagina.get('#navegacion a').trigger('click');
    expect(pagina.get('#boton-menu').attributes('aria-expanded')).toBe('false');
  });
  it('muestra las iniciales cuando la foto no puede cargar', async () => {
    const foto = mount(FotoIntegrante, { props: { integrante: integrantes[0], demo: true } });
    await foto.get('img').trigger('error');
    expect(foto.find('img').exists()).toBe(false);
    expect(foto.get('.avatar-respaldo').text()).toBe('VR');
  });
  it('trata los nombres como texto y no como HTML', () => {
    const tarjeta = mount(TarjetaIntegrante, {
      props: { integrante: { ...integrantes[0], nombre: '<img src=x onerror=alert(1)>' }, numero: 1, totalProyectos: 0, demo: false },
      global: { directives: { revelar } },
    });
    expect(tarjeta.get('h3').text()).toBe('<img src=x onerror=alert(1)>');
    expect(tarjeta.find('img[src="x"]').exists()).toBe(false);
  });
});
