# चि. केतन आणि चि. सौ. कां. सुप्रिया — Royal Palace Wedding Experience

A static, Vercel-ready wedding invitation website with cinematic and interactive CSS scenes.

## Event
- चि. केतन आणि चि. सौ. कां. सुप्रिया
- Thursday, 3 December 2026
- 5:15 PM India Standard Time
- Pimpleshwar Mahadev Mandir Lawns, Dombivli Manpada Road

## Included
- Interactive palace-door opening
- Animated floral pathway and lanterns
- Floating mandap scene with water-reflection effects
- Cinematic couple-entry stage
- Falling-petal effects and optional synthesized chime (user-activated)
- Live countdown
- Google Maps search link
- Gallery placeholders with modal interaction
- WhatsApp RSVP form
- Native share invitation button
- Responsive mobile navigation

## Deploy to Vercel
1. Extract the ZIP.
2. Upload `index.html`, `styles.css`, `script.js`, `vercel.json`, and `README.md` to the root of a GitHub repository.
3. In Vercel choose Add New → Project and import that repository.
4. Framework Preset: Other.
5. Build Command: blank. Output Directory: blank/default static root.
6. Deploy.

No build command, package install, or framework setup is needed.

## Before sharing: configure RSVP
In `script.js`, replace:
`const whatsappNumber="91XXXXXXXXXX";`
with the family's WhatsApp number including country code, digits only (no plus sign, spaces or hyphens).

RSVP opens WhatsApp with a prefilled message. Guests must press Send. It does not store responses in a database.

## Add your real couple photos
1. Create an `assets` folder in the repository.
2. Upload three images named `couple-1.jpg`, `couple-2.jpg`, `couple-3.jpg`.
3. In each `.gallery-card` in `index.html`, replace the `<span class="gallery-symbol">...</span>` with:
   `<img src="assets/couple-1.jpg" alt="Ketan and Surpriya">`
   (use the matching filename for each tile).
4. Add this to `styles.css`:
   `.gallery-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}`
5. Commit changes; Vercel redeploys automatically.

## Verify venue
The map button opens a Google Maps search using the supplied venue name. Please verify the pin and replace the URL in `index.html` with the exact Google Maps share URL from the venue, if available.

## Design note
The mandap, palace doors, pathway, water, stage and couple silhouettes are original CSS illustrations/animations, not actual 3D video footage or verified photographs of the venue. Google Fonts requires an internet connection; fallback fonts are included.


## Marathi invitation
The invitation copy and key navigation labels are presented in Marathi (Devanagari). The countdown, venue map link and WhatsApp RSVP remain interactive.
