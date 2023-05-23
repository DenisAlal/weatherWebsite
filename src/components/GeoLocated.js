import React from 'react';
import { useGeolocated } from 'react-geolocated';

const GeoLocation = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated();

    if (!isGeolocationAvailable) {
        return <div>Your browser does not support Geolocation.</div>;
    }

    if (!isGeolocationEnabled) {
        return <div>Geolocation is not enabled.</div>;
    }

    if (!coords) {
        return <div>Getting the location data&hellip; </div>;
    }
};

export default GeoLocation;