// const productPrices: Record<string, number> = {
//     Apple: 1.2,
//     Banana: 0.5,
//     Orange: 0.8,
// };

const productPrices = {
    Apple: 1.2,
    Banana: 0.5,
    Orange: 0.8,
};

const getPrice = (productName: keyof typeof productPrices) => {
    const index = productName as keyof typeof productPrices;

    return productPrices[index];
};

getPrice('Banana');
