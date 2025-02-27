import React from 'react'
import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const MyMap = () => {
    const [film, setFilm] = useState([])
    useEffect(()=>{
        fetch("/data.json").then((response) => response.json()).then((data) => setFilm(data)).catch((error)=> console.log("Erreur :", error))
    }, [])

    const defaultCenter = [37.79, -122.4]

    return (
        <MapContainer center= {defaultCenter} zoom={13} scrollWheelZoom={false} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {film.map((film, index) => {
            const Lat = parseFloat(film.lat)
            const Lng = parseFloat(film.lng)
            return (
                <Marker key={index} position={[Lat, Lng]}>
                    <Popup>
                        <p>{film.title}</p> 
                        <p> {film.locations}</p>
                    </Popup>
                </Marker>
            )
            })}
        </MapContainer>
    )
}

export default MyMap;
