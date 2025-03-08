@echo off
echo Office Plugins Pro - MS Office Add-in Development Company Website

REM Check if node_modules exists
if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
)

echo Starting development server...
call npm run dev 