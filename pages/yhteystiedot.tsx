
import { client } from "../prismic-configuration"
import Map from "../components/Map";

export default function Contact(props: any) {
  const { data } = props;
  const mailto = `mailto: ${data.email}`

  return (
    <>
      <div className="container">
        <div className="prose p-8">
          <h1>{data['title']}</h1>
          <p className="mb-8">
            {data.text}
          </p>
          <div>
            <i className="fas fa-map-marker-alt mr-1"></i>
            {data.address}
          </div>
          <div>
            <i className="fas fa-phone-square mr-1"></i>
            {data.phone}
          </div>
          <div>
            <i className="fa fa-envelope mr-1" aria-hidden="true"></i>
            <a href={mailto}>{data.email}</a>
          </div>
        </div>

      </div>
      <div className="p-8">
        <Map data={data} />
      </div>
    </>
  )
}


export async function getStaticProps() {
  const res = await client.getSingle('yhteystiedot', {})

  return {
    props: {
      data: res.data
    },
  }
}