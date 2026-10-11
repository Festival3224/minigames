// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest';

import { createPagination } from './pagination';

describe('pagination', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    document.body.replaceChildren();
  });

  it('renders page buttons and marks the current page as active', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        matches: false,
      })),
    );

    const pagination = createPagination(4, 2, vi.fn());
    document.body.append(pagination);

    const pageButtons = pagination.querySelectorAll<HTMLButtonElement>('.pagination__page');

    expect(pageButtons).toHaveLength(4);

    expect([...pageButtons].map((button) => button.textContent)).toEqual(['1', '2', '3', '4']);

    const activePage = pagination.querySelector<HTMLButtonElement>('.pagination__page--active');

    expect(activePage?.textContent).toBe('2');
    expect(activePage?.getAttribute('aria-current')).toBe('page');
  });

  it('calls onPageChange when a page button is clicked', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        matches: false,
      })),
    );

    const onPageChange = vi.fn();

    const pagination = createPagination(4, 1, onPageChange);
    document.body.append(pagination);

    const pageThree = pagination.querySelector<HTMLButtonElement>('[data-page="3"]');

    if (!pageThree) {
      throw new Error('Page 3 button not found');
    }

    pageThree.click();

    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('changes page when previous and next buttons are clicked', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        matches: false,
      })),
    );

    const onPageChange = vi.fn();

    const pagination = createPagination(5, 3, onPageChange);
    document.body.append(pagination);

    const arrows = pagination.querySelectorAll<HTMLButtonElement>('.pagination__arrow');

    arrows[0].click();
    expect(onPageChange).toHaveBeenCalledWith(2);

    arrows[1].click();
    expect(onPageChange).toHaveBeenCalledWith(4);
  });

  it('disables navigation arrows at the pagination boundaries', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        matches: false,
      })),
    );

    const firstPage = createPagination(5, 1, vi.fn());
    const firstPageArrows = firstPage.querySelectorAll<HTMLButtonElement>('.pagination__arrow');

    expect(firstPageArrows[0].disabled).toBe(true);
    expect(firstPageArrows[1].disabled).toBe(false);

    const lastPage = createPagination(5, 5, vi.fn());
    const lastPageArrows = lastPage.querySelectorAll<HTMLButtonElement>('.pagination__arrow');

    expect(lastPageArrows[0].disabled).toBe(false);
    expect(lastPageArrows[1].disabled).toBe(true);
  });
});
