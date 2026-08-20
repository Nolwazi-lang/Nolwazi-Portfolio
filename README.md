# Personal Portfolio — Nolwazi Vundla

This is a responsive personal portfolio website for Nolwazi Vundla. It's a static site (HTML/CSS/JS) intended for deployment to GitHub Pages, Vercel, or Netlify.

Features
- Home with professional intro
- About, Skills, Projects (4 cards), Education, Certifications
- Work Experience (with dates you provided)
- Contact form (Formspree or Netlify Forms support)
- Downloadable CV button (add your PDF to assets/Nolwazi_Vundla_CV.pdf)

How to use
1. Clone or copy these files into a new repository.
2. Add your resume PDF at: `assets/Nolwazi_Vundla_CV.pdf`.
3. Replace the contact form action in `index.html` (line with form action) with one of:
   - Formspree: Create a free form at https://formspree.io/, copy the form endpoint (e.g. `https://formspree.io/f/xxxx`) and paste it into `action`.
   - Netlify Forms: If deploying to Netlify, change the form to use Netlify attributes:
     - Add `data-netlify="true"` on the `<form>` and remove `action`. Example:
       <form name="contact" method="POST" data-netlify="true">
       Also add `<input type="hidden" name="form-name" value="contact">`.
4. (Optional) Update text, projects, or links.

Deploy options
- GitHub Pages:
  - Push repo to GitHub.
  - In repo Settings → Pages, choose branch (main) and root (`/`) or `/docs`.
  - Upload your CV to the repo path `assets/Nolwazi_Vundla_CV.pdf`.
- Vercel:
  - Sign in to Vercel, import the GitHub repo, and deploy. It's static — no build needed.
- Netlify:
  - Drag and drop the site folder into Netlify or connect repo. For contact form, use Netlify Forms (see step 3).

Accessibility & SEO
- Mobile-first, responsive layout.
- Meta description is included in `index.html`.
- Use real resume file and add structured data later if desired.

If you want, I can:
- Create the GitHub repo and push these files for you (I need your repo name/owner).
- Generate a small PDF resume template from your info.
- Convert the site to a React or Next.js app for more features.
