# Design Guidelines: Salon BB Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium service industry leaders like Airbnb (hospitality), Booking.com (appointment focus), and high-end salon websites. Emphasis on visual storytelling, trust-building through imagery, and seamless user flow to booking.

## Typography System

**Font Families** (via Google Fonts):
- Primary: 'Playfair Display' - Headings, elegant serif for luxury feel
- Secondary: 'Inter' - Body text, UI elements, clean sans-serif for readability

**Hierarchy**:
- Hero Headline: text-5xl to text-7xl, font-bold
- Section Headings: text-3xl to text-4xl, font-semibold
- Subheadings: text-xl to text-2xl, font-medium
- Body Text: text-base to text-lg, font-normal
- Small Text: text-sm, font-normal

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6, p-8
- Section spacing: py-16, py-20, py-24
- Element gaps: gap-4, gap-6, gap-8
- Margins: m-4, m-6, m-8

**Container Strategy**:
- Full-width sections with inner max-w-7xl
- Content blocks: max-w-6xl
- Text content: max-w-3xl

## Page Structure & Sections

### Hero Section (100vh)
- Full-screen salon interior image (salon_BB.webp)
- Centered overlay with salon name and tagline
- Primary CTA button with blurred background: "Maak een Afspraak" (Book Appointment)
- Subtle scroll indicator at bottom

### Services Overview Section
- 2-column grid on desktop (grid-cols-1 md:grid-cols-2)
- Service cards with icon, title, brief description, "Bekijk Prijzen" link
- Services: Knippen, Kleuren, Behandelingen, Styling

### Gallery Section
- Masonry-style grid layout (3 columns on desktop: grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Use all three galerij images showcasing salon work
- Lightbox functionality for expanded view
- Section heading: "Onze Salon & Werk"

### Pricing Section
- Display prijslijst image as visual reference
- Structured pricing table below with categories
- Clean table design: hover states on rows, clear pricing hierarchy

### Opening Hours & Contact Split Section
- 2-column layout (50/50 split on desktop)
- Left: Opening hours (openingstijden image as base, then structured list)
- Right: Contact form (Name, Email, Phone, Preferred Date/Time, Message fields)
- Include address, phone, email below form

### Location/Map Section
- Embedded map (Google Maps placeholder)
- Address details overlay on map corner

### Footer
- 3-column grid on desktop
- Column 1: Salon info, social media icons (Instagram, Facebook)
- Column 2: Quick links (Home, Diensten, Galerij, Contact)
- Column 3: Contact info recap
- Bottom bar: Copyright, Privacy Policy link

## Component Library

### Buttons
- Primary: Large, rounded-full, px-8 py-4, font-semibold
- Secondary: Outlined variant, rounded-full
- Ghost: Text-only with hover underline
- Buttons on images: backdrop-blur-md with semi-transparent background

### Cards
- Service Cards: Rounded corners (rounded-2xl), subtle shadow, p-8, hover lift effect
- Gallery Cards: Minimal styling, focus on imagery, rounded-lg
- Testimonial Cards (if added): Rounded-xl, p-6, italic text for quotes

### Forms
- Input fields: Rounded-lg, border-2, px-4 py-3
- Labels: text-sm, font-medium, mb-2
- Full-width inputs in form
- Submit button: Primary button style

### Navigation
- Sticky header on scroll
- Logo left, navigation links center/right
- Mobile: Hamburger menu
- Links: Home, Diensten, Galerij, Prijzen, Contact, Boeken (highlighted)

## Images Strategy

**Hero Image**: Use salon_BB.webp - full viewport height, subtle overlay for text readability

**Gallery Section**: Display all three galerij images in masonry grid - these showcase the salon's work and atmosphere

**Informational Images**: 
- Use openingstijden.jpg as visual reference above structured hours
- Use prijslijst.jpg as header for pricing section
- Contact.png informs contact section layout

**Image Treatment**: 
- Slight brightness reduction on hero for text contrast
- Gallery images at full saturation
- Lazy loading for performance

## Animations
Use sparingly:
- Fade-in on scroll for section entries (once)
- Smooth scroll behavior for anchor links
- Subtle hover transforms on cards (scale-105)
- Gallery lightbox transitions
- NO continuous or distracting animations

## Accessibility Requirements
- Consistent focus states across all interactive elements
- Form labels properly associated with inputs
- Alt text for all images describing content
- Keyboard navigation support throughout
- Sufficient contrast ratios maintained (will be validated with chosen colors)
- Touch targets minimum 44x44px

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hero maintains impact on mobile (80vh)
- Grid layouts collapse to single column on mobile
- Navigation converts to hamburger menu below md
- Form maintains full-width on all sizes
- Typography scales down one size on mobile