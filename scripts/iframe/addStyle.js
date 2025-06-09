
export const addStyle = () => {
    const iframe = document.querySelector("iframe");
    iframe.onload = function() {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
    
        const style = doc.createElement("style");
        style.innerHTML = `
            body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
                font-size: 16px;
                border-radius: 30px;
                padding: 20px;
            }
            body, embed{
                border-radius: `+iframe.style.borderRadius+`;
            }
        `;
        doc.head.appendChild(style);

    };
}