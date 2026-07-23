'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <Link href="/" className="logo-link" onClick={closeMenu}>
        <img src="/logo.png" alt="Лютейшее" className="logo-img" />
      </Link>
      <button className="burger" onClick={() => setOpen(!open)}>
        {open ? '✕' : '☰'}
      </button>
      <nav className={`nav ${open ? 'open' : ''}`}>
        <Link href="/" onClick={closeMenu}>Главная</Link>
        <Link href="/stories" onClick={closeMenu}>Истории</Link>
        <Link href="/map" onClick={closeMenu}>Карта</Link>
        <Link href="/gallery" onClick={closeMenu}>Галерея</Link>
        <Link href="/about" onClick={closeMenu}>Обо мне</Link>
      </nav>
    </header>
  );
}
