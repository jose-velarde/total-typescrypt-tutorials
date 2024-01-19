type Dog = {
    bark: boolean;
    purr?: boolean;
};

const cat: Dog | { purr: boolean } = { purr: true };

// unsafe
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dog2 = cat as unknown as Dog;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dog = cat as Dog;
