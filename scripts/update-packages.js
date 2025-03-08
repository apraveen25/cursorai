#!/usr/bin/env node

/**
 * This script updates all packages to their latest versions.
 * Run with: node scripts/update-packages.js
 */

const { execSync } = require('child_process');

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
  // Check if there are any outdated packages
  const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
  
  // If there are no outdated packages, npm outdated returns an empty string
  if (!outdatedOutput.trim()) {
    console.log(`${colors.green}All packages are already up to date!${colors.reset}`);
    process.exit(0);
  }
  
  // Parse the JSON output
  const outdatedPackages = JSON.parse(outdatedOutput);
  
  // Count the number of outdated packages
  const packageCount = Object.keys(outdatedPackages).length;
  
  console.log(`${colors.yellow}Found ${packageCount} outdated package(s). Updating...${colors.reset}\n`);
  
  // Update all packages
  console.log(`${colors.cyan}Updating packages...${colors.reset}`);
  execSync('npm update', { stdio: 'inherit' });
  
  console.log(`\n${colors.green}All packages have been updated successfully!${colors.reset}`);
  
  // Check if there are any packages that couldn't be updated to the latest version
  console.log(`\n${colors.cyan}Checking for packages that need manual updates...${colors.reset}`);
  
  try {
    const remainingOutput = execSync('npm outdated --json', { encoding: 'utf8', stdio: ['pipe', 'pipe', 'ignore'] });
    
    if (remainingOutput.trim()) {
      const remainingPackages = JSON.parse(remainingOutput);
      const remainingCount = Object.keys(remainingPackages).length;
      
      console.log(`${colors.yellow}Found ${remainingCount} package(s) that need manual updates:${colors.reset}\n`);
      
      // Display a table of packages that need manual updates
      console.log(`${colors.cyan}Package Name${colors.reset}\t${colors.cyan}Current${colors.reset}\t${colors.cyan}Latest${colors.reset}\t${colors.cyan}Type${colors.reset}`);
      console.log('-'.repeat(80));
      
      for (const [packageName, info] of Object.entries(remainingPackages)) {
        const current = info.current;
        const latest = info.latest;
        const type = info.type;
        
        console.log(`${packageName}\t${current}\t${latest}\t${type}`);
      }
      
      console.log('\n');
      console.log(`${colors.magenta}To update these packages manually, you may need to update your package.json directly.${colors.reset}`);
      console.log(`${colors.magenta}For major version updates, check the package's documentation for breaking changes.${colors.reset}`);
    } else {
      console.log(`${colors.green}All packages are now up to date!${colors.reset}`);
    }
  } catch (error) {
    console.error(`${colors.red}Error checking for remaining updates:${colors.reset}`, error.message);
  }
  
} catch (error) {
  console.error(`${colors.red}Error updating packages:${colors.reset}`, error.message);
  process.exit(1);
} 