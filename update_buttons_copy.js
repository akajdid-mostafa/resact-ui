const fs = require('fs');

// Read the file
let content = fs.readFileSync('/components/ButtonsPage.tsx', 'utf8');

// Replace all instances of onCopy={copyToClipboard} with onCopy={handleCopyCode}
content = content.replaceAll('onCopy={copyToClipboard}', 'onCopy={handleCopyCode}');

// Write back to file
fs.writeFileSync('/components/ButtonsPage.tsx', content);

console.log('Successfully updated all copy handlers in ButtonsPage.tsx');