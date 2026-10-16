import { useEffect, useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { HeroPic, imageSet } from '@/lib/images';

// Desktop hero slideshow: one slide per service. Clips are muted 8s loops (Mixkit free license); phones never load them.
type Slide = { label: string; to: '/services' | '/services/commercial-doors' | '/services/commercial-signage' | '/services/exterior-cleaning' | '/services/parking-lot-care'; poster: string; alt: string; video?: string };
const slides: Slide[] = [
 { label: 'Commercial property service', to: '/services', poster: 'hero-slides/office-night', alt: 'Commercial office building at night', video: '/videos/hero-office-night.mp4' },
 { label: 'Commercial doors', to: '/services/commercial-doors', poster: 'hero-slides/doors', alt: 'People walking out through the glass entrance doors of an office building', video: '/videos/hero-doors.mp4' },
 { label: 'Commercial signage', to: '/services/commercial-signage', poster: 'hero-slides/signage', alt: 'Illuminated channel letter sign on a building at dusk', video: '/videos/hero-signage.mp4' },
 { label: 'Exterior cleaning', to: '/services/exterior-cleaning', poster: 'heroes/cleaning', alt: 'Worker pressure washing a sidewalk outside a commercial building' },
 { label: 'Parking-lot care', to: '/services/parking-lot-care', poster: 'hero-slides/parking', alt: 'Aerial view of a striped commercial parking lot', video: '/videos/hero-parking.mp4' },
];
const IMAGE_SLIDE_MS = 7000;

export function HeroSlides() {
 const [enabled, setEnabled] = useState(false);
 const [index, setIndex] = useState(0);
 const [paused, setPaused] = useState(false);
 const [visited, setVisited] = useState<Set<number>>(() => new Set([0]));
 const videos = useRef<(HTMLVideoElement | null)[]>([]);

 useEffect(() => {
  const desktop = window.matchMedia('(min-width: 768px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => { setEnabled(desktop.matches); if (reduced.matches) setPaused(true); };
  update(); desktop.addEventListener('change', update);
  return () => desktop.removeEventListener('change', update);
 }, []);

 const go = (next: number) => { const i = (next + slides.length) % slides.length; setVisited(v => new Set(v).add(i).add((i + 1) % slides.length)); setIndex(i); };

 useEffect(() => {
  if (!enabled) return;
  videos.current.forEach((v, i) => { if (!v) return; if (i === index && !paused) { v.currentTime = 0; void v.play().catch(() => {}); } else v.pause(); });
  if (paused || slides[index]?.video) return;
  const t = window.setTimeout(() => go(index + 1), IMAGE_SLIDE_MS);
  return () => window.clearTimeout(t);
 }, [index, paused, enabled]);

 const first = slides[0]!;
 if (!enabled) return <HeroPic image={first.poster} className="hero-image" alt={first.alt} width={1600} height={900} fetchPriority="high"/>;
 const current = slides[index]!;
 return <>
  <div className="hero-media" aria-hidden="true">{slides.map((s, i) => { const poster = imageSet(s.poster).src; const on = i === index; return <div key={s.label} className={`hero-layer ${on ? 'is-active' : ''}`}>{s.video
   ? <video ref={el => { videos.current[i] = el; }} className="hero-image" src={visited.has(i) ? s.video : undefined} poster={poster} muted playsInline preload={on ? 'auto' : 'none'} onEnded={() => !paused && go(i + 1)}/>
   : <img className={`hero-image ${on && !paused ? 'kenburns' : ''}`} src={poster} alt="" decoding="async"/>}</div>; })}</div>
  <div className="hero-slide-controls"><div className="hero-tabs" role="group" aria-label="Choose a service video">{slides.map((s, i) => <button key={s.label} type="button" className={`hero-tab ${i === index ? 'is-active' : ''}`} aria-pressed={i === index} onClick={() => go(i)}><span className="hero-tab-bar"><span style={i === index && !paused ? { animationDuration: s.video ? '8s' : `${IMAGE_SLIDE_MS}ms` } : undefined}/></span>{s.label}</button>)}</div><div className="flex items-center gap-3"><Link to={current.to} className="hero-slide-link">View {current.label.toLowerCase()}<ArrowUpRight className="size-4"/></Link><button type="button" className="hero-pause" onClick={() => setPaused(p => !p)} aria-label={paused ? 'Play hero videos' : 'Pause hero videos'}>{paused ? <Play className="size-4"/> : <Pause className="size-4"/>}</button></div></div>
 </>;
}
