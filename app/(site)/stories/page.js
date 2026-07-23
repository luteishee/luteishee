import Link from 'next/link';
import { supabase } from '../../../lib/supabaseClient';
import VideoFrame from '../../components/VideoFrame';

export const dynamic = 'force-dynamic';

export default async function StoriesPage() {
  const { data: stories, error } = await supabase
    .from('stories')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div>
      <h1 className="page-title">Все истории</h1>

      {error && (
        <div style={{ background: '#fdd', padding: 20, borderRadius: 12, margin: '20px 0', color: '#900' }}>
          <strong>Ошибка:</strong> {error.message}
        </div>
      )}

      <div style={{ background: '#eee', padding: 20, borderRadius: 12, margin: '20px 0', fontSize: 13 }}>
        <strong>Debug:</strong> Найдено историй: {stories?.length ?? 'null'}<br />
        {stories && stories[0] && (
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(stories[0], null, 2)}</pre>
        )}
      </div>

      <div className="stories-grid">
        {stories?.map((s) => (
          <Link key={s.slug} href={`/stories/${s.slug}`} className="story-card">
            <VideoFrame
              platform={s.platform}
              videoData={s.video_data}
              title={s.title}
              className="story-frame"
            />
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
