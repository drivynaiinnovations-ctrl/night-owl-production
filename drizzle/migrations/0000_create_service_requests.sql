CREATE TABLE public.service_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 full_name text NOT NULL,
 company text NOT NULL,
 phone text NOT NULL,
 email text NOT NULL,
 service_address text NOT NULL,
 city text NOT NULL,
 state text NOT NULL,
 zip text NOT NULL,
 service_needed text NOT NULL CHECK (service_needed IN ('doors','signage','exterior-cleaning','parking-lot-care','multiple','not-sure')),
 description text NOT NULL,
 urgency text NOT NULL CHECK (urgency IN ('routine','soon','urgent')),
 preferred_date date,
 preferred_contact text NOT NULL CHECK (preferred_contact IN ('phone','email')),
 consent boolean NOT NULL CHECK (consent = true),
 photo_paths text[] NOT NULL DEFAULT '{}'
);
GRANT ALL ON public.service_requests TO service_role;
REVOKE ALL ON public.service_requests FROM anon, authenticated;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;
CREATE INDEX service_requests_created_at_idx ON public.service_requests (created_at DESC);
COMMENT ON TABLE public.service_requests IS 'Private service requests. Validated public intake writes only through the server; owner access through Lovable Cloud Database.';