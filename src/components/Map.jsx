import React from 'react'
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";

const MyMap = () => {
    const [info, setInfo] = useState([])

    useEffect(()=>{
        fetch("/data.json").then((response) => response.json()).then((data) => setInfo(data)).catch((error)=> console.log("Erreur", error))
    }, [])

    return (
        <MapContainer zoom={13} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {info.map((info, index) => {
            const lat = parseFloat(info.lat)
            const lng = parseFloat(info.lng)
            return (
                <Marker key={index} position={[lat, lng]}>
                    <Popup>
                        <p>{info.title}</p> 
                        <p> {info.locations}</p>
                    </Popup>
                </Marker>
            )
            })}
        </MapContainer>
    )
}

export default MyMap;
