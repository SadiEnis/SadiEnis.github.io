'use client';
import { useSmoothScroll } from './use-smooth-scroll';

// Mounted once in the root layout so every route scrolls the same way.
export function SmoothScroll() {
  useSmoothScroll();
  return null;
}
