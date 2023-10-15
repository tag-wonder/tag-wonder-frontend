import { render } from '@testing-library/react';

import Board from '.';

describe('Board', () => {
  const title = 'title';

  const renderBoard = () => render((
    <Board title={title} position={0} />
  ));

  it('title이 나타나야만 한다', () => {
    const { container } = renderBoard();

    expect(container).toHaveTextContent(title);
  });
});
