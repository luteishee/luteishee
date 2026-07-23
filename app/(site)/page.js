import Link from 'next/link';

export default function Home() {
  return (
    <section className="home-hero">
      <img src="/illustration.png" alt="Сергей" className="home-illustration" />
      <img src="/logo.png" alt="Лютейшее" className="home-logo-img" />
      <div className="home-buttons">
        <Link href="/stories" className="btn btn-primary">Смотреть видео</Link>
        <Link href="/map" className="btn btn-secondary">Карта поездок</Link>
      </div>
    </section>
  );
}
