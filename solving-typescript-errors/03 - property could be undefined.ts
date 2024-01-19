const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

// optional chaining
// logs the string or undefined if it is null
console.log(id?.toUpperCase());

// unsafe non null assertion
// typescript only assertion, it is unsafe it can fail at runtime
console.log(id!.toUpperCase());


// narrowing
// if id exists
// if ( typeof id === "string") {
if (!id) {
    throw new Error('Id not found');
}

if (id) {
    console.log(id.toUpperCase());
}
