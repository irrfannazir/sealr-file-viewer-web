import { loadFiles } from "./manager.js";
import { setFileName } from "./variable.js";
import { isldir, cdBackSpace, cdOpenFolder, getCurrentDirectory } from "./directory.js";
import { openFile } from "../iframe/openFile.js";
import { getIsMobile } from "../mobileView/checkRatio.js";
import { activateViewBar } from "../mobileView/activate.js";

window.changeDirectory = function(format, fileName){
    if(format == 1){
        setFileName(fileName);
        loadFiles();
        if(isldir(fileName)){
            //Closing Folder
            cdBackSpace();
        }else{
            //Opening Folder
            cdOpenFolder(fileName);
        }
        // console.log("Changed Directory: ", getCurrentDirectory())
    }else{
        //Opening File
        if(getIsMobile()){
            activateViewBar();
        }
        const path = getCurrentDirectory() + fileName
        openFile(path);
        // console.log("Opened the file: ", fileName);
    }
}