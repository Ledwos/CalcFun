import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Rendering a component

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    // screen.debug();
  });
});

// After rendering you have access 
// to the React component in the test :)

// screen.debug() returns HTML output of the 
// App component. This allows you to see
// what it is exactly that you're testing


// Selecting elements

describe('Element selector', () => {
  test('RTL picks an element using Text', () => {
    render(<App />);

    expect(screen.getByText(/\bfun\b/)).toBeInTheDocument();
  });
});

// to getByText you have to provide the whole 
// text within that element

// alternatively you can use RegEx to find by a
// particular string within that element

// 'expect' assertion not necessary as getByText
// returns error if element is not present
// (implicit assertion)

// Text is just one of the 'search types'
// Another is Role, using getByRole

describe('Element selector 2', () => {
  test('RTL pick an element using Role', () => {
    render(<App />)

    screen.getByRole('heading');
  })
})

// neat thing about getByRole is if the provided
// role isn't available, it will print out a list
// of all selectable roles for you to choose.

//  other more specific search types are the following:
// LabelText: getByLabelText: <label for="search" />
// PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
// AltText: getByAltText: <img alt="profile" />
// DisplayValue: getByDisplayValue: <input value="JavaScript" />

// As a last resort, you can use search type TestId.
// This one requires you to assing a data-testid 
// attribute in the source code's HTML
// ∴ stick with getByRole/Text where you can to
// select rendered elements with RTL

