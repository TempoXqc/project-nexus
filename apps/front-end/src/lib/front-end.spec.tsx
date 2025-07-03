import { render } from '@testing-library/react';

import FrontEnd from './front-end';

describe('FrontEnd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrontEnd />);
    expect(baseElement).toBeTruthy();
  });
});
