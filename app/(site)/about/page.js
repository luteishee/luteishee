export default function AboutPage() {
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-image-wrap">
          <img src="/sergey.png" alt="Сергей" className="about-image" />
        </div>

        <div className="about-text">
          <p className="hero-eyebrow">Обо мне</p>
          <h1 className="about-title">Сергей</h1>

          <p className="about-paragraph">
            Для меня рыбалка — это не про улов. Это про дорогу туда,
            костёр вечером, разговоры ни о чём и обо всём сразу,
            и тот самый момент, когда закат красивее любой картинки.
          </p>

          <p className="about-paragraph">
            Я снимаю каждую поездку — потому что эти моменты
            с семьёй и друзьями пролетают слишком быстро,
            а вспоминать их хочется всегда.
          </p>

          <p className="about-paragraph">
            «Лютейшее» — это не про рыбу и не про технику.
            Это архив наших дорог, наших мест и наших людей.
          </p>

          <div className="about-contacts">
            <a href="#" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="Telegram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.05 3.16 2.53 10.4c-1.27.5-1.26 1.2-.23 1.52l4.76 1.48 1.84 5.6c.22.62.38.87.78.87.4 0 .58-.18.8-.4l1.9-1.85 4.85 3.58c.9.5 1.53.24 1.76-.83l3.18-15c.32-1.3-.47-1.9-1.12-1.6Zm-12.3 11.1-1.15-3.7 8.6-5.6c.4-.25.77-.12.47.16l-7.92 9.14Z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="VK">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.16 17.5h1.2c.36 0 .53-.16.53-.4 0-.44-.7-1.32-1.36-2.06-.6-.66-.86-.88-.86-1.17 0-.18.15-.35.55-.9l1.83-2.6c.22-.32.05-.6-.35-.6h-1.28c-.34 0-.5.17-.63.42 0 0-.9 1.67-1.9 2.75-.34.37-.5.5-.68.5-.1 0-.24-.13-.24-.5v-2.75c0-.4-.12-.57-.45-.57H8.6c-.25 0-.4.18-.4.35 0 .38.56.46.62 1.53v2.3c0 .5-.1.6-.28.6-.5 0-1.7-1.7-2.4-3.63-.14-.4-.28-.55-.62-.55H3.24c-.4 0-.47.18-.47.4 0 .38.47 2.28 2.2 4.78 1.15 1.68 2.78 2.6 4.25 2.6.87 0 .98-.2.98-.55v-1.27c0-.4.09-.5.37-.5.2 0 .55.1 1.36.9.93.93 1.08 1.35 1.6 1.35Z"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="contact-icon" aria-label="YouTube">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2c-.27-1-1.07-1.8-2.07-2.07C19.6 3.7 12 3.7 12 3.7s-7.6 0-9.43.43C1.57 4.4.77 5.2.5 6.2 0 8.02 0 12 0 12s0 3.98.5 5.8c.27 1 1.07 1.8 2.07 2.07 1.83.43 9.43.43 9.43.43s7.6 0 9.43-.43c1-.27 1.8-1.07 2.07-2.07.5-1.82.5-5.8.5-5.8s0-3.98-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
