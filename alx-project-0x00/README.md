# React Genesis: Mastering Next.js Setup

This is a Next.js project built to learn the fundamentals of modern web development using React, TypeScript, and Next.js. The application mimics core features of Airbnb’s UI, including property listings with images, ratings, and interactive components.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Setup Instructions
1. Install Node.js (v16 or later) and npm/yarn.
2. Run `npx create-next-app@latest alx-project-0x00 --typescript --eslint --tailwind --no-src-dir --no-app-router --import-alias @/*`.
3. Navigate to the project directory: `cd alx-project-0x00`.
4. Start the development server: `npm run dev -- -p 3000`.
5. Open `http://localhost:3000` in your browser.

## Project Structure
- `components/`: Reusable React components.
- `interfaces/`: TypeScript interfaces for type safety.
- `pages/`: Next.js Pages Router for routing.
- `public/`: Static assets like images.
- `styles/`: Tailwind CSS styles.

## Tools Used
- Next.js v13+
- TypeScript
- Tailwind CSS
- ESLint

## Learning Objectives
- Scaffold a Next.js project with TypeScript.
- Understand Next.js folder structure and best practices.
- Implement routing, reusable components, and responsive design.
- Ensure code quality with ESLint and TypeScript.

## Next Steps
- Build property listing components.
- Implement responsive design with Tailwind CSS.
- Add routing for multiple pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
