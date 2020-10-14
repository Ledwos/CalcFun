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
  });
});

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

// Search Variants

// As well as different search types, there are also
// different search variants:
// Instead of getBy you can also use queryBy / findBy

// Why?
// getBy does not check for elements that shouldn't
// be there and ends up throwing an error before
// the assertion could be made.
// In this case, it is useful to switch getBy for
// queryBy

describe('SearchVariants', () => {
  test('using queryBy', () => {
    render(<App />);

    expect(screen.queryByText(/no fun/)).toBeNull();
  });
});

// Long story short, when asserting that an element
// isn't there, use queryBy instead of getBy

// findBy is used for asynchronous elements.
// To test a component over the period of its
// first render to its second render due to a resolved
// promise, we must write an async test to wait for
// the promise to resolve asynchronously.

// example: awaiting login fetch details to come through

// test('renders name', async () => {
//   render(<App />)
//   expect(screen.queryByText(/Username Box/)).toBeNull();
//   expect(await screen.findByText(/Username Box/)).toBeInTheDocument();
// });

// assert that the username is not present on first render,
// followed by an assertion to confirm it's there
// once the promise is resolved.
// can confirm this visually by using screen.debug()
// after each assertion

// Multiple elements
// to get all elements that match a given criteria,
// simply add 'All' to the search variant:

// - getAllBy
// - queryAllBy
// - findAllBy

// Assertive functions

// toBeNull, toBeInTheDocument etc. are part of an
// extra package already set up when using create-react-app

