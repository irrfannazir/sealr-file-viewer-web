import { getFileName } from "./variable.js";
import { dirs } from "./dir.js";
import { findElementFromDir } from "./find.js";

export const getDirectory = function(){
    let result = ""
    let currentFileName = getFileName()
    let root = findElementFromDir(currentFileName);
    let i = 1;
    if(getFileName() != "root"){
        result += `
            <div class="i-fn-block" onclick="changeDirectory(1, '${root}')">
                <i class="fas fa-angle-left i-la"></i>
            </div>
        `;
    }
    for(const dir in dirs[getFileName()]){
        const isFolder = dirs[getFileName()][dir][0] === 'f';
        const name = dirs[getFileName()][dir].slice(1);
        result += `
            <div class="t-fn-block" id="fileExists${i}" onclick="changeDirectory(${isFolder}, '${name}')">
                <p class="t-filen">${name}</p>
            </div>
        `;
        i++;
    }
    return result
}