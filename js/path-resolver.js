document.addEventListener('DOMContentLoaded', function() {
    // Wait for BASE_URL to be available
    setTimeout(() => {
        // Update all asset paths
        updateAssetPaths();
    }, 0);
});

function updateAssetPaths() {
    // Update CSS links
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        if (link.href.includes('/css/')) {
            link.href = window.BASE_URL + link.getAttribute('href');
        }
    });

    // Update image sources
    document.querySelectorAll('img').forEach(img => {
        if (img.src.includes('/images/')) {
            img.src = window.BASE_URL + img.getAttribute('src');
        }
    });

    // Update navigation links
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href.includes('/pages/') || href === '/index.html')) {
            link.href = window.BASE_URL + href;
        }
    });

    // Update script sources
    document.querySelectorAll('script').forEach(script => {
        if (script.src.includes('/js/')) {
            script.src = window.BASE_URL + script.getAttribute('src');
        }
    });
}