// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  replaceText(`chrome-version`, process.versions.chrome);
  replaceText(`node-version`, process.versions.node ) ;
  replaceText(`electron-version`, process.versions.electron);
});


import fs from 'fs';
import util from 'util';
import path from 'path';

const writeFile = util.promisify(fs.writeFile);


const write = async () => {
    const o = {a:1}
    await writeFile(path.join(__dirname, '123.json'), o)
    return;
}


// write();