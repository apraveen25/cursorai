#!/usr/bin/env node

/**
 * This script fixes deprecated dependencies in the project.
 * Run with: node scripts/fix-deprecated.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

console.log(`${colors.cyan}Fixing deprecated dependencies...${colors.reset}`);

// List of deprecated packages and their replacements
const deprecatedPackages = [
  { name: 'rimraf', version: '^5.0.5' },
  { name: 'glob', version: '^10.3.10' },
  { name: 'eslint', version: '^8.56.0' },
  { name: '@humanwhocodes/config-array', version: '^0.11.13' },
  { name: '@humanwhocodes/object-schema', version: '^1.2.1' },
  { name: 'lru-cache', version: '^10.2.0' }
];

try {
  // Install the latest versions of the replacement packages
  console.log(`${colors.yellow}Installing updated packages...${colors.reset}`);
  
  const installCommand = `npm install --save-dev ${deprecatedPackages.map(pkg => `${pkg.name}@${pkg.version}`).join(' ')}`;
  console.log(`${colors.blue}Running: ${installCommand}${colors.reset}`);
  
  execSync(installCommand, { stdio: 'inherit' });
  
  // Add overrides to package.json if they don't exist
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  if (!packageJson.overrides) {
    packageJson.overrides = {};
  }
  
  // Add overrides for transitive dependencies
  packageJson.overrides.glob = '^10.3.10';
  packageJson.overrides.rimraf = '^5.0.5';
  packageJson.overrides.inflight = '^2.0.0';
  
  // Write the updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  
  console.log(`${colors.green}Successfully updated package.json with overrides!${colors.reset}`);
  
  // Run npm install to apply the overrides
  console.log(`${colors.yellow}Running npm install to apply overrides...${colors.reset}`);
  execSync('npm install', { stdio: 'inherit' });
  
  console.log(`${colors.green}Successfully fixed deprecated dependencies!${colors.reset}`);
  console.log(`${colors.magenta}Note: Some warnings may still appear due to transitive dependencies.${colors.reset}`);
  console.log(`${colors.magenta}These warnings can be safely ignored as we've added overrides in package.json.${colors.reset}`);
  
} catch (error) {
  console.error(`${colors.red}Error fixing deprecated dependencies:${colors.reset}`, error.message);
  process.exit(1);
} 