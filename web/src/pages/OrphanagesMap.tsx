import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import mapIcon from "../utils/mapIcon";
import api from "../services/api";

import mapMarker from ".././images/map-marker.svg";
import "../styles/pages/orphanage-map.css";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  open_on_weekends: boolean;
  opening_hours: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id='page-map'>
      <aside>
        <header>
          <Link to="/">
            <img src={mapMarker} alt='Happy' />
          </Link>
          <h2>Select an orphanage on the map</h2>
          <p>Many children are waiting for your visit (:</p>
        </header>
        <footer>
          <strong>Portugal</strong>
          <span>Famalicão</span>
        </footer>
      </aside>
      <Map
        center={[41.4125121, -8.5198418]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}>
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}>
              <Popup
                closeButton={false}
                maxWidth={240}
                minWidth={240}
                className='map-popup'>
                {orphanage.name}
                <Link to={`/orphanage/${orphanage.id}`}>
                  <FiArrowRight size={20} color='#FFF' />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to='/orphanages/create' className='create-orphanage'>
        <FiPlus size={32} color='#fff' />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
