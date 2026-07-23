import { supabase } from '../../../../lib/supabaseClient';
import ShareButton from '../../../components/ShareButton';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function StoryPage({ params }) {
  const { data: story } = await supabase
    .from('stories')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!story) return notFound();

  return (
    <div style={{ paddingBottom: 60 }}>
      <h1 className="page-title">{story.title}</h1>
      <div className="story-meta" style={{ marginTop: 12 }}>
        <span>{story.location}</span>
        <span>·</span>
        <span>{story.date}</span>
      </div>
      <div className="story-detail-frame">
        <iframe
          src={`https://www.youtube.com/embed/${story.youtube_id}`}
          title={story.title}
          allowFullScreen
        />
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.85 }}>
        {story.description}
      </p>
      <ShareButton title={story.title} />
    </div>
  );
}
