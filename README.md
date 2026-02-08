# NAIRmatchu - AI-Powered Matrimony Platform

A production-grade, enterprise-level matrimony website built exclusively for the Nair community of Kerala. This platform combines traditional values with modern AI technology, delivered through a WhatsApp-first experience.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Hosting**: Vercel (optimized)

## 📁 Project Structure

```
nairmatchu/
├── app/
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── faqs/              # FAQs page
│   ├── guidelines/        # Community guidelines
│   ├── how-it-works/      # How it works page
│   ├── plans/             # Subscription plans
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/
│   │   ├── Header.tsx     # Navigation header
│   │   └── Footer.tsx     # Footer component
│   └── ui/
│       └── AnimatedSection.tsx  # Reusable animation wrapper
├── lib/
│   └── whatsapp.ts        # WhatsApp utility functions
├── public/                # Static assets (add images here)
├── .env.example          # Environment variables template
├── .env.local            # Local environment variables
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies

```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository** (or extract the ZIP)
   ```bash
   cd nairmatchu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Update the WhatsApp number in `.env.local`:
   ```
   NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210  # Replace with actual number
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   
   Navigate to `http://localhost:3000`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Add environment variables in Vercel dashboard
   - Deploy!

### Environment Variables for Production

In Vercel dashboard, add:
```
NEXT_PUBLIC_APP_URL=https://nairmatchu.com
NEXT_PUBLIC_APP_NAME=NAIRmatchu
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hi, I'm interested in NAIRmatchu
```

## 🎨 Customization

### Update WhatsApp Number

Edit `.env.local`:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
```

### Change Color Scheme

Edit `tailwind.config.js` to modify the color palette:
```javascript
colors: {
  maroon: { ... },
  gold: { ... },
  // Add custom colors
}
```

### Add Images

1. Place images in `public/` folder
2. Reference them in components:
   ```tsx
   <img src="/your-image.jpg" alt="Description" />
   ```

### Update Logo

Replace the "N" placeholder in `Header.tsx`:
```tsx
// Current placeholder
<div className="w-12 h-12 bg-maroon-500 ...">N</div>

// Replace with actual logo
<img src="/logo.png" alt="NAIRmatchu" />
```

## 📱 Features

- ✅ Fully responsive (mobile-first design)
- ✅ SEO optimized with metadata
- ✅ WhatsApp integration
- ✅ Smooth animations
- ✅ Kerala-themed design
- ✅ Production-ready code
- ✅ Type-safe with TypeScript
- ✅ Accessibility friendly
- ✅ Fast loading & optimized

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📄 Pages

1. **Home** (`/`) - Hero, features, how it works, plans, testimonials
2. **About** (`/about`) - Vision, mission, values
3. **How It Works** (`/how-it-works`) - 4-step process explanation
4. **Plans** (`/plans`) - Subscription comparison
5. **FAQs** (`/faqs`) - Frequently asked questions
6. **Contact** (`/contact`) - Contact methods and support
7. **Privacy** (`/privacy`) - Privacy policy
8. **Terms** (`/terms`) - Terms of service
9. **Guidelines** (`/guidelines`) - Community guidelines

## 🎯 Key Components

### Header
- Sticky navigation
- Mobile responsive menu
- WhatsApp CTA button
- Smooth transitions

### Footer
- Brand information
- Quick links
- WhatsApp contact
- Social links

### AnimatedSection
- Reusable scroll animation wrapper
- Viewport detection
- Smooth fade-in effects

## 🌈 Design System

### Colors
- **Primary**: Maroon (#8B1A1A)
- **Secondary**: Gold (#D4AF37)
- **Accent**: Kerala Green (#1B4332)
- **Base**: Ivory (#FFF8E7)
- **WhatsApp**: Green (#25D366)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing
- Consistent 8px grid system
- Responsive padding/margins

## 📞 Support

For questions or issues:
- WhatsApp: [Configured number]
- Email: hello@nairmatchu.com

## 📝 License

Proprietary - NAIRmatchu Matrimony Services

## 🙏 Credits

Built with ❤️ for the Nair community of Kerala

---

**Ready for production deployment!** 🚀
