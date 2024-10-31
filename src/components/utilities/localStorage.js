

const setLocalStorage = (cart) => {
    const cartString = JSON.stringify(cart)
    localStorage.setItem('cart', cartString)
}


const getPreviousCart = () => {
    const getCart = localStorage.getItem('cart');
    if (getCart) {
        const cartParse = JSON.parse(getCart);
        return cartParse;
    }
    return []
}

const  removeFromLS =(id)=>{
    const cart = getPreviousCart()
    const remainingCart = cart.filter(idx=>idx !==id)
    setLocalStorage(remainingCart)
}


const addToLs = (id) => {
    const cart = getPreviousCart();
    cart.push(id)
    setLocalStorage(cart)
}

export {addToLs,removeFromLS}