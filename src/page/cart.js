import Header from "../conponent/header";

const Cart = {
    render() {
        const renderCartList = JSON.parse(localStorage.getItem('cartList'));
        console.log(renderCartList)
        if(localStorage.getItem('cartList') === null){
            return /*html*/ ` ${Header.render()}
                <div class="my-20">
                    <p class="text-center text-2xl font-bold">Chưa có sản phẩm trong giỏ hàng</p>
                </div>
                `
        }else{
            return /*html*/ `
                ${Header.render()}
                <nav aria-label="Breadcrumb">
                <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                  <li>
                    <div class="flex items-center">
                      <a href="/" class="mr-2 text-sm font-medium text-gray-900">
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
                
                <div class="flex flex-col max-w-6xl mx-auto">
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
                            ${ renderCartList.map((item) => /*html*/ `
                                <tr>
                                    <input type="hidden" id="id" name="" value="${item.id}">
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
                                        <input onclick="var result = document.getElementById('quantity'); var qty = result.value; if( !isNaN(qty) &amp; qty > 1 ) result.value--;return false;" type='button' value='-' class=" cursor-pointer h-7 w-14 bg-[#363f4d] text-[#fff] text-xl leading-0"/>
                                        <input id='quantity' min='1' name='quantity' type='text' value='1' class="input-qty h-7 w-14 text-center text-[#7a7a7a]" />
                                        <input onclick="var result = document.getElementById('quantity'); var qty = result.value; if( !isNaN(qty)) result.value++;return false;" type='button' value='+' class=" cursor-pointer h-7 w-14 bg-[#363f4d] text-[#fff] text-xl leading-0"/>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                        ${item.price * document.querySelector('#quantity')}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button type="submit" data-id="${item.id}" class="btn-cart text-indigo-600 hover:text-indigo-900">
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
                                <button type="submit" id="btnUpdate" onclick="btnUpdate()" class="mx-auto float-right rounded-3xl h-14 w-32 text-white bg-green-800 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 float-left ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg><span class="">UPDATE</span>
                                </button>
                                
                        </div>
                        </div>
                    </div>
                </div>
            
            `
        }
        // console.log(renderCartList)
    },

    afterRender() {

        const btns = document.querySelectorAll(".btn-cart");
        const renderCartList = JSON.parse(localStorage.getItem('cartList'));
        
        btns.forEach((btnEle) => {
            const buttonId = btnEle.dataset.id;
            btnEle.addEventListener("click",() => {
                let a = renderCartList.filter(item => item.id == buttonId);
                
                // JSON.stringify(localStorage.removeItem(a));
                // let c = a.map((i) => {
                //     return i.id
                // })
                console.log(a)
            })
        });

        // removeElementCart.addEventListener("click", () => {
        //     const renderCartList = JSON.parse(localStorage.getItem('cartList'));
        //     // console.log(renderCartList.find(item => item.id))
        //     console.log(renderCartList)
        // })

        
    }
}
export default Cart;