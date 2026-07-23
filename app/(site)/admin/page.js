'use client';
import { useState } from 'react';

const inputStyle = {
  padding: '14px 16px', borderRadius: 12,
  border: '1.5px solid rgba(43,46,47,0.15)',
  fontSize: 15, fontFamily: 'inherit',
};
const suggestionsBox = {
  position: 'absolute', top: '100%', left: 0, right: 0,
  background: 'white', border: '1px solid rgba(0,0,0,0.1)',
  borderRadius: 12, marginTop: 4, zIndex: 10, maxHeight: 200, overflowY: 'auto',
};
const suggestionItem = {
  padding: '10px 14px', cursor: 'pointer', fontSize: 14,
  borderBottom: '1px solid rgba(0,0,0,0.05)',
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [status, setStatus] = useState('');

  const searchLocation = async (query) => {
    setLocation(query);
    if (query.length < 3) { setSuggestions([]); return; }
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`);
    const data = await res.json();
    setSuggestions(data);
  };

  const selectSuggestion = (item) => {
    setLocation(item.display_name);
    setLat(item.lat);
    setLng(item.lon);
    setSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Публикуем...');
    const res = await fetch('/api/add-story', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, videoUrl, title, description, date, location, lat, lng }),
    });
    const data = await res.json();
    if (res.ok) {
      setStatus('Готово! История опубликована 🎉');
      setVideoUrl(''); setTitle(''); setDescription(''); setDate(''); setLocation(''); setLat(''); setLng('');
    } else {
      setStatus('Ошибка: ' + data.error);
    }
  };

  return (
    <div style={{ maxWidth: 560, margin: '0 auto', paddingBottom: 60 }}>
      <h1 className="page-title">Новая история</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
        <input type="password" placeholder="Пароль администратора" value={password}
          onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
        <input type="text" placeholder="Ссылка на видео (YouTube)" value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)} required style={inputStyle} />
        <input type="text" placeholder="Название истории" value={title}
          onChange={(e) => setTitle(e.target.value)} required style={inputStyle} />
        <textarea placeholder="Описание" value={description}
          onChange={(e) => setDescription(e.target.value)} rows={4} style={inputStyle} />
        <input type="text" placeholder="Дата (например, 2024)" value={date}
          onChange={(e) => setDate(e.target.value)} required style={inputStyle} />
        <div style={{ position: 'relative' }}>
          <input type="text" placeholder="Локация (начните вводить название)" value={location}
            onChange={(e) => searchLocation(e.target.value)} required style={inputStyle} />
          {suggestions.length > 0 && (
            <div style={suggestionsBox}>
              {suggestions.map((s, i) => (
                <div key={i} onClick={() => selectSuggestion(s)} style={suggestionItem}>{s.display_name}</div>
              ))}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
          Опубликовать
        </button>
        {status && <p style={{ opacity: 0.7 }}>{status}</p>}
      </form>
    </div>
  );
}
