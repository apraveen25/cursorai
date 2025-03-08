#!/bin/bash

# Check for outdated packages
echo "Checking for outdated packages..."
npm run check-updates

# Ask if the user wants to update packages
read -p "Do you want to update packages to their latest versions? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Updating packages..."
  npm run update-packages
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Start the development server
echo "Starting development server..."
npm run dev 