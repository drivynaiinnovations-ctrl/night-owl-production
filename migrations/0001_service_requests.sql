-- Service requests submitted through /request-service. Private: read only through /admin.
CREATE TABLE IF NOT EXISTS service_requests (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now')),
  full_name TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  service_address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip TEXT NOT NULL,
  service_needed TEXT NOT NULL CHECK (service_needed IN ('doors','signage','exterior-cleaning','parking-lot-care','multiple','not-sure')),
  description TEXT NOT NULL,
  urgency TEXT NOT NULL CHECK (urgency IN ('routine','soon','urgent')),
  preferred_date TEXT,
  preferred_contact TEXT NOT NULL CHECK (preferred_contact IN ('phone','email')),
  photo_count INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS service_requests_created_at_idx ON service_requests (created_at DESC);

CREATE TABLE IF NOT EXISTS request_photos (
  request_id TEXT NOT NULL REFERENCES service_requests(id) ON DELETE CASCADE,
  idx INTEGER NOT NULL,
  content_type TEXT NOT NULL,
  data BLOB NOT NULL,
  PRIMARY KEY (request_id, idx)
);
