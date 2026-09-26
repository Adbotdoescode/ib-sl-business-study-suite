export async function triggerConfetti(options?: {
  particleCount?: number;
  spread?: number;
  origin?: { x: number; y: number };
}) {
  if (typeof window === 'undefined') return;
  try {
    const confetti = (await import('canvas-confetti')).default;
    confetti({
      particleCount: options?.particleCount ?? 60,
      spread: options?.spread ?? 70,
      origin: options?.origin ?? { y: 0.65, x: 0.5 },
      colors: ['#2563EB', '#059669', '#D97706', '#6B21A8', '#111827'],
      disableForReducedMotion: true,
    });
  } catch (err) {
    console.warn('Confetti animation suppressed:', err);
  }
}

export async function triggerCelebration() {
  if (typeof window === 'undefined') return;
  try {
    const confetti = (await import('canvas-confetti')).default;
    const end = Date.now() + 1000;
    const colors = ['#2563EB', '#059669', '#F59E0B', '#8B5CF6'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch (err) {
    console.warn('Celebration suppressed:', err);
  }
}
