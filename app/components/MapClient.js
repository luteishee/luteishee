'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const icon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapClient({ stories }) {
  const center = stories.length
    ? [stories[0].lat, stories[0].lng]
    : [46.35, 48.03];

  return (
    <div style={{ height: '75vh', borderRadius: 18, overflow: 'hidden', margin: '32px 0' }}>
      <MapContainer center={center} zoom={6} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap &copy; CARTO'
        />
        {stories.map((s) => (
          <Marker key={s.slug} position={[s.lat, s.lng]} icon={icon}>
            <Popup>
              <strong>{s.title}</strong><br />
              {s.location}<br />
              <Link href={`/stories/${s.slug}`}>Смотреть →</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
