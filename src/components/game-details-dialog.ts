export function createGameDetailsDialog(): HTMLElement {
  const backdrop = document.createElement('div');
  backdrop.className = 'game-details-backdrop';

  const dialog = document.createElement('section');
  dialog.className = 'game-details-dialog';
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-label', 'Game details');

  dialog.innerHTML = `
    <button
      class="game-details-dialog__close"
      type="button"
      aria-label="Close game details"
    >
      ×
    </button>

    <div class="game-details-dialog__placeholder">
      Tukoni: Forest Keepers
    </div>
  `;

  backdrop.append(dialog);

  return backdrop;
}
