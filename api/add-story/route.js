import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

function extractYoutubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=|embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-zа-яё0-9]+/gi, '-').replace(/^-+|-+$/g, '');
}

export async function POST(req) {
  const body = await req.json();
  const { password, videoUrl, title, description, date, location, lat, lng } = body;

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Неверный пароль' }, { status: 401 });
  }

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const youtubeId = extractYoutubeId(videoUrl);
  const slug = slugify(title) + '-' + Date.now().toString().slice(-4);

  const { error } = await supabaseAdmin.from('stories').insert({
    slug, title, description, date, location,
    lat: lat ? parseFloat(lat) : null,
    lng: lng ? parseFloat(lng) : null,
    youtube_id: youtubeId,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true, slug });
}
