import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/minigames/',
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
