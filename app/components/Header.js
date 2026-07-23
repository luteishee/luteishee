'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <Link href="/" className="logo-text" onClick={closeMenu}>ЛЮТЕЙШЕЕ</Link>
      <button className="burger" onClick={() => setOpen(!open)}>
