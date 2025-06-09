
let currentDirectory = "assets/file/"

export const setCurrentDirectory = (dir) => {
    currentDirectory = dir;
}

export const getCurrentDirectory = () => {
    return currentDirectory;
}

export const cdOpenFolder = (folderName) => {
    currentDirectory += folderName + "/"
}

export const cdBackSpace = () => {
	const index = currentDirectory.slice(0, -1).lastIndexOf('/');
	currentDirectory = currentDirectory.slice(0, index + 1);
}

export const isldir = (name) => {
	const curDirWithoutSlash = currentDirectory.slice(0 , -1)
	const indexOfFirstSlice = curDirWithoutSlash.lastIndexOf('/')
	const estDir = currentDirectory.slice(0, indexOfFirstSlice)
	if(estDir == "assets/file" && name == "root") return true
	const indexOfSecondSlice = estDir.lastIndexOf('/')
	const estFileName = estDir.slice(indexOfSecondSlice + 1)
	if(estFileName == name) return true
	return false
}
