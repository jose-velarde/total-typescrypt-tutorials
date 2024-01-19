const somethingDangerous = () => {
    if (Math.random() > 0.5) {
        throw new Error('Oh dear!');
    }
};

try {
    somethingDangerous();
} catch (error) {
    // safe
    if (error instanceof Error) {
        console.log(error.message);
    } else {
      throw error;
    }
    // unsafe
    console.log((error as Error).message);
}
