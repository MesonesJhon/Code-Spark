@echo off
chcp 65001 >nul
cd /d "%~dp0"
where npm >nul 2>nul
if not %errorlevel%==0 (
  echo Instala Node.js 22.18 o superior de la rama 22, o Node.js 24.12 o superior.
  echo Consulta README.md para las instrucciones.
  pause
  exit /b 1
)
if not exist node_modules (
  call npm ci
  if errorlevel 1 (
    echo No se pudieron instalar las dependencias.
    pause
    exit /b 1
  )
)
echo Abre http://localhost:5173 en tu navegador.
call npm run dev
pause
