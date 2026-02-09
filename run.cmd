@echo off
REM Navegar para o diretório do projeto
cd /d C:\Users\gabriel.novy\Desktop\pessoal\studio

REM Limpar variáveis de ambiente problemáticas
set NODE_OPTIONS=
set npm_config_scripts_prepend_node_path=auto

REM Executar npm start
npm start
