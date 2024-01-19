type UserProfile = {
    id: string;

    preferences: {
        // theme: 'light' | 'dark' | 'blue';
        theme: string;
    };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const user: UserProfile = {
    id: '123',
    preferences: {
        theme: 'blue',
    },
};

// assignability means can I pass this into this slot?