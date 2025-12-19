# BB Herenkapsalon Website

## Overview

This is a website for BB Herenkapsalon (BB Men's Hair Salon), a barbershop located in Amersfoort, Netherlands. The project is a full-stack TypeScript application featuring a React frontend with a Node.js/Express backend. The site is designed as a premium service website with a focus on appointments, service listings, and gallery showcasing the salon's work.

The website is Dutch-language focused and serves as a business landing page with SEO optimization, structured data for local business search, and a luxury-focused design aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom design tokens defined in CSS variables
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Typography**: Playfair Display (headings) and Inter (body text) via Google Fonts
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ES modules)
- **API Pattern**: RESTful routes prefixed with `/api`
- **Build System**: esbuild for server bundling, Vite for client

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - shared between client and server
- **Validation**: Zod with drizzle-zod integration
- **Storage Pattern**: Abstract storage interface (`IStorage`) with in-memory implementation that can be swapped for database storage

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/ui/  # shadcn/ui components
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utilities and query client
│       └── pages/          # Page components
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code (schemas, types)
└── attached_assets/  # Static images for the salon
```

### Design System
The project follows specific design guidelines documented in `design_guidelines.md`:
- Premium/luxury aesthetic inspired by Airbnb and high-end salon websites
- Warm neutral color palette with amber/orange accent colors
- Full-screen hero sections with image overlays
- Responsive grid layouts (mobile-first approach)

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migrations and schema management

### UI Components
- **Radix UI**: Headless component primitives (accordion, dialog, dropdown, etc.)
- **shadcn/ui**: Pre-styled component variants using class-variance-authority

### Frontend Libraries
- **TanStack React Query**: Data fetching and caching
- **Embla Carousel**: Carousel/slider functionality
- **React Day Picker**: Calendar component
- **react-hook-form**: Form handling with Zod resolver
- **Vaul**: Drawer component
- **cmdk**: Command palette component

### Backend Libraries
- **Express Session**: Session management with connect-pg-simple for PostgreSQL session store
- **Passport**: Authentication framework (local strategy)

### Development Tools
- **Vite**: Frontend build and development server
- **esbuild**: Server bundling for production
- **TypeScript**: Static typing throughout

### Third-Party Services
- No external APIs currently integrated, but the infrastructure supports:
  - Email (nodemailer configured in dependencies)
  - AI services (OpenAI and Google Generative AI in dependencies)
  - Payment processing (Stripe in dependencies)