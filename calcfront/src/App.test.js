import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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


// Tests

describe('Calc interface', () => {
  test('initial screen text is zero', () => {
    render(<App />);
    let face = document.querySelector('#cFace');
    expect(face.innerHTML).toBe('0');
  });
  
  // Fire event
  test('update screen text on button click', async () => {
    render(<App />);
    let face = document.querySelector('#cFace');
    expect(face.innerHTML).toBe('0');
    fireEvent.click(screen.getByText('1'));
    expect(await face.innerHTML).toBe('1');
  });

  test('calculates answer', async () => {
    render(<App />);
    // initial
    let face = document.querySelector('#cFace');
    expect(face.innerHTML).toBe('0');
    // pressing '=' before anything else
    fireEvent.click(screen.getByText('='));
    expect(await face.innerHTML).toBe('0');
    // enter query
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('4'));
    expect(await face.innerHTML).toBe('6 x 4');
    // run handleEql
    fireEvent.click(screen.getByText('='));
    expect(await face.innerHTML).toBe('24');
  });

  test('C button', async () => {
    render(<App />);
    let face = document.querySelector('#cFace');
    expect(face.innerHTML).toBe('0');
    // Press C only
    fireEvent.click(screen.getByText('C'));
    expect(await face.innerHTML).toBe('0');
    // Clear after input change
    fireEvent.click(screen.getByText('8'));
    expect(await face.innerHTML).toBe('8');
    fireEvent.click(screen.getByText('C'));
    expect(await face.innerHTML).toBe('0');
    // Clear after handleEql
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('8'));
    expect(await face.innerHTML).toBe('8 + 8');
    fireEvent.click(screen.getByText('C'));
    expect(await face.innerHTML).toBe('0');
  });

  test('CE button', async () => {
    render(<App />);
    let face = document.querySelector('#cFace');
    expect(face.innerHTML).toBe('0');
    // Press CE only
    fireEvent.click(screen.getByText('CE'));
    expect(await face.innerHTML).toBe('0');
    
    // Clear face one elment at a time
    // single element
    fireEvent.click(screen.getByText('8'));
    expect(await face.innerHTML).toBe('8');
    fireEvent.click(screen.getByText('CE'));
    expect(await face.innerHTML).toBe('0');
    
    // multiple elements
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('4'));
    expect(await face.innerHTML).toBe('1.5 x 4');
    // remove first element (4)
    fireEvent.click(screen.getByText('CE'));
    expect(await face.innerHTML).toBe('1.5 x');
    // remove second element (x)
    fireEvent.click(screen.getByText('CE'));
    expect(await face.innerHTML).toBe('1.5');
    // remove final element (1.5);
    fireEvent.click(screen.getByText('CE'));
    expect(await face.innerHTML).toBe('0');

    // after handleEql
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('4'));
    expect(await face.innerHTML).toBe('6 x 4');
    // run handleEql
    fireEvent.click(screen.getByText('='));
    expect(await face.innerHTML).toBe('24');
    // click CE
    fireEvent.click(screen.getByText('CE'));
    expect(await face.innerHTML).toBe('0');

    // ERROR HERE ^^^, stupid CE....
  })
});

