import { render } from '@testing-library/react';

import DsReact from './ds-react';

describe('DsReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DsReact />);
    expect(baseElement).toBeTruthy();
  });
});
