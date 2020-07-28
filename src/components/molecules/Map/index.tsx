import React from 'react';

import { GoogleMap, LoadScript, GoogleMapProps } from '@react-google-maps/api';

interface MapProps extends GoogleMapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ center, className, ...rest }) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}
      preventGoogleFontsLoading
    >
      <GoogleMap
        {...rest}
        mapContainerClassName={className}
        center={center}
        zoom={16}
      />
    </LoadScript>
  );
};

export default Map;
