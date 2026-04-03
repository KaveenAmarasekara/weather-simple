# 🌤️ Weather Simple — A Minimal Weather App Built with Vite + React

A lightweight weather application built using Vite and React, created to refresh React fundamentals and explore Vite’s modern, fast development workflow. This project focuses on clean structure, API usage, and understanding how Vite improves the frontend developer experience.

<!-- Badges: add these near the top -->
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Vite](https://img.shields.io/badge/built%20with-Vite-brightgreen)](https://vitejs.dev/)
[![Demo](https://img.shields.io/badge/demo-online-orange)]([https://your-demo-link.example](https://kaveenamarasekara.github.io/weather-simple/))


## Demo

Live demo: https://kaveenamarasekara.github.io/weather-simple/

If you don't have a demo yet, consider adding a short GIF or a few screenshots demonstrating the UI and core interactions under the Screenshots section.

## 🚀 Why Vite?

While building this project, I followed a Vite crash course (link to the course or notes recommended) that highlighted how Vite improves development speed and workflow. Vite provides a modern dev experience with fast startup and efficient HMR.

## Key Vite Concepts Used

- Instant dev server startup powered by native ES modules
- Hot Module Replacement (HMR) without losing component state
- Simple project scaffolding using `npm create vite@latest`
- Optimized static asset handling
- Environment variables via `import.meta.env`
- Production builds using `npm run build`
- Extendable tooling through Vite plugins

These fundamentals made the development process extremely smooth and fast.

## 🛠️ Tech Stack

- Vite — Fast dev server + build tool
- React — UI components
- OpenWeather API — Weather data provider
- JavaScript (ES6+) — Core language

## 🌦️ Features

- Fetches real-time weather data using OpenWeather API
- Clean and minimal UI
- Built with React functional components
- Uses Vite’s fast dev server for instant feedback
- Simple, readable code structure suitable for beginners
- Environment variable support for API keys

## 📁 Project Structure

```
weather-simple/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
├── .env
├── index.html
└── vite.config.js
```

Notes:
- Keep secrets out of version control. Add `.env` to `.gitignore` and provide a `.env.example` (see Environment Variables section).

## 🔧 Setup & Installation

Prerequisites:
- Node.js >= 16 (recommend using nvm to manage versions)

Clone the repository:

```bash
git clone https://github.com/KaveenAmarasekara/weather-simple.git
cd weather-simple
```

Install dependencies:

```bash
npm install
```

Create a `.env` file (see Environment Variables below) or copy the example:

```bash
cp .env.example .env
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the project root and add your OpenWeather API key. Use a `.env.example` in the repo to show required keys without exposing real keys.

`.env.example`:

```
VITE_WEATHER_API_KEY=your_key_here
```

Then create `.env` (local only, and ensure `.env` is in `.gitignore`):

```
VITE_WEATHER_API_KEY=YOUR_REAL_API_KEY
```

In code you can access it via `import.meta.env.VITE_WEATHER_API_KEY`.

## Usage / Examples

Example: how the app might fetch weather data (pseudo-code / simplified):

```js
// src/api/weather.js
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error('Weather API error');
  return res.json();
}
```

Use the `fetchWeather` function inside a React component and display loading/error states. Provide an example component snippet or link to the relevant source file in the repo.

## 📸 Screenshots

Add screenshots or a short GIF demonstrating the app UI. Example Markdown for an image:

```md
![App screenshot](./screenshots/screenshot-1.png)
```

Place images in a `screenshots/` or `public/` folder and reference them here.

## Contributing

Contributions are welcome! Suggested workflow:

1. Fork the repository
2. Create a branch: `git checkout -b feat/your-feature`
3. Make changes and add tests if applicable
4. Commit: `git commit -m "feat: add ..."`
5. Push: `git push origin feat/your-feature`
6. Open a Pull Request describing your changes

Please open an issue to discuss larger changes before implementing.

## Running Tests

If you add tests (recommended), include commands here. Example with vitest:

```bash
npm run test
```

If no tests are present, note that tests are currently not included and list any plans to add them.

## 📜 License

This project is open-source and available under the [MIT License](./LICENSE).

## Authors

- Kaveen Amarasekara — original author (https://github.com/KaveenAmarasekara)


## Acknowledgements

- OpenWeather for the API (https://openweathermap.org/)
- Vite documentation and community resources (https://vite.dev/)
- Tutorial or course followed (https://youtu.be/do62-z3z6FM?si=gcRcxlkK_WTMP0zt, https://www.youtube.com/watch?v=7vMkRS1ZydA)

## Support / Feedback

Open an issue for bugs or feature requests. For questions, you can contact the author via GitHub issues or open a discussion in the repository.
