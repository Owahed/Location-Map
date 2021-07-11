import googleMapReact from 'google-map-react';
import React from 'react';
import GoogleMap from './GoogleMap';

const Map = () => {
    return (
        <div className="location">
            <h2 >Find You Location</h2>
            <GoogleMap />
        </div>
    );
};

export default Map;