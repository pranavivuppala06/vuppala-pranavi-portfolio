# Vuppala Pranavi — Personal Portfolio

A responsive, recruiter-focused portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and React Hook Form.

## Requirements

- Node.js 20.9+ (recommended: current Node.js LTS)
- npm

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Resume

The hero includes a download link to `/resume.pdf`. Add your actual, up-to-date resume PDF to `public/resume.pdf`. The resume file was not included in the supplied details, so no resume has been fabricated.

## Contact form setup

The form validates fields in the browser and server, then sends through Resend. Configure these variables in `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=pranavivuppala06@gmail.com
CONTACT_FROM_EMAIL=Portfolio <verified-sender@your-domain.com>
```

Create a Resend account, verify the sending domain/address as required by Resend, and use a permitted sender address. Without these variables, the API returns a clear configuration message and visitors can still use the direct `mailto:` contact link.

## Personal details to review before publishing

- Coding profile ratings are displayed exactly as supplied and are not live-updated.
- Certificate verification links were not supplied, so the cards clearly indicate that no certificate link was provided.
- A profile-image placeholder is used; replace the initials card with an approved portrait if desired.
- Add `public/resume.pdf` to enable the resume download.
- Set `NEXT_PUBLIC_SITE_URL` to the final deployed origin for canonical/Open Graph metadata.

## Deploy

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `NEXT_PUBLIC_SITE_URL` to the Vercel project environment variables.
4. Add `public/resume.pdf` before deployment.
5. Deploy. Vercel detects Next.js automatically.

## Structure

```text
vuppala-pranavi-portfolio/
├── app/
│   ├── api/contact/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── portfolio.tsx
├── lib/
│   └── data.ts
├── public/
│   └── og-image.svg
├── .env.example
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Accuracy notes

Only the education, skills, projects, ratings, profile URLs, and certifications supplied in the brief are included. No employment history, deployments, certificate links, rankings, or extra project features have been added.
