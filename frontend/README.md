# Jogo da Velha Clássico

Um jogo da velha tradicional onde dois jogadores se alternam marcando X e O em uma matriz 3x3, com verificação de vitória, indicador de turno e sons interativos.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Zustand 5.0.1

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── main.tsx           # Entry point
│   └── router.tsx         # Configuração de rotas
├── assets/                # Assets estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes UI genéricos
│   ├── lib/              # Configurações de bibliotecas
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio (features)
└── pages/                # Páginas da aplicação
    ├── layouts/          # Layouts compartilhados
    ├── Home/             # Página inicial
    └── Game/             # Página do jogo
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Features

- [x] Tabuleiro 3x3
- [ ] Marcação de jogadas
- [ ] Verificação de vitória
- [ ] Indicador de turno
- [ ] Sons interativos
- [ ] Verificação de empate
- [ ] Reinício de jogo

## Licença

MIT