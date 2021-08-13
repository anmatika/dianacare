// import Prismic from "prismic-javascript"
import Prismic from '@prismicio/client';

// Prismic API endpoint
// console.log('env', process.env)
console.log('env.PRISMIC_URL', process.env.PRISMIC_URL)
export const apiEndpoint = process.env.PRISMIC_URL
// if (apiEndpoint === undefined) {
//   throw new Error("api endpoint not defined")
// }

console.log('apiendpoint', apiEndpoint)

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_TOKEN

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint, { accessToken })