import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = (props) => {
    const [viewport, setViewPort] = useState({
        latitude: props.coordinates.data.data.coordinates.latitude,
        longitude: props.coordinates.data.data.coordinates.longitude,
        zoom: 14,
        bearing: 0,
        pitch: 0
    });

    const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
    console.log("HERE?", props.coordinates.data.data.coordinates.latitude)
    return (
        <div>
            <ReactMapGL
                {...viewport}
                width="50vw"
                height="60vh"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={_onViewportChange}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            />
        </div>
    );
}

export default Map;