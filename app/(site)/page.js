import Link from 'next/link';

export default function Home() {
  return (
    <section className="home-hero">
      <div className="topo-lines" aria-hidden="true">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path className="topo-path topo-1" d="M-50,600 C200,550 400,650 600,600 C800,550 1000,600 1250,560" />
          <path className="topo-path topo-2" d="M-50,650 C250,600 450,700 650,650 C850,600 1050,650 1250,610" />
          <path className="topo-path topo-3" d="M-50,700 C300,650 500,750 700,700 C900,650 1100,700 1250,660" />
          <path className="topo-path topo-4" d="M-50,550 C200,500 400,600 600,550 C800,500 1000,550 1250,510" />
        </svg>
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Личный архив путешествий</p>

        <h1 className="hero-logo">ЛЮТЕЙШЕЕ</h1>

        <p className="hero-subtitle">
          Рыбалка, дорога, друзья и семья —<br />
          истории, которые заслуживают своего дома
        </p>

        <div className="home-buttons">
          <Link href="/stories" className="btn btn-primary">
            Смотреть видео
          </Link>
          <Link href="/map" className="btn btn-secondary">
            Карта поездок
          </Link>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
}
