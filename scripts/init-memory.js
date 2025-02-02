const fs = require('fs');
const path = require('path');

const memoryFilePath = path.join(__dirname, '../dist/data/memory.json');

// Only create memory.json if it doesn't exist
if (!fs.existsSync(memoryFilePath)) {
    fs.writeFileSync(memoryFilePath, JSON.stringify({
        nodes: [],
        edges: []
    }, null, 2));
    console.log('Created new memory.json file');
} else {
    console.log('memory.json already exists, skipping creation');
} 