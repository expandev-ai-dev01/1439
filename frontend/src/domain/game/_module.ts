/**
 * @module game
 * @summary Game domain module for tic-tac-toe game logic and UI
 * @domain functional
 * @dependencies React, Zustand, Tailwind CSS
 * @version 1.0.0
 * @author Development Team
 * @lastModified 2024-01-15
 */

export * from './components';
export * from './stores/gameStore';
export * from './types';

export const moduleMetadata = {
  name: 'game',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: ['Board', 'BoardCell'],
  publicHooks: [],
  publicServices: [],
  publicStores: ['useGameStore'],
  dependencies: {
    internal: ['@/core/components'],
    external: ['react', 'zustand', 'clsx'],
    domains: [],
  },
  exports: {
    components: ['Board', 'BoardCell'],
    hooks: [],
    services: [],
    stores: ['useGameStore'],
    types: ['CellValue', 'CellPosition', 'Cell', 'BoardState', 'GameStore'],
    utils: [],
  },
} as const;
