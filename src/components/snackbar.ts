type SnackbarVariant = 'success' | 'error';

interface SnackbarOptions {
  message: string;
  variant: SnackbarVariant;
  duration?: number;
}

export function showSnackbar({ message, variant, duration = 4000 }: SnackbarOptions): void {
  const existingSnackbar = document.querySelector('.snackbar');

  existingSnackbar?.remove();

  const snackbar = document.createElement('div');

  snackbar.className = `snackbar snackbar--${variant}`;
  snackbar.setAttribute('role', 'status');

  snackbar.innerHTML = /* html */ `
    <span class="snackbar__message">${message}</span>

    <button
      class="snackbar__close"
      type="button"
      aria-label="Close notification"
    >
      <span class="material-symbols-outlined" aria-hidden="true">
        close
      </span>
    </button>
  `;

  const closeButton = snackbar.querySelector<HTMLButtonElement>('.snackbar__close');

  const closeSnackbar = (): void => {
    snackbar.remove();
  };

  closeButton?.addEventListener('click', closeSnackbar);

  document.body.append(snackbar);

  setTimeout(closeSnackbar, duration);
}

export function hideSnackbar(): void {
  document.querySelector('.snackbar')?.remove();
}
