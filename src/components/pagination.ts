export function createPagination(totalPages: number): HTMLElement {
  const pagination = document.createElement('nav');
  pagination.className = 'pagination';
  pagination.setAttribute('aria-label', 'Library pagination');

  let currentPage = 1;

  const getVisiblePages = (maxVisible: number): number[] => {
    if (totalPages <= maxVisible) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - maxVisible + 1;
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  const render = (): void => {
    pagination.replaceChildren();

    const previousButton = document.createElement('button');
    previousButton.className = 'pagination__arrow';
    previousButton.type = 'button';

    previousButton.innerHTML = `
      <span class="material-symbols-outlined" aria-hidden="true">
        chevron_left
      </span>
    `;

    previousButton.disabled = currentPage === 1;

    previousButton.addEventListener('click', () => {
      if (currentPage <= 1) {
        return;
      }

      currentPage -= 1;
      render();
    });

    pagination.append(previousButton);

    const maxVisiblePages = matchMedia('(max-width: 499px)').matches ? 3 : 4;

    const visiblePages = getVisiblePages(maxVisiblePages);

    for (const page of visiblePages) {
      const button = document.createElement('button');

      button.className = 'pagination__page';
      button.type = 'button';
      button.textContent = String(page);
      button.dataset.page = String(page);

      if (page === currentPage) {
        button.classList.add('pagination__page--active');
        button.setAttribute('aria-current', 'page');
      }

      button.addEventListener('click', () => {
        currentPage = page;
        render();
      });

      pagination.append(button);
    }

    const nextButton = document.createElement('button');
    nextButton.className = 'pagination__arrow';
    nextButton.type = 'button';

    nextButton.innerHTML = `
      <span class="material-symbols-outlined" aria-hidden="true">
        chevron_right
      </span>
    `;

    nextButton.disabled = currentPage === totalPages;

    nextButton.addEventListener('click', () => {
      if (currentPage >= totalPages) {
        return;
      }

      currentPage += 1;
      render();
    });

    pagination.append(nextButton);
  };

  render();

  addEventListener('resize', render);

  return pagination;
}
