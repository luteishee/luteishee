export function parseVideoUrl(url) {
  if (!url) return null;

  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  if (ytMatch) {
    return { platform: 'youtube', id: ytMatch[1] };
  }

  const vkMatch = url.match(/vk\.com\/video(-?\d+)_(\d+)/);
  if (vkMatch) {
    return { platform: 'vk', ownerId: vkMatch[1], videoId: vkMatch[2] };
  }

  const rutubeMatch = url.match(/rutube\.ru\/(?:video|play\/embed)\/([a-zA-Z0-9]+)/);
  if (rutubeMatch) {
    return { platform: 'rutube', id: rutubeMatch[1] };
  }

  return null;
}

export function getEmbedUrl(platform, data) {
  if (!data) return null;

  switch (platform) {
    case 'youtube':
      return data.id ? `https://www.youtube.com/embed/${data.id}` : null;
    case 'vk':
      return (data.ownerId && data.videoId)
        ? `https://vk.com/video_ext.php?oid=${data.ownerId}&id=${data.videoId}&hd=2`
        : null;
    case 'rutube':
      return data.id ? `https://rutube.ru/play/embed/${data.id}` : null;
    default:
      return null;
  }
}
