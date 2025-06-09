let fileName = "root";


export const getFileName = () => {
    return fileName;
}

export const setFileName = (name) => {
    fileName = name;
    document.getElementById("folderName").innerHTML = fileName;
}

