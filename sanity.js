import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: '8z22rckz',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export function urlFor(source) {
  return builder.image(source)
}

export default client
