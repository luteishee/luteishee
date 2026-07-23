'use client';
import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function MapClient({ stories }) {
  const mapContainer = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;

    const center = stories.length
      ? [stories[0].lng, stories[0].lat]
      : [48.03, 46.35];

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center,
      zoom: 6,
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.on('load', () => {
      stories.forEach((s) => {
        if (!s.lat || !s.lng) return;

        const el = document.createElement('div');
        el.className = 'map-marker';

        const popupHtml = `
          <div style="font-family: inherit; padding: 6px 2px;">
            <strong style="display:block;margin-bottom:4px;font-size:15px;">${s.title}</strong>
            <span style="font-size:13px;opacity:0.65;display:block;margin-bottom:10px;">${s.location}</span>
            <a href="/stories/${s.slug}" style="color:#33473A;font-weight:700;font-size:14px;">Смотреть →</a>
          </div>
        `;

        new maplibregl.Marker({ element: el })
          .setLngLat([s.lng, s.lat])
          .setPopup(new maplibregl.Popup({ offset: 22 }).setHTML(popupHtml))
          .addTo(map);
      });
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [stories]);

  return <div ref={mapContainer} className="map-container" />;
}
