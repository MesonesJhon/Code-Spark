import { beforeEach, vi } from 'vitest';

// jsdom no implementa matchMedia ni el comportamiento modal nativo de un navegador.
// Los dobles permiten probar el estado Vue; la revisión visual se hace por separado.
beforeEach(() => {
  localStorage.clear();
  document.body.innerHTML = '';
  document.body.className = '';
  document.documentElement.dataset.tema = 'claro';
  vi.stubGlobal('matchMedia', vi.fn((consulta: string) => ({
    matches: false,
    media: consulta,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(() => true),
  })));
});

Object.defineProperty(HTMLDialogElement.prototype, 'showModal', {
  configurable: true,
  value(this: HTMLDialogElement) { this.setAttribute('open', ''); },
});
Object.defineProperty(HTMLDialogElement.prototype, 'close', {
  configurable: true,
  value(this: HTMLDialogElement) {
    if (!this.open) return;
    this.removeAttribute('open'); this.dispatchEvent(new Event('close'));
  },
});
