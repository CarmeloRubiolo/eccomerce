 const getProducts = (setProducts) => {
    fetch('https://fakestoreapi.com/products')
   .then(response => response.json())
   .then(res => setProducts(res))
 }

 export {getProducts}