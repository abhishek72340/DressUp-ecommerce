export const getSortedProducts = (products, sortBy) => {

    if (sortBy === 'SHOES') {
        return products.filter(item => item.type === 'shoes')
    };
    if (sortBy === 'CLOTHING') {
        return products.filter(item => item.type === 'clothing');
    }
    if (sortBy === 'MEN') {
        return products.filter(item => item.categoryName === 'men');
    }
    if (sortBy === 'WOMEN') {
        return products.filter(item => item.categoryName === 'women');
    }
    if (sortBy === 'SHOE') {
        return products.filter(item => item.categoryName === 'shoe');
    }
    if (sortBy === 'L') {
        return products.filter(item => item.size === 'L');
    }
    if (sortBy === 'M') {
        return products.filter(item => item.size === 'M');
    }
    if (sortBy === 'S') {
        return products.filter(item => item.size === 'S');
    }
    if (sortBy === 'US10') {
        return products.filter(item => item.size === 'US10');
    }
    if (sortBy === 'US6') {
        return products.filter(item => item.size === 'US6');
    }
    if (sortBy === 'US7') {
        return products.filter(item => item.size === 'US7');
    }
    if (sortBy === 1) {
        return products.filter(item => item.rating === 1);
    }
    if (sortBy === 2) {
        return products.filter(item => item.rating === 2);
    }
    if (sortBy === 3) {
        return products.filter(item => item.rating === 3);
    }
    if (sortBy === 4) {
        return products.filter(item => item.rating === 4);
    }
    if (sortBy === 5) {
        return products.filter(item => item.rating === 5);
    }
    if (sortBy === 'LOW_TO_HIGH') {
        return [...products].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'HIGH_TO_LOW') {
        return [...products].sort((a, b) => b.price - a.price);
    }
    if (sortBy === 'ALL') {
        return products;
    }

}