'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const LINES = [
  'Серёга…',
  'За эти годы ты снял десятки часов лютейшего…',
  'Они лежат на флэшках…',
  'На YouTube и в VK…',
  'Но ты заслуживаешь большего…',
];

export default function CardPage() {
  const router = useRouter();
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [lineIndex, setLineIndex] = useState(-1);
  const [showLogo, setShowLogo] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [showEnter, setShowEnter] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let t = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      ctx.fillStyle = '#1C1E1F';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const waves = 3;
      for (let w = 0; w < waves; w++) {
        ctx.beginPath();
        const amplitude = 18 + w * 10;
        const yBase = canvas.height * 0.6 + w * 40;
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = yBase + Math.sin(x * 0.01 + t + w) * amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = `rgba(51, 71, 58, ${0.15 + w * 0.1})`;
        ctx.fill();
      }
      t += 0.015;
      animationId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }
    runSequence();
  };

  const runSequence = () => {
    LINES.forEach((_, i) => {
      setTimeout(() => setLineIndex(i), i * 3200);
    });
    const afterLines = LINES.length * 3200;
    setTimeout(() => setShowLogo(true), afterLines + 500);
    setTimeout(() => setShowFinal(true), afterLines + 2500);
    setTimeout(() => setShowEnter(true), afterLines + 4000);
  };

  return (
    <div className="card-wrapper">
      <canvas ref={canvasRef} className="card-canvas" />
      <audio ref={audioRef} src="/water.mp3" loop />

      <div className="card-content">
        {!started && (
          <button className="card-start-btn" onClick={handleStart}>
            Нажми, чтобы начать
          </button>
        )}

        {started && (
          <>
            {LINES.map((line, i) => (
              i === lineIndex && (
                <p key={i} className={`card-text visible`}>{line}</p>
              )
            ))}

            {showLogo && (
              <div className={`card-logo ${showLogo ? 'visible' : ''}`}>
                ЛЮТЕЙШЕЕ
              </div>
            )}

            {showFinal && (
              <p className="card-text visible">
                Теперь у твоих воспоминаний есть собственный дом.
              </p>
            )}

            {showEnter && (
              <div style={{ marginTop: 32 }}>
                <button
                  className={`card-enter-btn ${showEnter ? 'visible' : ''}`}
                  onClick={() => router.push('/')}
                >
                  Войти
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
