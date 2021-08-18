
import { client } from "../prismic-configuration"
import HeroAbout from "../components/HeroAbout";

function About(props: any) {
  const { data } = props;

  return <>
    <HeroAbout />

    <div className="container">
      <article className="prose p-8" >
        <h1>{data['title']}</h1>
        <p>
          {data['text']}
        </p>
      </article >
    </div>
  </>
}

export default About;

export async function getStaticProps() {
  const res = await client.getSingle('tietoameista', {})

  return {
    props: {
      data: res.data
    },
  }
}