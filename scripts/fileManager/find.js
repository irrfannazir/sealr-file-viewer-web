import { getFileName } from "./variable.js";
import { dirs } from "./dir.js";

export const findElementFromDir = () => {
    for(const i in dirs){
        const dirList = dirs[i];
        for(const j in dirList){
            if(getFileName() == dirList[j].slice(1)){
                return i;
            }
        }
    }
}