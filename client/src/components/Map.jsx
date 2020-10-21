import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function Map() {
    const [viewport, setViewport] = useState({
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
        bearing: 0,
        pitch: 0
    });
    console.log("FUKC", MAPBOX_TOKEN)
    return (
        <ReactMapGL
            {...viewport}
            width="100vw"
            height="100vh"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
        />
    );
}

export default Map;