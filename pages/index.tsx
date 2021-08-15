import Image from 'next/image'
import { client } from "../prismic-configuration"

function Home(props: any) {
  const { data } = props

  return (
    <>
      <article className="prose">
        <h1>{data.title[0].text}</h1>
        <Image src="/images/elderly.jpg" width={960} height={640} alt="elderly" />
      </article>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const res = await client.getSingle('home', {})

  return {
    props: {
      data: res.data
    },
  }
}