import Link from 'next/link';
import { supabase } from '../../../lib/supabaseClient';

export const dynamic = 'force-dynamic';

export default async function StoriesPage() {
  const { data: stories, error } = await supabase
    .from('stories')
    .select('*');

  return (
    <div>
      <h1 className="page-title">Все истории</h1>

      {error && (
        <div style={{ background: '#fdd', padding: 20, borderRadius: 12, margin: '20px 0', color: '#900' }}>
          <strong>Ошибка:</strong> {error.message}
        </div>
      )}

      <div style={{ background: '#eee', padding: 20, borderRadius: 12, margin: '20px 0', fontSize: 13 }}>
        <strong>Debug info:</strong><br />
        SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL || 'НЕ НАЙДЕН'}<br />
        Количество историй: {stories?.length ?? 'null'}
      </div>

      <div className="stories-grid">
        {stories?.map((s) => (
          <Link key={s.slug} href={`/stories/${s.slug}`} className="story-card">
            <div className="story-frame">
              <iframe
                src={`https://www.youtube.com/embed/${s.youtube_id}`}
                title={s.title}
                allowFullScreen
              />
            </div>
            <div className="story-info">
              <div className="story-title">{s.title}</div>
              <div className="story-meta">
                <span>{s.location}</span>
                <span>·</span>
                <span>{s.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
