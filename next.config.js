module.exports = {
  reactStrictMode: true,
  env: {
    DATABASE: process.env.DATABASE,
    SECRET: process.env.SECRET,
    SALT_ROUND: process.env.SALT_ROUND,
  },
  images: {
    domains: ['source.unsplash.com'],
  },
}
