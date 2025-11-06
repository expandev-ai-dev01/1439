# Jogo da Velha Clássico - Backend API

Backend API for the classic Tic-Tac-Toe game.

## Description

Um jogo da velha tradicional onde dois jogadores se alternam marcando X e O em uma matriz 3x3, com verificação de vitória, indicador de turno e sons interativos.

## Features

- Tabuleiro 3x3
- Marcação de jogadas alternadas (X e O)
- Verificação automática de vitória
- Indicador de turno
- Sons interativos
- Verificação de empate
- Reinício de jogo

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Validation**: Zod
- **Testing**: Jest

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       └── internal/       # Internal endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── services/               # Business logic
├── middleware/             # Express middleware
├── utils/                  # Utility functions
├── constants/              # Application constants
├── types/                  # TypeScript type definitions
├── config/                 # Configuration files
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file from `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Configure environment variables in `.env`

### Development

Run the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Building

Build the project:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm start
```

### Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

### Linting

Run ESLint:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

## API Documentation

### Health Check

**GET** `/health`

Returns the health status of the API.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "version": "v1"
}
```

### API Endpoints

All API endpoints are prefixed with `/api/v1`

## Environment Variables

- `NODE_ENV`: Environment mode (development/production)
- `PORT`: Server port (default: 3000)
- `API_VERSION`: API version (default: v1)
- `CORS_ORIGINS`: Allowed CORS origins (comma-separated)

## License

MIT
