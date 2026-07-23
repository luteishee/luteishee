import Link from 'next/link';

export default function Home() {
  return (
    <section className="home-hero">
      <div className="stripes" aria-hidden="true">
        <div className="stripe stripe-1"></div>
        <div className="stripe stripe-2"></div>
        <div className="stripe stripe-3"></div>
        <div className="stripe stripe-4"></div>
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
