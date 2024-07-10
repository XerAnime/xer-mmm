# MangaThingy

Welcome to MangaThingy, your one-stop solution for all your manga needs! With MangaThingy, you can search for popular and latest manga from multiple providers and read them for free.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [Contributing](#contributing)
- [License](#license)

## Introduction
MangaThingy is a web application that allows users to search for manga across different providers and read them online. The application is built with Next.js and provides a smooth and responsive user experience.

## Features
- Search for manga by title.
- View popular and latest manga.
- Select from different manga providers: Mangareader, Flamescans, and Mangapill.
- View detailed information about each manga.
- Read manga chapters directly within the app.

## Installation
To run MangaThingy locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/MangaThingy.git
   cd MangaThingy
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage
- Use the search bar to find your favorite manga by title.
- Select the provider from the dropdown to fetch results from Mangareader, Flamescans, or Mangapill.
- Click on the manga cards to view more details and read chapters.
- Use the navigation bar to access popular and latest manga sections.

## Code Overview
### Components
- **`MangaInput.tsx`**: Handles the search functionality and input fields.
- **`ResultsFormatter.tsx`**: Formats and displays the search results.
- **`ChapterSelector.tsx`**: Allows users to select and read manga chapters.
- **`ImageDisplay.tsx`**: Displays manga images for the selected chapter.

### Pages
- **`page.tsx`**: The homepage welcoming users and providing navigation links to popular and latest manga.
- **`[provider]/[id].tsx`**: Dynamic routing for viewing detailed manga information and chapters.

### API Requests
- **`fetchData`**: Fetches search results from the selected provider.
- **`fetchFlameInfo`**, **`fetchMangareaderInfo`**, **`fetchMangapillInfo`**: Fetch detailed information for a specific manga.
- **`imageFetcher`**: Fetches images for the selected manga chapter.
- **`MangareaderLatest`**: Fetches the latest manga from the selected provider.

### Layout
- **`Layout.tsx`**: Defines the layout of the application, including the navbar and theme controller.

## Contributing
We welcome contributions from the community! If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/YourFeature
   ```
3. Make your changes.
4. Commit your changes:
   ```sh
   git commit -m 'Add some feature'
   ```
5. Push to the branch:
   ```sh
   git push origin feature/YourFeature
   ```
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
