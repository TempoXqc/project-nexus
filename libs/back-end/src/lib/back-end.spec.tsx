import { render } from '@testing-library/react';

import BackEnd from './back-end';

describe('BackEnd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackEnd />);
    expect(baseElement).toBeTruthy();
  });
});
