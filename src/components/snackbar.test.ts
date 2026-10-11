// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';
import { hideSnackbar, showSnackbar } from './snackbar';

afterEach(() => {
  vi.useRealTimers();
  document.body.replaceChildren();
});

describe('snackbar', () => {
  it('renders the message and variant', () => {
    showSnackbar({
      message: 'Saved successfully.',
      variant: 'success',
    });

    const snackbar = document.querySelector('.snackbar');

    expect(snackbar?.classList.contains('snackbar--success')).toBe(true);
    expect(snackbar?.querySelector('.snackbar__message')?.textContent).toBe('Saved successfully.');
  });

  it('replaces an existing snackbar', () => {
    showSnackbar({
      message: 'First message',
      variant: 'success',
    });

    showSnackbar({
      message: 'Second message',
      variant: 'error',
    });

    const snackbars = document.querySelectorAll('.snackbar');

    expect(snackbars).toHaveLength(1);
    expect(snackbars[0]?.querySelector('.snackbar__message')?.textContent).toBe('Second message');
  });

  it('closes by button click', () => {
    showSnackbar({
      message: 'Closable',
      variant: 'success',
    });

    document.querySelector<HTMLButtonElement>('.snackbar__close')?.click();

    expect(document.querySelector('.snackbar')).toBeNull();
  });

  it('closes automatically after the configured duration', () => {
    vi.useFakeTimers();

    showSnackbar({
      message: 'Temporary',
      variant: 'success',
      duration: 1000,
    });

    vi.advanceTimersByTime(1000);

    expect(document.querySelector('.snackbar')).toBeNull();
  });

  it('hideSnackbar removes the current snackbar', () => {
    showSnackbar({
      message: 'Hide me',
      variant: 'error',
    });

    hideSnackbar();

    expect(document.querySelector('.snackbar')).toBeNull();
  });
});
