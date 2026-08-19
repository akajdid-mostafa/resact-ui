const fs = require('fs');

// Read the ButtonsPage file
let content = fs.readFileSync('/components/ButtonsPage.tsx', 'utf8');

// Replace all instances of onCopy={copyToClipboard} with onCopy={handleCopyCode}
content = content.replace(/onCopy={copyToClipboard}/g, 'onCopy={handleCopyCode}');

// Write the file back
fs.writeFileSync('/components/ButtonsPage.tsx', content);

console.log('Successfully updated all copy handlers in ButtonsPage.tsx');