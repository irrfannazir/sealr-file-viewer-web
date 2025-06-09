let isMobile = false

export const getIsMobile = () => {
    return isMobile
}

window.loadFileManager = function(){
    document.querySelectorAll('[wmodel]').forEach(
        el => {
            const modelName = el.getAttribute('wmodel');
            if(modelName == "mobile-man") {
                el.style.display = "block";
                el.style.gridTemplateColumns = "";
                const fileCanvas = el.querySelector('.fs-b2')
                fileCanvas.style.display = 'none';
                const fileManager = el.querySelector('.fs-b1');
                fileManager.style.display = 'block';
                isMobile = 1;
            }
        }
    );
}

window.loadFileManager()

