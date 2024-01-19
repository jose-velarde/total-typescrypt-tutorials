/* eslint-disable @typescript-eslint/no-unused-vars */
// import { Equal, Expect } from './helpers/type-utils';

/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

type Identification = {
    id: string;
};
type User = {
    firstName: string;
    lastName: string;
} & Identification;

type Post = {
    id: string;
    title: string;
    body: string;
} & Identification;

type Comments = {
    id: string;
    comment: string;
} & Identification;

// type tests = [
//     Expect<Equal<User, { id: string; firstName: string; lastName: string }>>,
//     Expect<Equal<Post, { id: string; title: string; body: string }>>,
//     Expect<Equal<Comment, { id: string; comment: string }>>,
// ];
