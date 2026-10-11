import { defineConfig } from 'vitest/config';

export default defineConfig({
  base: '/minigames/',

  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],

    coverage: {
      provider: 'v8',

      // Include all TypeScript application logic in the coverage report.
      include: ['src/**/*.ts'],

      exclude: [
        // Unit test files contain test code, not application logic.
        'src/**/*.test.ts',

        // Firebase configuration only; no application logic is implemented here.
        'src/auth/firebase.ts',
      ],
    },
  },
});
