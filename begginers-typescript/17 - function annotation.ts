// import { Equal, Expect } from './helpers/type-utils';

/**
 * How do we type onFocusChange?
 */
// useful when you want to pass functions into other functions
type FocusListener = (isFocused: boolean) => void;

// less useful when you want to declare a function from outside because it is a little bit less precise
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myFocusListener = (isFocused: boolean): void => {};

const addListener = (onFocusChange: FocusListener) => {
    window.addEventListener('focus', () => {
        onFocusChange(true);
    });

    window.addEventListener('blur', () => {
        onFocusChange(false);
    });
};

addListener((isFocused) => {
    console.log({ isFocused });

    // type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
