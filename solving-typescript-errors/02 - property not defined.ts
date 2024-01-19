type User2 = { name: string; age?: number };

// const user2: Record<string, string | number> = {
//     name: 'Matt',
// };
const user2: User2 = {
    name: 'Matt',
};

// indexing age into user2
user2.age = 24;
