This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

This project is a multi-select component built with Next.js, React, and Tailwind CSS. The component allows users to select multiple items, filter items through search, highlight matching items, and add new items if they do not exist in the list. Additionally, it includes a 'Select All' feature that can be triggered using the Ctrl + A or Command + A combination.

## Features

- **Multi-Select**: Users can select multiple items from a list.
- **Search and Filter**: Users can filter items by typing in the search input. Matching items are highlighted.
- **Add New Items**: If the searched item does not exist, users can add it as a new item.
- **Select All**: Users can select all items using the Ctrl + A or Command + A combination.
- **Remove Selected Items**: Users can remove selected items by clicking the 'x' next to each item.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.
- **TypeScript**: A typed superset of JavaScript that provides static typing.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

## Live Demo
You can view the live demo of this project at https://multi-select-component-pi.vercel.app/.

## Project Structure

```plaintext
multi-select-component
└── src
    ├── app
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   └── components
    │       ├── MultiSelect
    │       │   ├── MultiSelect.tsx
    │       │   ├── MultiSelectInput.tsx
    │       │   ├── MultiSelectDropdown.tsx
    │       │   ├── SelectedItems.tsx
    │       │   └── index.tsx
    │       ├── Header.tsx
    │       ├── Footer.tsx
    ├── types
    │   └── multi-select.ts
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── tsconfig.json
    ├── package.json
    └── README.md
```

Thank you for checking out this project! 🚀