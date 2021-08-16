
import { client } from "../prismic-configuration"
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '400px'
}

function Contact(props: any) {

  return (
    <>
      <div className="prose p-8"><h1>Löydät meidät täältä</h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <i className="fas fa-map-marker-alt mr-1"></i>
          Itsenäisyydenkatu 1, 33100 Tampere
        </div>
        <div>
          <i className="fas fa-phone-square mr-1"></i>
          +358 1234567
        </div>
        <div>
          <i className="fa fa-envelope mr-1" aria-hidden="true"></i>
          <a href="mailto: diana@dianacare.com">info@dianacare.com</a>
        </div>

      </div>
      <div className="p-8">
        <Map
          google={props.google}
          containerStyle={containerStyle}
          initialCenter={{
            lat: 61.49911,
            lng: 23.78712
          }}
        >
          <Marker
          />
        </Map></div>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: (process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '')
})(Contact);

export async function getStaticProps() {
  const res = await client.getSingle('contact', {})

  return {
    props: {
      data: res.data
    },
  }
}