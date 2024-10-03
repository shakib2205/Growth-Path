import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    const mirpurPosition = [23.8067, 90.3687];
    return (
        <div className='mb-6' style={{ height: '500px', width: '100%' }}>
            <MapContainer center={mirpurPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={mirpurPosition}>
                    <Popup>
                        Mirpur-1, Dhaka <br /> A bustling area in Dhaka.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;