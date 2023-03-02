import { screen, fireEvent } from '@testing-library/react';
import {SideBar} from "./SideBar";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('SideBar', () => {
    test('with only first param', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('test toggle', () => {
        renderWithTranslation(<SideBar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
