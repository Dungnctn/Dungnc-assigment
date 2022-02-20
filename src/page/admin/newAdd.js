import axios from "axios";
import { add } from "../../api/products";
import NavAdmin from "./navAdmin";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { reRender } from "../../reRender";
import AdminNew from "./adminNew";
import $ from 'jquery';
import validate from 'jquery-validation';

const AdminAddNew = {
  // render() hiển thị giao diện ra browser
    render() {
        return /*html*/ `
      ${NavAdmin.render()}
              <header class="bg-white shadow">
              <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                          <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                  <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      Thêm mới bài viết
                    </h2>
                    
                  </div>
                  <div class="mt-5 flex lg:mt-0 lg:ml-4">

                    <span class="sm:ml-3">
                      <a href="/admin/news"><button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <!-- Heroicon name: solid/check -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>Quay lại
                      </button></a>
                    </span>

                    <!-- Dropdown -->
                    <span class="ml-3 relative sm:hidden">
                      <button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="mobile-menu-button" aria-expanded="false" aria-haspopup="true">
                        More
                        <!-- Heroicon name: solid/chevron-down -->
                        <svg class="-mr-1 ml-2 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                      </button>
                      <div class="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button" tabindex="-1">
                        <!-- Active: "bg-gray-100", Not Active: "" -->
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-0">Edit</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="mobile-menu-item-1">View</a>
                      </div>
                    </span>
                  </div>
                </div>

              </div>
            </header>
            <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">Thêm mới sản phẩm</h3>
                  <p class="mt-1 text-sm text-gray-600">
                    Điền thông tin sản phẩm
                  </p>
                </div>
              </div>
              <div class="md:col-span-2">
                <form id="form-add">
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                        <input type="text" name="" id="title-post" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>
          
                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label for="" class="block text-sm font-medium text-gray-700">Hình ảnh</label>
                          <input type="file" name="" id="img-post" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Giá niêm yết</label>
                        <input type="text" name="" id="price-post"  autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>
          
                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label for="" class="block text-sm font-medium text-gray-700">Giá khuyến mãi</label>
                          <input type="text" name="" id="sale-post" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>
          
                        <div class="col-span-6">
                          <label for="street-address" class="block text-sm font-medium text-gray-700">Chi tiết sản phẩm</label>
                          <input type="text" name="" id="desc-post" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>
          
                        
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
            </div>
          </main>
        <!-- </div> -->
        `
    },
    //afterRender() xử lý sự kiện hay logic xử lý
    afterRender(){
      // gán id form vào biến formAdd
      const formAdd = document.querySelector("#form-add");
      const imgPost = document.querySelector("#img-post");
      // sdung asyn await 
      imgPost.addEventListener("change", async (e) => {
        const file = e.target.files[0];
        const CLOUDINARY = 'https://api.cloudinary.com/v1_1/djh2fjlic/image/upload';
        // djh2fjlic: Cloud Name (Dashboard Cloudinary)

        const formData = new FormData();
        
        // append: chèn tập hợp các đối tượng
        formData.append('file', file);
        formData.append('upload_preset', "gh24ptqi");
        // cloudinary -> setting -> upload -> add upload preset -> unsigned -> name preset
        // upload file và 1 đoạn chuỗi tạo ở cloudinary 

        // call api cloudinary
        const reponse = await axios.post(CLOUDINARY, formData, {
          headers: {
            "Content-Type": "application/form-data"
          }
        });
        // bất cứ khi nào post file thì phải sdung x-www-formendcoded hoặc form-data 
        // gtri 1: đường link nhận, gtri 2: data muốn đẩy lên, gtri 3: kiểu dlieu đẩy lên là gì (trong config)
        
        formAdd.addEventListener("submit",(e) => {
          // preventDefault() ko cho xử lý mặc định hay là dừng mặc định
          e.preventDefault();
          // console.log("submites");
          add({
            name: document.querySelector("#title-post").value,
            imageIntro: reponse.data.url, //reponse là obj trỏ đến data lấy url
            price: document.querySelector("#price-post").value,
            sale: document.querySelector("#sale-post").value,
            content: document.querySelector("#desc-post").value,
            size: [ "XS",
                    "S",
                    "M",
                    "M-L"
                  ],
            classify: "female"
          });
          // console.log(add)
          toastr.success("Bạn đã thêm sản phẩm");
          reRender(AdminNew, "#app")
          window.location.href="/#/admin/news";
        });
        
        // console.log(reponse.data.url)
      });

      //event khi ấn submit thì thực thi logic
      
    }
}
export default AdminAddNew;