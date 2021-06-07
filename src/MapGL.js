import React, {useState} from "react";
import ReactMapGL from "react-map-gl";


export default function MapGL(){

    let [viewport, setViewport] = useState({
        latitude:46.515,
        longitude: 12.425,
        zoom:8,
        width:window.innerWidth,
        height:window.innerHeight

    })
;

return (
    <ReactMapGL
        mapStyle = {'mapbox://styles/mapbox/dark-v9'}
        mapboxApiAccessToken={"pk.eyJ1IjoidXNlcnBhdiIsImEiOiJja24zZmhxODAwOGpoMnZvMGpnZmtrNnhiIn0.62IOjLEwae3VzgbXme8MNg"}
        {...viewport}
    >


    </ReactMapGL>
);
}