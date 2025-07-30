# Atharva Jondhale Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Dark theme with particle animations
- **Responsive**: Works perfectly on all devices
- **Interactive**: Smooth animations and hover effects
- **Contact Form**: Fully functional email integration
- **SEO Optimized**: Meta tags and proper structure

## 📧 Contact Form Setup

The contact form uses EmailJS to send emails directly to your inbox. Here's how to set it up:

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account
5. Note down the **Service ID** (e.g., `service_abc123`)

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down the **Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update Configuration

#### Option A: Direct Configuration (Quick Setup)
Replace the placeholder values in `components/contact.tsx`:

```typescript
const EMAILJS_SERVICE_ID = "your_service_id_here"
const EMAILJS_TEMPLATE_ID = "your_template_id_here" 
const EMAILJS_PUBLIC_KEY = "your_public_key_here"
```

#### Option B: Environment Variables (Recommended for Production)
1. Create a `.env.local` file in your project root:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Add `.env.local` to your `.gitignore` file to keep your keys secure
3. For production deployment, add these environment variables to your hosting platform (Vercel, Netlify, etc.)

### 6. Test the Form
1. Start your development server: `npm run dev`
2. Go to the contact section
3. Fill out and submit the form
4. Check your email inbox

## 🛠️ Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # Reusable UI components
│   ├── hero.tsx      # Hero section
│   ├── about.tsx     # About section
│   ├── projects.tsx  # Projects section
│   ├── skills.tsx    # Skills section
│   ├── experience.tsx # Experience section
│   ├── education.tsx # Education section
│   ├── contact.tsx   # Contact section
│   └── footer.tsx    # Footer
├── data/
│   └── projects.ts   # Project data
└── public/
    └── images/       # Static images
```

## 🎨 Customization

### Colors
The theme uses a dark color palette with blue/purple accents. You can customize colors in:
- `tailwind.config.ts`
- Individual component files

### Content
Update your information in:
- `components/hero.tsx` - Personal info and bio
- `components/about.tsx` - About section content
- `data/projects.ts` - Project details
- `components/experience.tsx` - Work experience
- `components/education.tsx` - Education details

### Contact Information
Update contact details in:
- `components/contact.tsx` - Contact form and info
- `components/footer.tsx` - Footer links

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Deploy the `out` folder

### Other Platforms
The site works on any static hosting platform that supports Next.js.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **EmailJS** - Contact form functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with ❤️ by Atharva Jondhale**
