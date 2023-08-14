import type * as ReactDom from 'react-dom';

import { render } from '@testing-library/react';

import HomePage from './page';

// https://github.com/vercel/next.js/issues/53272
jest.mock('react-dom', () => ({
  ...jest.requireActual<typeof ReactDom>('react-dom'),
  preload: jest.fn(),
}));

describe('HomePage', () => {
  const renderHomePage = () => render((
    <HomePage />
  ));

  it('Should be visible "app/page.tsx"', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('app/page.tsx');
  });
});
