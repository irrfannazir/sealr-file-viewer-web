const navigatorBar = document.getElementById("navigatorBar");


export const refreshBlocks = () => {
    const redirectBlocks = document.querySelectorAll(".t-fn-block");
    const firstIndex = -62 - (39 * redirectBlocks.length)
    document.documentElement.style.setProperty('--navigator-x-cordinate--', `${firstIndex}px`)
    redirectBlocks.forEach((el, i) => {
        el.addEventListener("mouseenter", () => {
            navigatorBar.style.top = `${39 * i}px`;
        });
    });
}

refreshBlocks();