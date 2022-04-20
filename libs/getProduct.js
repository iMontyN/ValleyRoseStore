async function getProduct(uid){
    const resp = await fetch(`https:firstprpj-default-rtdb.firebaseio.com/products/${uid}.json`)
    const product = await resp.json()
    
    return product
}

export {getProduct}