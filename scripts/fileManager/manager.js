import { getDirectory } from "./getDirectory.js";
import { getFileName } from "./variable.js";

export const loadFiles = () => {
    document.querySelectorAll('[wmodel]').forEach(
        el => {
            const modelName = el.getAttribute('wmodel');
            if(modelName == "dir") {
                el.innerHTML = getDirectory();
            }
        }
    );
}

document.getElementById("folderName").innerHTML = getFileName();
loadFiles();
