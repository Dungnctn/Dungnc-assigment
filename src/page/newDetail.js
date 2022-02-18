import { get } from "../api/products";
import Header from "../conponent/header";
import Footer from "../conponent/footer";
import { $ } from "../selector";
import { addToCart } from "./addCart";
import toastr from "toastr";
import "toastr/build/toastr.min.css"

const NewDetail = {
    async render(id) {
        const { data } = await get(id);
        // detructoring data và cho API nhận ${id} để trỏ đến object có id == id tìm kiếm 
        return /*html*/ `
          ${Header.render()}
        <div class="bg-white">
        <div class="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
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

          <!-- Image gallery -->
          <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img src="${data.imageIntro}" alt="Two each of gray, white, and black shirts laying flat." class="w-full h-full object-center object-cover">
            </div>
            <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img src="${data.imageIntro}" alt="Model wearing plain black basic tee." id="img-cart" class=" w-full h-full object-center object-cover">
              </div>
              <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img src="${data.imageIntro}" alt="Model wearing plain gray basic tee." class="w-full h-full object-center object-cover">
              </div>
            </div>
            <input type="number" id="inputQty" name="" value="1" class="hidden">
            <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
              <img src="${data.imageIntro}" alt="Model wearing plain white basic tee." class="w-full h-full object-center object-cover">
            </div>
          </div>

          <!-- Product info -->
          <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl" id="title-cart">
                ${data.name}
              </h1>
            </div>

            <!-- Options -->
            <div class="mt-4 lg:mt-0 lg:row-span-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl text-gray-900">${data.sale}</p>

              <!-- Reviews -->
              <div class="mt-6">
                <h3 class="sr-only">Reviews</h3>
                <div class="flex items-center">
                  <div class="flex items-center">
                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <!-- Heroicon name: solid/star -->
                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <!-- Heroicon name: solid/star -->
                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <!-- Heroicon name: solid/star -->
                    <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <!-- Heroicon name: solid/star -->
                    <svg class="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p class="sr-only">4 out of 5 stars</p>
                  <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 lượt xem</a>
                </div>
              </div>

              
                <!-- Colors -->
                <div>
                  <h3 class="text-sm text-gray-900 font-medium">Màu</h3>

                  <fieldset class="mt-4">
                    <legend class="sr-only">
                      Choose a color
                    </legend>
                    <div class="flex items-center space-x-3">
                      <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                      <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label">
                        <p id="color-choice-0-label" class="sr-only">
                          White
                        </p>
                        <span aria-hidden="true" class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                      </label>

                      <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                      <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                        <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label">
                        <p id="color-choice-1-label" class="sr-only">
                          Gray
                        </p>
                        <span aria-hidden="true" class="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                      </label>

                      <!--
                        Active and Checked: "ring ring-offset-1"
                        Not Active and Checked: "ring-2"
                      -->
                      <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                        <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-2-label">
                        <p id="color-choice-2-label" class="sr-only">
                          Black
                        </p>
                        <span aria-hidden="true" class="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                      </label>
                    </div>
                  </fieldset>
                </div>

                <!-- Sizes -->
                <div class="mt-10">
                  <div class="flex items-center justify-between">
                    <h3 class="text-sm text-gray-900 font-medium">Size</h3>
                    <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Kích thước</a>
                  </div>

                  <fieldset class="mt-4">
                    <legend class="sr-only">
                      Choose a size
                    </legend>
                    <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">

                      <!-- Active: "ring-2 ring-indigo-500" -->
                      ${ data.size.map((eleSize) => /*html*/ `
                          <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                          <input type="radio" name="size-choice" id="size" value="${eleSize}" class="sr-only" aria-labelledby="size-choice-1-label">
                          <p id="size-choice-1-label">
                            ${eleSize}
                          </p>

                          <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                          -->
                          <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
                        </label>
                      `).join('')}

                      <!-- Active: "ring-2 ring-indigo-500" -->
                      
                    </div>
                  </fieldset>
                </div>

                <button type="submit" class="btnAddToCart mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ</button>
              
            </div>

            <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <!-- Description and details -->
              <div>
                <h3 class="sr-only">Description</h3>

                <div class="space-y-6">
                  <p class="text-base text-gray-900">${data.content}</p>
                </div>
              </div>

              <div class="mt-10">
                <h3 class="text-sm font-medium text-gray-900">Nổi bật</h3>

                <div class="mt-4">
                  <ul role="list" class="pl-4 list-disc text-sm space-y-2">
                    <li class="text-gray-400"><span class="text-gray-600">Cắt và may thủ công tại địa phương</span></li>

                    <li class="text-gray-400"><span class="text-gray-600">Được nhuộm bằng các màu độc quyền của chúng tôi</span></li>

                    <li class="text-gray-400"><span class="text-gray-600">Rửa trước &amp; thu nhỏ trước</span></li>

                    <li class="text-gray-400"><span class="text-gray-600">100% cotton siêu mềm</span></li>
                  </ul>
                </div>
              </div>

              <div class="mt-10">
                <h2 class="text-sm font-medium text-gray-900">Thông tin chi tiết</h2>

                <div class="mt-4 space-y-6">
                  <p class="text-sm text-gray-600">${data.introduce}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        ${Footer.render()}
        `
    },

    async afterRender(id) {
      $(".btnAddToCart").addEventListener('click',async (e) => {
        e.preventDefault()
        const {data} = await get(id);
        // {...data, quantity: 1}: là 1 hàm, tiếp đến là callback khi thêm sp thành công
        addToCart({...data, quantity: +$("#inputQty").value}, () => {
          toastr.success("Thêm sản phẩm vào giỏ hàng");
        });
      })
      
      // const { data } = await get(id);
      // // nhận id từ file mainjs
      // const formSubmit = document.querySelector("#form-add");
      // var elems = document.getElementsByName('color-choice');
      // var length = elems.length;
      // formSubmit.addEventListener("submit", (e) => {
      //   e.preventDefault()

        //ngăn thuộc tính submit tự động 
      //   const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
      //   // sử dụng 1 mảng để thêm obj tránh bị ghi đè, 
      //   // chuyển đổi về dạng js để đổ data ra browser vì khi nhận từ web server nó luôn là dạng string
      //   // console.log("abc")
      //   let cartElement = {
      //       id: id,
      //       name: data.name,
      //       imageIntro: data.imageIntro,
      //       price: data.price,
      //       size: document.querySelector("#size").value
      //   };
      //   cartList.push(cartElement);
      //   // thêm element vào aray cartList
      //   localStorage.setItem("cartList", JSON.stringify(cartList))
      //   // Json.stringify chuyển về dạng string
      // // console.log(cartElement)
      // // window.location.pathname = "/cart"
      // })

    }
}
export default NewDetail;