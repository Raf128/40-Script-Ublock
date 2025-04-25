// Ublock Origin script version of %40 obfuscator
// This script will open a new tab with the specified URL and the specified number of percent-encoded @ symbols (%40) in the URL
// It will check if you were redirected from an obfuscated URL and if so, it will open your current URL in a new tab with obfuscation

function obfuscate(url) {
    let count = prompt("Enter a # of Iframes starting with 350 and with a max of 100000 (after 100000 it starts to get a lil' laggy):");
    const urlCount = parseInt(count, 10);
    if (isNaN(urlCount)) {
        alert("Please enter a valid number.");
        return;
    }
    if (urlCount < 350) {
        alert("Please enter a number greater than or equal to 350.");
        return;
    }
    if (urlCount > 100000) {
        alert("Please enter a number less than or equal to 100000.");
        return;
    }
    let newUrl = url.replace(/https?:\/\//, "");
    newUrl = "https://" + "%40".repeat(urlCount) + "@" + newUrl;
    window.open(newUrl, "_blank");
}

document.addEventListener("keydown", (event) => {
    if (event.code === "backquote" && event.ctrlKey) {
        prompt("Enter URL to open:").then((url) => {
            if (url) {
                obfuscate(url);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const referrer = document.referrer;
    if (referrer && referrer.includes("%40")) {
        const currentUrl = window.location.href;
        obfuscate(currentUrl);
    }
});
