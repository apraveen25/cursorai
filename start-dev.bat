@echo off
echo Office Plugins Pro - MS Office Add-in Development Company Website

REM Check for outdated packages
echo Checking for outdated packages...
call npm run check-updates

REM Ask if the user wants to update packages
set /p UPDATE_PACKAGES="Do you want to update packages to their latest versions? (y/n) "
if /i "%UPDATE_PACKAGES%"=="y" (
  echo Updating packages...
  call npm run update-packages
)

REM Check if node_modules exists
if not exist "node_modules\" (
  echo Installing dependencies...
  call npm install
)

echo Starting development server...
call npm run dev 