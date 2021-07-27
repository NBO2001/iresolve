import {render ,screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import { Home } from '../../index';

test('Testando a renderização da page home', () => {
        render(<Home />);

        const textEl = screen.getByRole('button');

        expect(textEl).toBeInTheDocument();
});