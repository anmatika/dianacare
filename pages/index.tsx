import { client } from "../prismic-configuration"
import HeroHome from '../components/HeroHome'

function Home(props: any) {
  const { data } = props

  return (
    <>
      <HeroHome data={data} />
      <div className="container">
        <div className="prose p-8">
          <h1>{data['title']} </h1>
          <div>
            <p>{data['text']}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const res = await client.getSingle('koti', { })

  return {
    props: {
      data: res.data
    },
  }
}