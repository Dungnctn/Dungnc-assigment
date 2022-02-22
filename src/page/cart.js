import Header from "../conponent/header";
import { reRender } from "../reRender";
import { $ } from "../selector";
import { decreaseQty, increaseQty, removeProductCart } from "./addCart";
import toastr from "toastr";
import "toastr/build/toastr.min.css"

const CartPage = {
    render() {
        let cart = [];
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        // console.log(renderCartList)
        if(localStorage.getItem("cart") === null){
            return /*html*/ ` ${Header.render()}
                <div class="my-20">
                    <p class="text-center text-2xl font-bold">Chưa có sản phẩm trong giỏ hàng</p>
                </div>
                `
        }else{
            return /*html*/ `
            ${Header.render()}
                <nav aria-label="Breadcrumb">
                <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center mt-10 space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                  <li>
                    <div class="flex items-center">
                      <a href="/#/" class="mr-2 text-sm font-medium text-gray-900">
                        Trang chủ
                      </a>
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>
    
                  <li>
                    <div class="flex items-center">
                      <a href="#" class="mr-2 text-sm font-medium text-gray-900">
                        Chi tiết sản phẩm
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>
                
                <div class="flex flex-col max-w-6xl mx-auto mt-10">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Hình ảnh
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tên sản phẩm
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Giá
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Số lượng
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Thành tiền
                                </th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Xóa</span>
                                </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                            ${cart.map(item => /*html*/ `
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="flex items-center">
                                        <div class="flex-shrink-0 h-20 w-20">
                                            <img class="h-20 w-20 rounded-full" src="${item.imageIntro}" alt="">
                                        </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${item.name}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        ${item.price}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button data-id="${item.id}" class="btn btn-decrease inline-block p-3 bg-red-500 text-white">-</button>
                                        <input type="number" name="" value="${item.quantity}" class="border border-gray-400 p-3" min="0">    
                                        <button data-id="${item.id}" class="btn btn-increase inline-block p-3 bg-green-500 text-white">+</button>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                        ${item.price * item.quantity}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button type="submit" data-id="${item.id}" class="btn text-indigo-600 hover:text-indigo-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                `).join('')}
                                <!-- More people... -->
                                </tbody>
                                </table>
                                
                                </div>
                            <button type="button" id="checkout" class="bg-green-500 text-white mt-10 p-6 rounded-3xl ">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
            
            `
        }
        // console.log(renderCartList)
    },

    afterRender() {
        const btnCheckout = document.querySelector("#checkout");
        $(".btn").forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener("click", () => {
                if(btn.classList.contains("btn-increase")){
                    // console.log(id);
                    increaseQty(id, () => reRender(CartPage, "#app"));
                    // increaseQty(id, reRender(CartPage, "#app"));
                    // increaseQty(id)
                }else if(btn.classList.contains("btn-decrease")){
                    // console.log(id);
                    decreaseQty(id, () => reRender(CartPage, "#app"));
                }else{
                    removeProductCart(id, () => reRender(CartPage, "#app"));
                    toastr.success("Bạn đã xóa thành công");
                }
            })
        })

        btnCheckout.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = '/#/checkout';
        })
        Header.afterRender()
        
    }
}
export default CartPage;