/** @type {import('next').NextConfig} */
// ndule.exports = nextConfig

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  // next.js config
});
