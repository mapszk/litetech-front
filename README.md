# LiteTech Challenge - Frontend Application

## Important Note

As the Bitbucket repositories provided had the main branch locked, the code has been committed to the `dev` branch in both projects. Additionally, the repositories are private, so for deployment purposes, a public repository was created on GitHub with the exact same commits: [https://github.com/mapszk/litetech-front](https://github.com/mapszk/litetech-front).

**Deployment Note:** The application is deployed on Vercel at [https://litetech-front-alpha.vercel.app](https://litetech-front-alpha.vercel.app). Due to the free plan's cold start, the first load of a post may result in an error or delay.

## Overview

This is a Next.js-based frontend application for displaying and managing blog posts, built as part of the LiteTech technical challenge. It features a responsive design with components for articles, newsletters, and user interactions.

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable UI components built on Radix UI and Tailwind CSS

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mapszk/litetech-front.git
   cd litetech-front
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables (see Environment Variables section below).

## Environment Variables

Create a `.env.local` file in the root directory and configure the following variables based on the `.env.example` file:

- `NEXT_PUBLIC_API_BASE_URL` - Base URL for the API endpoints
- `NEXT_PUBLIC_IMAGES_BASE_URL` - Base URL for images
- `NEXT_PUBLIC_RELATED_POSTS_API_BASE_URL` - Base URL for related posts API

## Scripts

- **Development Server:**

  ```bash
  npm run dev
  ```

  Starts the development server on `http://localhost:3000`.

- **Build:**

  ```bash
  npm run build
  ```

  Builds the application for production.

- **Lint:**

  ```bash
  npm run lint
  ```

  Runs ESLint to check for code quality issues.

- **Start Production Server:**
  ```bash
  npm run start
  ```
  Starts the production server (requires build first).

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── posts/             # Dynamic post pages
│   └── ...                # Other pages
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
├── features/             # Feature-specific modules
│   ├── newsletter/       # Newsletter functionality
│   └── posts/            # Posts management
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

## Deployment

The application is configured for deployment on Vercel. The live version is available at [https://litetech-front-alpha.vercel.app](https://litetech-front-alpha.vercel.app).

For deployment:

1. Connect the GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to the `dev` branch
