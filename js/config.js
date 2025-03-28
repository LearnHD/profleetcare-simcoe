// Determine if we're running on GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');

// Set the base URL accordingly
const BASE_URL = isGitHubPages ? '/profleetcare-simcoe' : '';

// Export for use in other scripts
window.BASE_URL = BASE_URL;