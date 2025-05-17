# JD-Post: Modern News Portal

A modern, responsive news portal built with [Next.js](https://nextjs.org/), fetching and displaying the latest articles from the New York Times API. The project features dynamic sections, search functionality, and a clean, mobile-friendly UI powered by Tailwind CSS.

---

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 📰 Fetches top stories and search results from the New York Times API
- 🔎 Search for news articles by keyword
- 📱 Responsive design for desktop and mobile
- 🌙 Light and dark mode support
- 🕒 Live date and time display
- ⚡ Fast navigation with Next.js App Router
- 🏷️ News categorized by sections (Sports, Business, Fashion, Science, Arts, Movies, World, Food, Travel)
- 🖼️ Rich article previews with images and summaries
- 📑 Pagination for "More News" sections
- 🧩 Modular, reusable React components

---

## Demo

[https://jeannede-news.vercel.app/](https://jeannede-news.vercel.app/)

---

## Project Structure

```
jd-post/
├── src/
│   ├── app/                # Next.js app directory (pages, layouts, etc.)
│   ├── components/         # Reusable React components
│   ├── fetch-news.ts       # API fetching utilities
│   ├── formats.ts          # Formatting helpers
│   └── ...
├── public/                 # Static assets (images, logos)
├── .env.template           # Environment variable template
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.mjs      # PostCSS configuration
├── package.json            # Project metadata and scripts
└── ...
```

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/jd-post.git
cd jd-post
```

### 2. Install dependencies

```sh
npm install
# or
yarn install
```

### 3. Set up environment variables

Copy the `.env.template` to `.env` and add your [NYTimes API Key](https://developer.nytimes.com/):

```sh
cp .env.template .env
```

Edit `.env`:

```
NEXT_PUBLIC_API_KEY=your-nyt-api-key
```

### 4. Run the development server

```sh
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

- Browse top stories by section from the navigation bar.
- Use the search page to find articles by keyword.
- Click on articles to read the full story on the NYTimes website.
- Switch between light and dark mode automatically based on your system preference.

---

## Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NYTimes API](https://developer.nytimes.com/)
- [Lucide React Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [NYTimes Developer Network](https://developer.nytimes.com/)
- [Vercel](https://vercel.com/) for Next.js and hosting
