const { ref } = Vue;

export const ProductsList = {
    template: `
        <div>jfjfj</div>
    `,
    setup () {
        const products = [];
        
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(function (data) {
            products.value = data.products;
        });

        return {
            products
        }
    }
};
