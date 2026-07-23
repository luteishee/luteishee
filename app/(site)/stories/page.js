import Link from 'next/link';
import { supabase } from '../../../lib/supabaseClient';

export const dynamic = 'force-dynamic';

export default async function StoriesPage() {
  const { data: stories } = await supabase
    .from('stories')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div>
      <h1 className="page-title">Все истории</h1>
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
