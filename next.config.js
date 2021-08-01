module.exports = {
  reactStrictMode: true,
  env: { DATABASE: process.env.DATABASE, SECRET: process.env.SECRET },
  images: {
    domains: ['source.unsplash.com'],
  },
}
