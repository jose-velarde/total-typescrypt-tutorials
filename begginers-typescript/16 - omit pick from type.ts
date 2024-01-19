/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Equal, Expect } from './helpers/type-utils';

type Users = {
    id: string;
    firstName: string;
    lastName: string;
};

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Omit<Users, 'id'>;

// type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
