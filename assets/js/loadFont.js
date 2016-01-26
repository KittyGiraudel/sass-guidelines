// From https://github.com/bdadam/OptimizedWebfontLoading/blob/master/src/js/fontloader.js
// Modified line 47 to use woff2-feature-test dependency

//This script must be placed in the HEAD above all external stylesheet declarations (link[rel=stylesheet])
function loadFont(fontName, woffUrl, woff2Url, onlyLoadFontOnSecondPageload) {
    // 0. Many unsupported browsers should stop here
    var nua = navigator.userAgent;
    var noSupport = !window.addEventListener // IE8 and below
            || (nua.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/) && !nua.match(/Chrome/)) // Android Stock Browser below 4.4 and Opera Mini

    if (noSupport) { return; }

    // 1. Setting up localStorage
    var loSto = {};
    try {
        // We set up a proxy variable to help with localStorage, e.g. when cookies are disabled
        // and the browser prevents us accessing it.
        // Otherwise some exceptions can be thrown which completely prevent font loading.
        loSto = localStorage || {};
    } catch(ex) {}

    var localStoragePrefix = 'x-font-' + fontName;
    var localStorageUrlKey = localStoragePrefix + 'url';
    var localStorageCssKey = localStoragePrefix + 'css';
    var storedFontUrl = loSto[localStorageUrlKey];
    var storedFontCss = loSto[localStorageCssKey];


    // 2. Setting up the <style> element, that we are using to apply the base64 encoded font data
    var styleElement = document.createElement('style');
    styleElement.rel = 'stylesheet';
    document.head.appendChild(styleElement);
    // Setting styleElement.textContent must be after this line, because of IE9 errors


    // 3. Checking whether the font data is already in localStorage and up-to-date
    if (storedFontCss && (storedFontUrl === woffUrl || storedFontUrl === woff2Url)) {
        // the css is still in the localStorage
        // AND it was loaded from one of the current URLs
        
        // 4. Applying the font style sheet
        styleElement.textContent = storedFontCss;
    } else {
        // The data was not present, or loaded from an obsolete URL
        // So we have to load it again

        // 5. Checking for WOFF2 support to know which URL we should use
        var url = (woff2Url && supportsWoff2)
            ? woff2Url // WOFF2 URL provided and supported
            : woffUrl; // only WOFF support

        // 6. Fetching the font data from the server
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                
                // 7. Updating localStorage with the fresh data and applying the font data
                loSto[localStorageUrlKey] = url;
                loSto[localStorageCssKey] = request.responseText;
                if (!onlyLoadFontOnSecondPageload) {
                  styleElement.textContent = request.responseText;
                }
            }
        };
        request.send();
    }
}
