let cart = [];
if(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"));
}

// toast callback hiển thị khi add sp thành công vào giỏ hàng 
export const addToCart = (newProduct, toast) => {
    const existProduct = cart.find(item => item.id === newProduct.id);
    if(!existProduct){
        cart.push(newProduct);
    }else{
        existProduct.quantity += newProduct.quantity;
        console.log(existProduct.quantity);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    toast();
}

export const increaseQty = (id, toast) => {
    // tìm id của element trong cart xem có trùng vs id khi button ko

    cart.find(item => item.id === Number(id)).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    toast();
}

export const decreaseQty = (id, toast) => {
    // console.log(id);
    const currentCart = cart.find(item => item.id === Number(id));
    // console.log(currentCart);
    currentCart.quantity--;
    if(currentCart.quantity < 1){
        const confirm = window.confirm("Bạn có muốn xóa không?");
        if(confirm){
            cart = cart.filter(item => item.id !== Number(id));
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toast();
}

export const removeProductCart = (id, toast) => {
    const confirm = window.confirm("Bạn có muốn xóa sản phẩm?");
    if(confirm){
        cart = cart.filter(item => item.id !== Number(id));
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    toast();
}
