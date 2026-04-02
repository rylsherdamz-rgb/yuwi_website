# Yuwi Website

Marketing site for **Yuwi**, a study app that turns notes, photos, and PDFs into quizzes.

This site is built with **Next.js App Router** and is designed to reflect the actual mobile product in the sibling app project at:

- `/home/richie/Projects/yuwi`

## What The Site Includes

- a branded hero section using the real Yuwi app icon
- product messaging based on the current mobile app flow
- a feature section for scan, PDF reading, quiz generation, and history
- a privacy/value section
- a Gemini API usage note
- a roadmap section instead of pricing
- lightweight scroll reveal animations and launch-style polish

## Brand Direction

The site uses the same visual direction as the app:

- warm orange and cream palette
- softer brown dark mode
- `Space Grotesk` for brand-heavy headings
- `Manrope` for body copy

The icon used on the site lives here:

- [public/yuwi-icon.png](/home/richie/Projects/yuwi_website/public/yuwi-icon.png)

## Project Structure

- [app/page.tsx](/home/richie/Projects/yuwi_website/app/page.tsx)
  Main landing page content and section structure.

- [app/layout.tsx](/home/richie/Projects/yuwi_website/app/layout.tsx)
  Global metadata and font setup.

- [app/globals.css](/home/richie/Projects/yuwi_website/app/globals.css)
  Theme tokens, motion helpers, and global styling.

- [app/_components/reveal.tsx](/home/richie/Projects/yuwi_website/app/_components/reveal.tsx)
  Small client-side scroll reveal component used for section animations.

## App Reference

The current website copy and mock product framing are based on the real Yuwi mobile app, especially:

- the Home screen
- the Quiz creation flow
- the Reviewer screen
- the shared theme tokens

Those live in the sibling repo:

- `/home/richie/Projects/yuwi/app`
- `/home/richie/Projects/yuwi/components`
- `/home/richie/Projects/yuwi/hooks/useTheme.ts`

## Gemini Note

The site explicitly explains that Yuwi uses the **Gemini API** to generate quizzes.

That means:

- quiz generation depends on the API key in use
- usage is tied to Gemini access and quota
- switching API keys does not make quiz generation truly unlimited

## APK Download

The download button now points directly to the current GitHub release APK:

- `https://github.com/rylsherdamz-rgb/yuwi_website/releases/download/v1.0/Yuwi-StudyPartner.apk`

The download section also notes that the Google Play Store release is coming soon.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Scripts

- `npm run dev` - start local development
- `npm run build` - build the site
- `npm run start` - run the production build
- `npm run lint` - run ESLint

## Notes

- the site currently uses static product framing, not live app screenshots
- product mock sections are intentionally inspired by the real app structure rather than generic SaaS cards
- roadmap is included, pricing is intentionally excluded
