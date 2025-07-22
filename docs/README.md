# Next.js Auth0 GitHub Pages App

A simple Next.js application with Auth0 authentication configured for GitHub Pages deployment. This project uses Dev Containers for a consistent development environment.

## Development with Dev Containers

This project is configured to use [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers), which provides a consistent development environment using Docker.

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Visual Studio Code](https://code.visualstudio.com/)
- [VS Code Remote - Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Getting Started with Dev Containers

1. Clone this repository
2. Open the project in VS Code
3. When prompted, click "Reopen in Container" or run the command "Remote-Containers: Reopen in Container" from the Command Palette (F1)
4. VS Code will build the Docker container and connect to it
5. Once connected, the terminal in VS Code will be running inside the container

### Environment Setup

1. Copy `.env.example` to `.env.local` and fill in your Auth0 credentials:
   ```bash
   cp .env.example .env.local
   ```

2. Install dependencies (if not already done by the post-create command):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to [http://localhost:3000](http://localhost:3000)

## Auth0 Setup

1. Create an Auth0 account at [auth0.com](https://auth0.com/)
2. Create a new Single Page Application
3. Configure your Auth0 application:
   - Set "Allowed Callback URLs" to include:
     - `http://localhost:3000` (for development)
     - `https://yourusername.github.io/berf` (for production)
   - Set "Allowed Logout URLs" to the same URLs
   - Set "Allowed Web Origins" to the same URLs
4. Add your Auth0 credentials to `.env.local`

## GitHub Pages Deployment

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

1. Push your code to GitHub
2. In your repository settings, add the Auth0 secrets:
   - Go to "Settings" > "Secrets and variables" > "Actions"
   - Add two repository secrets:
     - `AUTH0_DOMAIN`: Your Auth0 domain
     - `AUTH0_CLIENT_ID`: Your Auth0 client ID
3. Enable GitHub Pages:
   - Go to "Settings" > "Pages"
   - Set "Source" to "GitHub Actions"

## Project Structure

- `/app`: Next.js application pages and layout
- `/components`: React components including Auth0 integration
- `/utils`: Utility functions and configuration
- `/.devcontainer`: Dev Container configuration
- `/.github/workflows`: GitHub Actions workflow for deployment
