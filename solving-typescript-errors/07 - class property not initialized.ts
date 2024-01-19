// eslint-disable-next-line @typescript-eslint/no-unused-vars
class User3 {
    // make it optional
    private usernames?: string;
    // class property initializer
    private username: string = 'asdsad';

    // constructor runs after the initializer
    constructor() {
        this.username = '';
    }
}
