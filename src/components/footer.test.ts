// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';

import { createFooter } from './footer';

describe('footer', () => {
  it('renders footer content and external links', () => {
    const footer = createFooter();

    expect(footer.classList.contains('footer')).toBe(true);
    expect(footer.textContent).toContain('MiniGames');
    expect(footer.textContent).toContain('RS School');
    expect(footer.textContent).toContain('@Festival3224');

    const rsSchoolLink = footer.querySelector<HTMLAnchorElement>('.footer__rsschool');

    expect(rsSchoolLink?.href).toBe('https://rs.school/courses/short-track');
    expect(rsSchoolLink?.target).toBe('_blank');

    const githubLink = footer.querySelector<HTMLAnchorElement>('.footer__student');

    expect(githubLink?.href).toBe('https://github.com/Festival3224');
    expect(githubLink?.target).toBe('_blank');
  });
});
