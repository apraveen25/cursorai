#!/usr/bin/env node

/**
 * This script checks for outdated packages in the project.
 * Run with: node scripts/check-updates.js
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

console.log(`${colors.cyan}Checking for outdated packages...${colors.reset}`);

try {
  // Run npm outdated and capture the output
  const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
  
  // If there are no outdated packages, npm outdated returns an empty string
  if (!outdatedOutput.trim()) {
    console.log(`${colors.green}All packages are up to date!${colors.reset}`);
    process.exit(0);
  }
  
  // Parse the JSON output
  const outdatedPackages = JSON.parse(outdatedOutput);
  
  // Count the number of outdated packages
  const packageCount = Object.keys(outdatedPackages).length;
  
  console.log(`${colors.yellow}Found ${packageCount} outdated package(s):${colors.reset}\n`);
  
  // Display a table of outdated packages
  console.log(`${colors.cyan}Package Name${colors.reset}\t${colors.cyan}Current${colors.reset}\t${colors.cyan}Latest${colors.reset}\t${colors.cyan}Type${colors.reset}`);
  console.log('-'.repeat(80));
  
  for (const [packageName, info] of Object.entries(outdatedPackages)) {
    const current = info.current;
    const latest = info.latest;
    const type = info.type;
    
    console.log(`${packageName}\t${current}\t${latest}\t${type}`);
  }
  
  console.log('\n');
  console.log(`${colors.magenta}To update all packages to their latest versions, run:${colors.reset}`);
  console.log(`${colors.green}npm update${colors.reset}`);
  console.log(`${colors.magenta}To update a specific package, run:${colors.reset}`);
  console.log(`${colors.green}npm update <package-name>${colors.reset}`);
  
} catch (error) {
  console.error(`${colors.red}Error checking for updates:${colors.reset}`, error.message);
  process.exit(1);
} 