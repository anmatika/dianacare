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
    height: '450px'
  };

  const center = {
    lat: 61.49911,
    lng: 23.77645
  };

  const markerPosition = {
    lat: 61.4990043,
    lng: 23.77645
  }

  const InfoWindowPosition = {
    lat: 61.49999,
    lng: 23.77645
  }

  const mapStyles = [
    {
      stylers: [
        {
          hue: '#2c3e50',
        },
        {
          saturation: 250,
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          lightness: 50,
        },
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ];

  return <LoadScript
    googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}
  >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={
        mapStyles
      }
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