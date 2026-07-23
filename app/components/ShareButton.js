'use client';
export default function ShareButton({ title }) {
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (e) {}
    } else {
      await navigator.clipboard.writeText(url);
      alert('Ссылка скопирована!');
    }
  };
  return (
    <button className="share-btn" onClick={handleShare}>
      Поделиться
    </button>
  );
}
