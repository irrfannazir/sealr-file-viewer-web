const allCSS = [...document.styleSheets].flatMap(sheet => {
    try {
        return [...sheet.cssRules];
    } catch {
        return []; // Ignore CORS-restricted sheets
    }
});

const declaredVars = new Set();
const usedVars = new Set();

for (const rule of allCSS) {
    const text = rule.cssText;

    // Collect declared variables
    const declMatches = [...text.matchAll(/--([\w-]+)\s*:/g)];
    for (const m of declMatches) declaredVars.add(`--${m[1]}`);

    // Collect used variables
    const useMatches = [...text.matchAll(/var\(\s*--([\w-]+)\s*/g)];
    for (const m of useMatches) usedVars.add(`--${m[1]}`);
}

const unusedVars = [...declaredVars].filter(v => !usedVars.has(v));
console.log("🔍 Unused CSS variables:", unusedVars);
