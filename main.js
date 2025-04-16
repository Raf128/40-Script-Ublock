// This script is intended to be added as a user resource in uBlock Origin.
// To execute this script on every page, add the following filter to uBlock Origin:
// *$script,redirect=your-script-name.js

(function() {
    'use strict';

    (function checkRedirect() {
        const referrer = document.referrer;
        const regex = /https?:\/\/.*@.*\..*/;
        if (regex.test(referrer)) {

        }
    })();

    function showIframe() {
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.width = '50%';
        iframe.style.height = '50%';
        iframe.style.top = '25%';
        iframe.style.left = '25%';
        iframe.style.zIndex = '9999';
        iframe.style.border = '1px solid black';
        iframe.src = 'https://raw.githubusercontent.com/Raf128/40-Script-Ublock/main/popup.html';
        document.body.appendChild(iframe);
    }

    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.shiftKey && event.key === '1') {
            showIframe();
        }
    });
})();
