## BRICKS - LEGO Community

Bricks is a modern web application built with **Next.js** that showcases LEGO creations, featured brick characters, and community-built models.  
The platform focuses on clean UI, smooth horizontal scrolling sections, and a LEGO-inspired visual experience.
First, run the development server:

Live Demo: https://bricks-sage.vercel.app

## Setup & Installation

- Clone repository

```bash

git clone https://github.com/your-username/bricks.git
cd bricks

npm install

npm run dev

```

## Routes

- Products: Listing of all available products.
- Products/id: Dynamic detail page on specefic products.

## Features

- Horizontally scrollable Featured Bricks section

- Community showcase with real image data

- Reusable card components

- JSON-based data loading from /public

- Smooth scroll & snap scrolling

- DaisyUI component styling

- Icon-based UI using React Icons

## Feature Explanation

- Featured Bricks

Displays popular LEGO characters using a horizontal scroll layout.
Data is fetched from a local JSON file using Axios.

- Community Showcase

Shows community-created LEGO builds with images, author names, and descriptions.
Designed for inspiration and engagement.

- Performance

Optimized for fast loading with static assets and Next.js optimizations.
