const products = [{
        id: "1",
        name: "Bombilla alpaca",
        price: 3400,
        image: "../img/bombilla-alpaca.png",
        idCat: "1"
    },
    {
        id: "2",
        name: "Bombilla bronze",
        price: 4000,
        image: "../img/bombilla-bronze.png",
        idCat: "1"
    },
    {
        id: "3",
        name: "Mate calabaza",
        price: 2300,
        image: "../img/mate-calabaza.png",
        idCat: "2"
    }, {
        id: "4",
        name: "Mate madera",
        price: 3100,
        image: "../img/mate-madera.png",
        idCat: "2"
    },
    {
        id: "5",
        name: "Yerba tradicional",
        price: 1000,
        image: "../img/yerba-tradicional.png",
        idCat: "3"
    },
    {
        id: "6",
        name: "Yerba uruguaya",
        price: 2500,
        image: "../img/yerba-uruguaya.png",
        idCat: "3"
    },
]


export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(products);
    })
}


export const getAProduct = (id) => {
    return new Promise(resolve => {
        const product = products.find(product => product.id === id);
        resolve(product);
    })
}


export const getProductsByCategory = (idCategory) => {
    return new Promise(resolve => {
        const productsByCategory = products.filter(product => product.idCat === idCategory);
        resolve(productsByCategory);
    })
}