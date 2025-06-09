import { addStyle } from "./addStyle.js";

export const openFile = (path) => {
    let canvas = document.getElementById("fileCanvas");
    canvas.innerHTML = `
        <iframe src='${path}'></iframe>
    `;
    addStyle();
}