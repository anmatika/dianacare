
import { client } from "../prismic-configuration"
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

function Contact(props: any) {
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
        <Map
          google={props.google}
          containerStyle={{
            position: 'relative',
            width: '100%',
            height: '400px'
          }}
          initialCenter={{
            lat: 61.49911,
            lng: 23.78712
          }}
        >
          <Marker
          />
        </Map>
      </div>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: (process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '')
})(Contact);

export async function getStaticProps() {
  const res = await client.getSingle('yhteystiedot', {})

  return {
    props: {
      data: res.data
    },
  }
}