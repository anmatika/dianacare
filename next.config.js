/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  images: {
    domains: ['dianacare.prismic.io'],
  },
}
