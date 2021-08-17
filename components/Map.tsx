import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { InfoWindow } from '@react-google-maps/api'
import { useState } from "react";
import MapInfoWindow from './MapInfoWindow';

export default function Map(props: any) {
  const { data } = props;
  const [isVisibleInfoWindow, setVisibleInfoWindow] = useState(false)

  const containerStyle = {
    width: '100%',
    height: '420px'
  };

  const center = {
    lat: 61.49911,
    lng: 23.78712
  };

  const markerPosition = {
    lat: 61.49911,
    lng: 23.78712
  }

  const InfoWindowPosition = {
    lat: 61.49999,
    lng: 23.78712
  }

  return <LoadScript
    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      {isVisibleInfoWindow && <InfoWindow
        position={InfoWindowPosition}
        onCloseClick={() => setVisibleInfoWindow(false)}
      >
        <div style={{
          background: `white`,
          padding: 15
        }}>
          <MapInfoWindow data={data} />
        </div>
      </InfoWindow>}
      <Marker
        position={markerPosition}
        onClick={() => setVisibleInfoWindow(true)}
      />
    </GoogleMap>
  </LoadScript>
}