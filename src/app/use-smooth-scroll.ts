'use client';
import { useEffect } from 'react';

// Wheel input is taken over and animated with an exponential ease-out, so the
// page glides to a stop instead of halting the moment the wheel stops. Touch
// devices keep their native momentum, and reduced-motion users keep native scroll.
const EASE = 0.07;
const SETTLE = 0.4;

export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let target = window.scrollY;
    let current = target;
    let lastSet = target;
    let frame = 0;
    let animating = false;

    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const stop = () => {
      animating = false;
      if (frame) { cancelAnimationFrame(frame); frame = 0; }
    };

    const step = () => {
      current += (target - current) * EASE;
      if (Math.abs(target - current) < SETTLE) {
        current = target;
        lastSet = current;
        window.scrollTo({ top: current, behavior: 'instant' as ScrollBehavior });
        animating = false;
        frame = 0;
        return;
      }
      lastSet = current;
      window.scrollTo({ top: current, behavior: 'instant' as ScrollBehavior });
      frame = requestAnimationFrame(step);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.defaultPrevented) return;
      // A nested scrollable area keeps its own scrolling.
      let node = event.target as HTMLElement | null;
      while (node && node !== document.body) {
        if (node.scrollHeight > node.clientHeight + 1) {
          const atTop = node.scrollTop <= 0;
          const atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 1;
          if (!(atTop && event.deltaY < 0) && !(atBottom && event.deltaY > 0)) return;
        }
        node = node.parentElement;
      }
      const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
      const delta = event.deltaY * scale;
      if (!delta) return;
      event.preventDefault();
      target = Math.min(maxScroll(), Math.max(0, target + delta));
      if (!animating) { animating = true; frame = requestAnimationFrame(step); }
    };

    const onScroll = () => {
      // A scroll we did not cause (keyboard, anchor, scrollbar) takes over.
      if (animating && Math.abs(window.scrollY - lastSet) < 2) return;
      stop();
      target = window.scrollY;
      current = target;
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      stop();
    };
  }, []);
}
