import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const MyMap = ({ film }) => {
    const defaultCenter = [37.79, -122.4]
    // const newMarker=  [Lat, Lng]? defaultCenter : film

    return (
        <MapContainer
            center={defaultCenter}
            zoom={12}
            scrollWheelZoom={false}
            style={{
                height: "600px",
                width: "100%",
                borderRadius: '25px'
            }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {film.map((film, index) => {
                const Lat = parseFloat(film.lat)
                const Lng = parseFloat(film.lng)
                return (
                    <Marker key={index} position={[Lat, Lng]}>
                        <Popup
                            sx={{ display: 'flex', justifyContent: 'center', minWith: '500px' }}
                        >
                            <h2> {film.title} </h2>
                            <p>
                                Acteur 1 : {film.actor_1} <br />
                                Acteur 2 : {film.actor_2} <br />
                                Acteur 3 : {film.actor_3} <br />
                                Directeur : {film.director} <br />
                                Adresse : {film.locations} <br />
                                Production : {film.production_company} <br />
                                Année : {film.release_year} <br />
                                Ecrivain : {film.writer} <br />
                            </p>
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    )
}

export default MyMap;
