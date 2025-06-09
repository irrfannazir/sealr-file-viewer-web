export const activateViewBar = () => {
    const fileCanvas = document.querySelector('.fs-b2')
    fileCanvas.style.display = 'block';
    const fileManager = document.querySelector('.fs-b1')
    fileManager.style.display = 'none';
}