import type { ImgHTMLAttributes } from 'react';

// Every photo lives in src/assets as `<key>-<width>w.webp` (e.g. services/door-repair-768w.webp).
const files = import.meta.glob('/src/assets/**/*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

type Variant = { url: string; width: number };
const byKey = new Map<string, Variant[]>();
for (const [path, url] of Object.entries(files)) {
 const match = path.match(/^\/src\/assets\/(.+)-(\d+)w\.webp$/);
 if (!match) continue;
 const [, key, width] = match as unknown as [string, string, string];
 byKey.set(key, [...(byKey.get(key) ?? []), { url, width: Number(width) }].sort((a, b) => a.width - b.width));
}

export function imageSet(key: string) {
 const variants = byKey.get(key);
 if (!variants?.length) throw new Error(`Missing image: ${key}`);
 const largest = variants[variants.length - 1]!;
 return { src: largest.url, srcSet: variants.map(v => `${v.url} ${v.width}w`).join(', '), width: largest.width };
}

/** Absolute-path URL of the largest variant, for places that need a single URL. */
export const imageUrl = (key: string) => imageSet(key).src;

type PicProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & { image: string; sizes: string };
export function Pic({ image, sizes, ...rest }: PicProps) {
 const { src, srcSet } = imageSet(image);
 return <img src={src} srcSet={srcSet} sizes={sizes} decoding="async" {...rest} />;
}

const blankPixel = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
/** Desktop-only hero photo: phones get a blank pixel so the hidden image is never downloaded. */
export function HeroPic({ image, ...rest }: Omit<PicProps, 'sizes'>) {
 const { src, srcSet } = imageSet(image);
 return <picture><source media="(max-width: 767px)" srcSet={blankPixel}/><img src={src} srcSet={srcSet} sizes="100vw" decoding="async" {...rest}/></picture>;
}
