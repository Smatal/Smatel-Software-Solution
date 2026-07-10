const fs = require('fs');
const path = require('path');

const solutionsDir = path.join(process.cwd(), 'content', 'solutions');
const portfolioDir = path.join(process.cwd(), 'content', 'portfolio');

let errors = [];

// Get all valid solution slugs based on files
const solutionFiles = fs.readdirSync(solutionsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts' && f !== 'loader.ts');
const validSolutionSlugs = solutionFiles.map(f => f.replace('.ts', ''));

// Check each solution file
solutionFiles.forEach(file => {
  const content = fs.readFileSync(path.join(solutionsDir, file), 'utf8');
  
  // Check relatedSolutions
  const relatedMatch = content.match(/relatedSolutions:\s*\[(.*?)\]/);
  if (relatedMatch) {
    const relatedStr = relatedMatch[1];
    const relatedSlugs = [...relatedStr.matchAll(/"([^"]+)"/g)].map(m => m[1]);
    relatedSlugs.forEach(slug => {
      if (!validSolutionSlugs.includes(slug)) {
        errors.push(`File ${file} has invalid relatedSolution: ${slug}`);
      }
    });
  }
});

// Check navbar
const navbarContent = fs.readFileSync(path.join(process.cwd(), 'components', 'layout', 'Navbar.tsx'), 'utf8');
const hrefMatches = [...navbarContent.matchAll(/href:\s*"\/services\/([^"]+)"/g)].map(m => m[1]);
hrefMatches.forEach(slug => {
  if (!validSolutionSlugs.includes(slug)) {
    errors.push(`Navbar has invalid service link: ${slug}`);
  }
});

if (errors.length > 0) {
  console.log("ERRORS FOUND:");
  errors.forEach(e => console.log(e));
} else {
  console.log("ALL VALIDATIONS PASSED");
}
