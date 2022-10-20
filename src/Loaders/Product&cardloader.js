import { getStoredCart } from "../utilities/fakedb";

export const productandcardloader = async ()=>{
    //get products
    const productdata = await fetch('products.json');
    const products = await productdata.json();

    const saveCart = getStoredCart();
    const previouscart = [];
    // console.log(products)

    for (const id in saveCart){
       const addedproducts = products.find(product => product.id === id);
       if(addedproducts){
        const quantity = saveCart[id];
       addedproducts.quantity = quantity;
       previouscart.push(addedproducts);
       }
    }
    return {products ,previouscart} ;

}