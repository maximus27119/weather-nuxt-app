# Nuxt 3 Weather Application

This is a Nuxt 3 application that provides weather forecasts and suggests clothing based on the weather.

Test demo: https://weather-nuxt-app-mu.vercel.app/

## Getting Started

Follow the steps below to set up and run the project.

### Prerequisites

- [Node.js](https://nodejs.org) (version 16.x or later recommended)
- [Yarn](https://yarnpkg.com/) (for managing dependencies)

### Installation

1. **Clone the repository**  
   Clone the project repository to your local machine.

   ```bash
   git clone https://github.com/maximus27119/weather-nuxt-app
   cd weather-nuxt-app
   ```

2. **Set up the environment variables**
   Copy the .env.example file and rename it to .env:
   ```bash
   cp .env.example .env
   ```

Edit the `.env` file and provide the required values:

`WEATHER_API_URL:` Base URL for the weather API.
`GEOCODE_API_URL:` Base URL for the geocoding API.
`API_KEY:` Your API key for accessing the services.

3. **Install dependencies**
   Use Yarn to install the project dependencies:
   ```bash
   yarn
   ```

### Running the Project

#### Development Mode

To start the development server with hot-reloading:
```bash
   yarn dev
```
The application will be available at http://localhost:3000.

#### Production Mode
1. **Build the application**
    ```bash
    yarn build
    ```

2. **Run the production server:**
    ```bash
    node .output/server/index.mjs
    ```
The application will be available at http://localhost:3000

Ensure the API URLs and API key provided in the .env file are valid for proper functioning of the application.
