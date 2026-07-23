'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Link href="/" className="logo-text">ЛЮТЕЙШЕЕ</Link>
      <button className="burger" onClick={() => setOpen(!open)}>☰</button>
      <nav className={`nav ${open ? 'open' : ''}`}>
        <Link href="/">Главная</Link>
        <Link href="/stories">Истории</Link>
        <Link href="/map">Карта</Link>
        <Link href="/gallery">Галерея</Link>
        <Link href="/about">Обо мне</Link>
      </nav>
    </header>
  );
}
