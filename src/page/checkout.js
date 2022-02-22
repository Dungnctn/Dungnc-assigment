import Header from "../conponent/header"

const Checkout = {
    render() {
        let cart = [];
        let total = '';
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /*html*/ `
        ${Header.render()}
        <div class="mt-10 max-w-7xl mx-auto">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="relative">
            <dt>
              <h3 class="ml-16 text-3xl leading-6 font-bold text-gray-900">Điền thông tin đặt hàng</h3>
            </dt>
            <div class="mt-10">
                <div class="col-span-6">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Tên người nhận</label>
                    <input type="text" name="" id="check-name" autocomplete="street-address" class="mt-1 block w-full shadow-sm sm:text-sm border-green-800 rounded-md">
                </div>
                <div class="col-span-6 mt-5">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="" id="check-email" autocomplete="street-address" class="mt-1 block w-full shadow-sm sm:text-sm border-green-800 rounded-md">
                </div>
                <div class="col-span-6 mt-5">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Số điện thoại</label>
                    <input type="number" name="" id="check-phone" autocomplete="street-address" class="mt-1 block w-full shadow-sm sm:text-sm border-green-800 rounded-md">
                </div>
                <div class="col-span-6 mt-5">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Địa chỉ</label>
                    <input type="text" name="" id="check-address" autocomplete="street-address" class="mt-1 block w-full shadow-sm sm:text-sm border-green-800 rounded-md">
                </div>
                <div class="col-span-6 mt-5">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Mã giảm giá</label>
                    <input type="text" name="" id="check-codesale" autocomplete="street-address" class="mt-1 block w-full shadow-sm sm:text-sm border-green-800 rounded-md">
                </div>
                
            </div>

        </div>
  
        <div class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <!-- Heroicon name: outline/scale -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Thông tin đơn hàng</p>
            </dt>
                <table class="min-w-full divide-y divide-gray-200 mt-10">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tên sản phẩm
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Số lượng
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Giá
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
                                        <div class="flex-shrink-0 w-20">
                                            <div class="text-sm text-gray-900 w-5">${item.name}</div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900">${item.quantity}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        ${item.price}
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div class="text-sm text-gray-900">${item.price * item.quantity}</div>    
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
                                <tr>
                                    <td>Tổng tiền:</td>
                                </tr>
                                <!-- More people... -->
                                </tbody>
                                </table>
                                <button type="" class="mt-5 bg-green-400 p-3 text-white">Đặt hàng</button>
            </div>
            </dl>
        </div>
        `
    },
    afterRender(){


        Header.afterRender();
    }
}
export default Checkout