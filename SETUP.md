# Hope for Ghana - React SPA Setup

This is a pure React SPA (Single Page Application) for your nonprofit donation website.

## Installation

1. Copy all files from `react-spa-files` to your React project
2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

## Environment Variables

Create a `.env` file in your project root:

\`\`\`
REACT_APP_STRIPE_KEY=your_stripe_publishable_key_here
\`\`\`

## Backend Integration

The app is configured to use your existing backend at:
`https://willy-stripe.onrender.com/checkout`

Make sure your backend is updated with the improved code from `backend-updated.ts` that creates Stripe Checkout Sessions.

## Development

Run the development server:
\`\`\`bash
npm run dev
\`\`\`

## Build for Production

Build the app:
\`\`\`bash
npm run build
\`\`\`

The build files will be in the `dist` folder ready to deploy to GitHub Pages, Netlify, Vercel, or any static hosting.

## File Structure

\`\`\`
src/
├── pages/
│   ├── Home.tsx          # Main landing page
│   ├── Donate.tsx        # Donation page
│   └── Success.tsx       # Success page after payment
├── components/
│   ├── DynamicHeroBackground.tsx
│   └── GalleryCarousel.tsx
├── App.tsx               # Router configuration
├── main.tsx              # App entry point
└── index.css             # Global styles
\`\`\`

## Notes

- This is pure React with React Router (not Next.js)
- Uses Vite for fast development and building
- Tailwind CSS v4 for styling
- Connects to your backend for Stripe payments
- All images should be in the `/public` folder
