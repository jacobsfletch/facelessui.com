// For information on Content Security Policy see https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
// By default, Google, YouTube, Vimeo, Instagram, and Stripe APIs are allowed

const policies = {
  "default-src": [
    "'self'",
    "blob:",
  ],
  "media-src": [
    "'self'",
    "blob:",
    "data:",
    "https://facelessui.com"
  ],
  "img-src": [
    "'self'",
    "data:",
    "blob:",
    "https://facelessui.com",
    "https://maps.gstatic.com"
  ],
  "style-src": [
    "'self'",
    "'unsafe-inline'",
    "blob:",
    "https://fonts.googleapis.com",
    "https://fonts.cdnfonts.com"
  ],
  "font-src": [
    "'self'",
    "data:",
    "https://fonts.gstatic.com",
    "https://fonts.cdnfonts.com"
  ],
  "frame-src": [
    "'self'",
    "data:",
    "*.youtube.com"
  ],
  "script-src": [
    "'self'",
    "blob:",
    "'unsafe-eval'",
    "'unsafe-inline'",
    "*.googleapis.com",
    "*.youtube.com",
    "*.googletagmanager.com",
    "*.google-analytics.com"
  ],
  "connect-src": [
    "'self'",
    "ws:",
    "https://facelessui.com",
    "*.googletagmanager.com",
    "*.google-analytics.com",
    "registry.npmjs.org",
    "https://api.github.com"
  ],
  "object-src": [
    "'self'",
    "data:"
  ],
};

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(" ")}`;
    }
    return "";
  })
  .join("; ");
