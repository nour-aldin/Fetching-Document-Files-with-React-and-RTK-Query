# Fetching Document Files with React and RTK Query

This project demonstrates how to efficiently fetch and display document files (such as images and PDFs) using React and RTK Query. We use DummyJSON as a data source in a practical example of fetching an image and rendering it in the browser.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Setup

1. Clone this repository:

```bash
 git clone https://github.com/nour-aldin/Fetching-Document-Files-with-React-and-RTK-Query.git

 cd Fetching-Document-Files-with-React-and-RTK-Query
```

2. Install dependencies:

```bash
  pnpm i
```

3. Run the app:

```bash
  pnpm run dev
```

## Usage

This example fetches an image using Redux and RTK Query. To fetch an image and render it:

- The API slice (imageApi) is set up to fetch images from DummyJSON.
- The app fetches an image and handles loading and error states using RTK Query hooks.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Redux Toolkit (RTK Query):** A state management tool that helps manage API requests efficiently.
- **DummyJSON:** Used as a mock API to fetch the image.
