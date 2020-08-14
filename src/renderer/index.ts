// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


import fs from 'fs';
import util from 'util';
import path from 'path';

const writeFile = util.promisify(fs.writeFile);


const write = async () => {
    const o = {a:1}
    console.log('path',path.join(__dirname, '123.json'));
    await writeFile(path.join(__dirname, '123.json'), JSON.stringify(o))
    return;
}


write();

console.log('133')