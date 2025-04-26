import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../Landing_page/Home/Hero';

describe('Hero', () => {
    test('renders correctly', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('hero');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', './images/homeHero.png');
    });
});