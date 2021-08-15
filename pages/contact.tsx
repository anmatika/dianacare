
import { client } from "../prismic-configuration"

function Contact({ data }: any) {
  return <article className="prose" >
    <h1>{data.title[0].text} </h1>
    <p>
    </p>
    <p>
    </p>
  </article>
}

export default Contact;

export async function getStaticProps() {
  const res = await client.getSingle('contact', {})

  return {
    props: {
      data: res.data
    },
  }
}