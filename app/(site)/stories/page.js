import Link from 'next/link';
import { supabase } from '../../../lib/supabaseClient';
import VideoFrame from '../../../app/components/VideoFrame';

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
