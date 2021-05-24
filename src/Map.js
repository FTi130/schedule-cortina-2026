import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken =
    'pk.eyJ1IjoidXNlcnBhdiIsImEiOiJja3AyanpkZGYwNmNjMnVta25scmhob3MxIn0.DUIm9sqf6hql4AYqIeSqBg';
// mine is pk.eyJ1IjoidXNlcnBhdiIsImEiOiJja3AyanpkZGYwNmNjMnVta25scmhob3MxIn0.DUIm9sqf6hql4AYqIeSqBg

// default is pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA

const Map = () => {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(12.425);
    const [lat, setLat] = useState(46.515);
    const [zoom, setZoom] = useState(10.5);

    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: [lng, lat],
            zoom: zoom,
            pitch: 45
        });


        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        // Clean up on unmount
        return () => map.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className='map-container' ref={mapContainerRef} />
        </div>
    );
};

export default Map;