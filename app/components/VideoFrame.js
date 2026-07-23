import { getEmbedUrl } from '../../lib/videoHelpers';

export default function VideoFrame({ platform, videoData, title, className }) {
  const embedUrl = getEmbedUrl(platform, videoData);

  if (!embedUrl) {
    return (
      <div className={className} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
        Видео недоступно
      </div>
    );
  }

  return (
    <div className={className}>
      <iframe
        src={embedUrl}
        title={title}
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
}
