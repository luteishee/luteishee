import { stories } from '../../../../data/stories';
import ShareButton from '../../../components/ShareButton';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export default function StoryPage({ params }) {
  const story = stories.find((s) => s.slug === params.slug);
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
          src={`https://www.youtube.com/embed/${story.youtubeId}`}
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
