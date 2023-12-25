# Notion Ticket System Documentation

## Overview

Welcome to the documentation for the Notion Ticket System, a React application utilizing TypeScript, Tailwind CSS, and Next.js. This project demonstrates a CRUD application with React, Redux, Typescript, TailwindCSS, and the Notion API. Users can create tickets with a title, category, and description, which are then sent to a Notion database, creating an item in the TODO list.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Usage](#usage)
5. [Folder Structure](#folder-structure)
6. [Technologies Used](#technologies-used)
7. [Contributing](#contributing)
8. [License](#license)

## Prerequisites

Before starting, make sure you have the following prerequisites:

- Node.js and npm installed on your machine
- Yarn package manager
- Notion API integration (Secret and Database ID)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Biplo12/notion-ticket-system.git
   ```

2. Change into the project directory:

   ```bash
   cd notion-ticket-system
   ```

3. Install dependencies using yarn:

   ```bash
   yarn install
   ```

## Configuration

### Notion API Integration

To configure the Notion API integration, follow these steps:

1. Obtain your Notion integration token and database ID.

2. Create a `.env` file in the project root:

   ```env
   NOTION_SECRET=your-notion-secret
   NOTION_DB_ID=your-notion-database-id
   ```

   Replace `your-notion-secret` and `your-notion-database-id` with your actual Notion secret and database ID.

## Usage

1. Start the development server:

   ```bash
   yarn dev
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000).

3. Interact with the app by creating tickets with titles, categories, and descriptions.

4. Check the Notion database for the created TODO items.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Next.js
- Redux
- Notion API

## Contributing

If you would like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/my-feature`.
3. Make your changes and commit them: `git commit -m 'Add my feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
