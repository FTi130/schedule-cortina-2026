import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './Map.css';
import {Marker} from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import cortinalogotext from './cortinalogotext.png';



mapboxgl.accessToken =
    'pk.eyJ1IjoidXNlcnBhdiIsImEiOiJja24zZmhxODAwOGpoMnZvMGpnZmtrNnhiIn0.62IOjLEwae3VzgbXme8MNg';
// mine is pk.eyJ1IjoidXNlcnBhdiIsImEiOiJja3AyanpkZGYwNmNjMnVta25scmhob3MxIn0.DUIm9sqf6hql4AYqIeSqBg
// mine default
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
            pitch: 45,
            accessToken: 'pk.eyJ1IjoidXNlcnBhdiIsImEiOiJja24zZmhxODAwOGpoMnZvMGpnZmtrNnhiIn0.62IOjLEwae3VzgbXme8MNg'
        });


        map.on('move', () => {
            setLng(map.getCenter().lng.toFixed(4));
            setLat(map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });

        var Calalzo = new mapboxgl.Popup({ closeOnClick: false, closeButton: false })
            .setLngLat([12.379,46.4559])
            .setHTML('<h1>The bus depot</h1>')
            .addTo(map);

//         /*
//         var Cortina = new mapboxgl.Popup({ closeOnClick: true, closeButton:false})
//             .setLngLat([12.13567, 46.545])
//             .setHTML('<button style="width: 20px"> <p>Lol</p> </button>')
//             .addTo(map);
//
//         */
//
//         var popup = new mapboxgl.Popup({ offset: 0 }).setText(
//             'Cortina'
//         );
//
// // create DOM element for the marker
//         var el = document.createElement('div');
//         el.id = 'marker';

// // create the marker
//         new mapboxgl.Marker(el)
//             .setLngLat([12.12567, 46.575])
//             .setPopup(popup) // sets a popup on this marker
//             .addTo(map);



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