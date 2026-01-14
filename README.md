# Photography Portfolio 

Portfolio website built with React for showcasing photography. 

This project was created for a client and tailored to their specific requirements;

## Tech stack

- React (JSX)
- Vite 
- CSS for styling

## Project structure

```
- index.html — app entry HTML
- src/
  - main.jsx — app bootstrap & router
  - App.jsx — main app wrapper 
  - style.css — global styles
  - components/
    - Navbar.jsx
    - MainPage.jsx - home page
    - PhotoPage.jsx - gallery
    - AboutPage.jsx 
    - ErrorBoundary.jsx - error handling component
- public/
  - assets/ - images
```

## Key features

- Client-side routing for pages and individual photos
- Responsive gallery layout
- Horizontal Infinite Scroll: A horizontal scrolling gallery layout designed to showcase a continuous stream of artwork
- Immersive Lightbox
- Error boundary to catch rendering errors

## Quick start (PowerShell)

Prerequisites: Node.js 16+ and npm or Yarn.

Install dependencies:

```powershell
npm install
```

Run development server:

```powershell
npm run dev
```

Open the app in your browser at the URL printed by Vite (usually http://localhost:5173).

Build for production:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

## Development notes

- Routing: `react-router-dom` manages routes. Main routes typically include `/` (gallery/home), `/work` (gallery or work collection), and `/photo/:id` (single photo view). Ensure links use `<Link to="/work">` or `useNavigate()` rather than raw `<a href>` to avoid full page reloads.

- Static images in `public/assets` can be referenced by `/assets/<filename>.jpg`.

- Styling: `src/style.css` contains global rules. Component-level classes are used throughout `src/components`.

## License

This project is licensed under the MIT License — see the `LICENSE` file at the project root for details.
