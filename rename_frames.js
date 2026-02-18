const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/assets/model');

fs.readdir(dir, (err, files) => {
    if (err) {
        console.error("Could not list directory", err);
        process.exit(1);
    }

    files.forEach(file => {
        if (file.startsWith('frame_') && file.endsWith('.jpg')) {
            // Extract number
            const match = file.match(/frame_(\d+)_/);
            if (match) {
                const number = match[1];
                const newName = `frame_${number}.jpg`;
                const oldPath = path.join(dir, file);
                const newPath = path.join(dir, newName);
                fs.rename(oldPath, newPath, (err) => {
                    if (err) console.error(`Failed to rename ${file}:`, err);
                    else console.log(`Renamed ${file} -> ${newName}`);
                });
            }
        }
    });
});
