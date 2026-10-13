// Server-only access to Cloudflare bindings declared in wrangler.jsonc.
import { env } from 'cloudflare:workers';

type D1Result<T> = { results: T[] };
type D1Statement = { bind: (...values: unknown[]) => D1Statement; run: () => Promise<unknown>; all: <T>() => Promise<D1Result<T>>; first: <T>() => Promise<T | null> };
export type D1Database = { prepare: (sql: string) => D1Statement; batch: (statements: D1Statement[]) => Promise<unknown> };
type SendEmail = { send: (message: unknown) => Promise<void> };

export type Bindings = { DB: D1Database; NOTIFY?: SendEmail; NOTIFY_TO?: string; NOTIFY_FROM?: string; ADMIN_PASSWORD?: string };
export const bindings = () => env as unknown as Bindings;
