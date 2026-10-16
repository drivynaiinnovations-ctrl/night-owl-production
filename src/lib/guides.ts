export type GuideSection = { heading: string; paragraphs: string[]; bullets?: string[] };
export type Guide = { slug: string; title: string; description: string; published: string; readMinutes: number; image: string; imageAlt: string; services: string[]; sections: GuideSection[] };

/** Practical guides for property and facility managers. Keep claims general; local code requirements vary by jurisdiction. */
export const guides: Guide[] = [
 {
  slug: 'how-often-restripe-commercial-parking-lot',
  title: 'How Often Should a Commercial Parking Lot Be Restriped?',
  description: 'How often commercial parking lots in DC, Maryland, and Virginia typically need restriping, the signs it’s time, and how to plan the work around tenants and traffic.',
  published: '2026-10-15', readMinutes: 5, image: 'services/parking-lot-striping', imageAlt: 'Freshly striped parking lot spaces',
  services: ['parking-lot-striping', 'ada-parking-markings', 'parking-lot-sweeping'],
  sections: [
   { heading: 'The short answer', paragraphs: ['Most commercial parking lots need restriping every one to two years. Busy retail centers, office parks with heavy daily turnover, and lots that see a lot of snowplowing often need it closer to once a year. Lightly used lots can sometimes go longer.', 'The right schedule depends on traffic, weather, the paint used, and whether the lot has been sealcoated or repaved, which covers the old lines completely.'] },
   { heading: 'Signs it’s time to restripe', paragraphs: ['Walk the lot in daylight and again at night. If you have to look twice to find a line, drivers do too.'], bullets: ['Stall lines, arrows, or crosswalks are faded, chipped, or hard to see at night', 'Accessible (ADA) spaces, symbols, or access aisles are worn', 'Fire lanes and no-parking curbs are no longer clearly marked', 'The lot was recently sealcoated, patched, or repaved', 'Tenant changes call for a new layout, reserved spaces, or EV parking', 'Drivers are parking crooked or cutting across the lot'] },
   { heading: 'Why it matters for commercial properties', paragraphs: ['Clear striping keeps traffic moving, makes the most of the spaces you have, and makes a property look maintained to tenants and customers before they reach the front door.', 'Accessible parking markings and signs also need to stay visible. Faded accessible stalls and access aisles are easy to miss and can create problems for visitors and property owners.'] },
   { heading: 'Planning restriping around a busy property', paragraphs: ['Restriping is usually done in sections so part of the lot stays open. Early mornings, evenings, and weekends are common for office parks and retail centers. Paint needs dry weather and time to cure before cars drive over it, so schedules in the DMV shift with the seasons.', 'Pair restriping with sweeping beforehand. Clean pavement helps the paint bond and last longer.'] },
   { heading: 'A simple maintenance rhythm', paragraphs: ['A practical plan for most commercial lots in DC, Maryland, and Northern Virginia:'], bullets: ['Sweep regularly (weekly to monthly, depending on traffic)', 'Inspect lines, accessible spaces, and signs every spring after snow season', 'Restripe every one to two years, or after any sealcoating or paving', 'Replace damaged wheel stops, bollards, and signs as you find them'] },
  ],
 },
 {
  slug: 'automatic-ada-door-openers-office-buildings',
  title: 'Automatic and ADA Door Openers: What Office Building Managers Should Know',
  description: 'A plain-English overview of automatic doors and ADA push-button openers for office buildings: when they make sense, common problems, and how to keep them working.',
  published: '2026-10-15', readMinutes: 6, image: 'services/automatic-door-operators', imageAlt: 'Automatic commercial entrance doors lit at night',
  services: ['automatic-door-operators', 'office-building-doors', 'door-preventive-maintenance'],
  sections: [
   { heading: 'Automatic doors vs. ADA push-button openers', paragraphs: ['“Automatic door” usually means one of two things. Full automatic sliding or swing doors open on their own when a sensor detects someone approaching, which is common at busy main entrances. Low-energy operators, often called ADA openers, are added to a regular swing door and open it when someone presses a push plate or waves at a sensor.', 'Office buildings often use full automatic doors at the main lobby and low-energy operators at secondary entrances, suites, and restrooms.'] },
   { heading: 'Are automatic doors required?', paragraphs: ['Accessibility rules focus on making doors usable: clear width, manageable opening force, enough maneuvering space, and hardware people can operate easily. An automatic operator is one common way to meet those goals, especially for heavy or exterior doors.', 'Some newer building codes adopted in parts of the region require automatic doors at certain public entrances, depending on building type and size. Requirements vary by jurisdiction and by when the building or alteration was permitted, so confirm specifics with your local code official or design professional before a renovation.'] },
   { heading: 'Common problems we see', paragraphs: ['Most automatic door service calls come down to a handful of issues:'], bullets: ['Door opens slowly, stalls, or doesn’t open fully', 'Door reopens or won’t close because a sensor is misaligned or dirty', 'Push plate works intermittently (often a wireless actuator battery)', 'Operator is noisy or the door slams', 'Door was damaged by a cart, delivery, or weather and now drags'] },
   { heading: 'Keeping operators working', paragraphs: ['Automatic and ADA operators have moving parts, sensors, and safety settings that drift over time. A periodic inspection catches worn parts and sensor problems before the door stops working, which matters most at entrances visitors depend on.', 'When a door fails, note what it’s doing (not opening, not closing, reopening) and take a short video if you can. It makes the service visit faster.'] },
   { heading: 'Adding an opener to an existing door', paragraphs: ['Many existing swing doors can take a low-energy operator if the door, frame, and hinges are in good shape and there’s power nearby. Glass storefront doors, hollow metal doors, and interior suite doors are all common candidates. A site visit confirms the right operator, actuator locations, and any electrical work.'] },
  ],
 },
 {
  slug: 'commercial-door-closer-repair-or-replace',
  title: 'Commercial Door Closer Problems: Repair or Replace?',
  description: 'Slamming doors, doors that won’t latch, leaking closers: what each symptom means and when a commercial door closer should be adjusted, repaired, or replaced.',
  published: '2026-10-15', readMinutes: 5, image: 'services/door-closers-hinges-locks', imageAlt: 'Commercial door lever handle and lock',
  services: ['door-closers-hinges-locks', 'commercial-door-repair', 'door-preventive-maintenance'],
  sections: [
   { heading: 'What a door closer does', paragraphs: ['A door closer controls how a door closes: how fast it swings, how it slows down near the frame, and the final push that makes it latch. On commercial doors it takes a beating, especially at entrances, stairwells, and back-of-house doors that open hundreds of times a day.'] },
   { heading: 'Symptoms and what they usually mean', paragraphs: ['Many closer problems are adjustments, not failures:'], bullets: ['Door slams: closing or latch speed is set too fast, or the closer has lost fluid', 'Door won’t latch: latch speed too slow, closer too weak for the door, or the door or strike is out of alignment', 'Door closes too slowly or stays open: speed set too slow, or cold weather thickening the fluid', 'Oil on the closer or floor: a leaking seal, which usually means replacement', 'Door hits the wall or frame when opened: backcheck isn’t set, or there’s no stop', 'Arm is bent or loose: impact damage or loose mounting screws'] },
   { heading: 'Adjust, repair, or replace?', paragraphs: ['Adjustment fixes most speed and latching complaints, as long as the closer isn’t leaking and is sized for the door.', 'Replacement makes sense when the closer leaks oil, the body is cracked, the arm is damaged, or the closer is undersized for a heavy or exterior door. Replacing a failing closer also protects hinges and frames, which wear quickly when a door slams or drags.'] },
   { heading: 'Don’t forget the rest of the door', paragraphs: ['A closer can only do its job if the door hangs straight. Sagging hinges, a shifted frame, or a worn threshold can make a good closer look bad. A proper service check looks at the hinges, strike, latch, and threshold along with the closer.'] },
   { heading: 'Preventive maintenance pays off', paragraphs: ['For office buildings and multi-tenant properties, a scheduled walk-through of every door every six to twelve months catches loose hardware, leaking closers, and alignment problems early, before a door fails during business hours or a fire door stops latching.'] },
  ],
 },
 {
  slug: 'channel-letters-vs-monument-signs',
  title: 'Channel Letters vs. Monument Signs: Which Does Your Building Need?',
  description: 'Compare channel letter signs and monument signs for office buildings and commercial properties: visibility, cost factors, tenant needs, and permits in the DMV.',
  published: '2026-10-15', readMinutes: 6, image: 'services/channel-letter-signs', imageAlt: 'Illuminated dimensional letters mounted on a wall',
  services: ['channel-letter-signs', 'monument-pylon-signs', 'sign-design-permits'],
  sections: [
   { heading: 'Two different jobs', paragraphs: ['Channel letters are individual dimensional letters mounted on the building, usually above an entrance or high on the facade. Monument signs are freestanding signs near the road or driveway entrance, typically on a low base.', 'Many office buildings and business parks use both: a monument sign so drivers find the property, and building letters or a logo so visitors find the right entrance.'] },
   { heading: 'When channel letters make sense', paragraphs: ['Channel letters work best when the building itself is visible from the road or parking lot and you want a clean, branded look on the facade.'], bullets: ['Single-tenant office buildings and headquarters', 'Retail and restaurant storefronts', 'Building-top identification on taller buildings', 'Illuminated options: front-lit, halo-lit (back-lit), or day/night faces that look the same color by day and glow white at night'] },
   { heading: 'When a monument sign makes sense', paragraphs: ['Monument signs work best when the building sits back from the road, the entrance is easy to miss, or several tenants need to be listed.'], bullets: ['Business parks and multi-tenant office buildings', 'Properties set back behind parking or landscaping', 'Medical and professional office complexes', 'Sites that need an address, tenant panels, or an LED message display'] },
   { heading: 'Permits and approvals', paragraphs: ['Most exterior signs, and every illuminated sign, need a permit. Size, height, setback, lighting, and number of signs are regulated by the county or city, and many properties also have landlord or owners’ association sign criteria. Historic districts in places like Old Town Alexandria, Annapolis, and Frederick add another review step.', 'Plan for design proofs, landlord approval, and permitting before fabrication starts. Illuminated signs typically take several weeks from approved design to installation.'] },
   { heading: 'Questions to answer before you start', paragraphs: ['Answering these early makes design and permitting faster:'], bullets: ['Where do visitors first see your property: from the road, the lot, or the sidewalk?', 'Do you need to list multiple tenants now or later?', 'Will the sign need to be readable at night?', 'Are there landlord sign criteria or historic-district rules?', 'Is there power near the sign location?'] },
  ],
 },
 {
  slug: 'how-often-pressure-wash-commercial-property',
  title: 'How Often Should You Pressure Wash a Commercial Property?',
  description: 'Recommended pressure washing schedules for office buildings, retail centers, restaurants, and dumpster pads, plus what to clean and how to schedule around business hours.',
  published: '2026-10-15', readMinutes: 5, image: 'services/pressure-washing', imageAlt: 'Worker pressure washing outdoor stone steps',
  services: ['commercial-pressure-washing', 'sidewalk-entry-cleaning', 'dumpster-pad-cleaning'],
  sections: [
   { heading: 'It depends on traffic and use', paragraphs: ['There’s no single schedule for every property. A quiet office building and a busy restaurant need very different attention. Use these as starting points and adjust after a season.'], bullets: ['Office building entrances, plazas, and walkways: quarterly to twice a year', 'Retail and shopping center sidewalks: monthly to quarterly', 'Restaurant entries and patios: monthly, or more often in summer', 'Dumpster pads and enclosures: monthly for restaurants and grocery; quarterly for most others', 'Building facades, awnings, and signs: once or twice a year'] },
   { heading: 'What to include in a cleaning', paragraphs: ['A complete exterior cleaning covers the areas people see and touch first:'], bullets: ['Entrances, vestibules, and walkways', 'Sidewalks, curbs, and gum spots', 'Dumpster pads, enclosures, and grease spots', 'Awnings, canopies, and sign faces', 'Stairs, ramps, and plazas', 'Graffiti, as soon as it appears'] },
   { heading: 'Seasonal timing in the DMV', paragraphs: ['Spring is the most common time for a deep clean, after winter salt, sand, and pollen. Late summer or fall is a good second visit before leaves and winter weather. Pressure washing needs above-freezing temperatures, so winter cleaning is limited to mild days.'] },
   { heading: 'Doing it without disrupting business', paragraphs: ['Exterior cleaning for commercial properties is usually scheduled early in the morning, in the evening, or on weekends, with walkways cleaned in sections so entrances stay open. Surfaces matter too: concrete, brick, metal, painted surfaces, and fabric awnings each need the right pressure and cleaning method to avoid damage.'] },
   { heading: 'Set it and forget it', paragraphs: ['The easiest approach for property managers is a recurring schedule: a deep clean in spring, regular entry and dumpster-pad cleaning through the year, and spot graffiti removal as needed. One vendor and one schedule keeps the property consistently presentable.'] },
  ],
 },
];
