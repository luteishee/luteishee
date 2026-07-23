import Link from 'next/link';

export default function Home() {
  return (
    <section className="home-hero">
      <div className="home-illustration">
        {/* Сюда позже подставим сгенерированную иллюстрацию */}
      </div>
      <div className="home-logo">ЛЮТЕЙШЕЕ</div>
      <div className="home-buttons">
        <Link href="/stories" className="btn btn-primary">Смотреть видео</Link>
        <Link href="/map" className="btn btn-secondary">Карта поездок</Link>
      </div>
    </section>
  );
}
