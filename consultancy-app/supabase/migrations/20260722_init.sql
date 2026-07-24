CREATE TABLE public.resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'General',
  download_url TEXT DEFAULT '#',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  service TEXT NOT NULL,
  booking_date DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public resources read access" 
ON public.resources FOR SELECT USING (true);

CREATE POLICY "Admin resources insert access" 
ON public.resources FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Admin resources update access" 
ON public.resources FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin resources delete access" 
ON public.resources FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Public bookings insert access" 
ON public.bookings FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin bookings read access" 
ON public.bookings FOR SELECT USING (auth.role() = 'authenticated');
