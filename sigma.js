document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === '`') {
    const input = prompt("Enter a URL to load through 40%");
    if (!input) return;

    const stripped = input.replace(/^https?:\/\//, '');
    const obfuscated = `https://${"%40".repeat(sliderValue)}@${stripped}`;
    window.open(obfuscated, '_blank');
  }
});

(function() {
  const url = new URL(location.href);

  if (url.hostname.includes('@')) return;

  const fromObfuscated = document.referrer.includes('@') ||
    performance.getEntriesByType("navigation")[0]?.type === "navigate" && 
    document.referrer.includes(window.location.hostname);

  if (fromObfuscated) {
    const newUrl = `https://${"%40".repeat(sliderValue)}@${url.hostname}${url.pathname}${url.search}`;
    location.replace(newUrl);
  }
})();