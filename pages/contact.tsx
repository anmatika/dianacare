
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
    <div>
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