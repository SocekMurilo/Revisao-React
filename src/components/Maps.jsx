import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'



const position = [-25.424952069124267, -49.27230234054589]

export const Maps = (props) => {
    return(
    <MapContainer style={{width : "80vw", height: "80vh"}} center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        </Marker>
    </MapContainer>
    )
}