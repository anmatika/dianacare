
import { client } from "../prismic-configuration"
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { mapsKey } from '../maps.configuration'

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
          +358 123456
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
console.log('google api key', mapsKey)

export default GoogleApiWrapper({
  apiKey: (mapsKey || '')
})(Contact);

export async function getStaticProps() {
  const res = await client.getSingle('contact', {})

  return {
    props: {
      data: res.data
    },
  }
}