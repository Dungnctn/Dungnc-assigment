import { getAll, remove } from "../../api/post";
import NavAdmin from "./navAdmin";


const AdminNew = {
    async render() {
      const {data} = await getAll()
      // gọi tất cả data để duyệt lên table
        return /*html*/ `
      ${NavAdmin.render()}
              <header class="bg-white shadow">
              <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                          <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                  <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      Quản lý bài viết
                    </h2>
                    
                  </div>
                  <div class="mt-5 flex lg:mt-0 lg:ml-4">

                    <span class="sm:ml-3">
                      <a href="/admin/news/add"><button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <!-- Heroicon name: solid/check -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg> Thêm mới
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
              <!-- Replace with your content -->
              <div class="px-4 py-6 sm:px-0">
                  <!-- This example requires Tailwind CSS v2.0+ -->
                  <div class="flex flex-col">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead class="bg-gray-50">
                            <tr>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                STT
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tên 
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ảnh
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Trạng thái
                              </th>
                              <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Edit</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                            ${data.map((post, index) => /*html*/ `
                            <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                              ${index + 1}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10">
                                  <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                                </div>
                                <div class="ml-4">
                                  <div class="text-sm font-medium text-gray-900">
                                    ${post.title}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <img src="${post.img}" alt="" width="50%" class="rounded-3xl">
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="/admin/news/${post.id}/edit" class="text-indigo-600 hover:text-indigo-900">Sửa</a>
                              <button data-id="${post.id}" class="btn inline-block bg-indigo-500 text-white hover:bg-indigo-800 text-sm py-2 px-6 rounded-2xl">Xóa</button>
                            </td>
                          </tr>
                            
                            `).join("")}
                            <!-- More people... -->
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
              <!-- /End replace -->
            </div>
          </main>
        <!-- </div> -->
        `
    },

    afterRender() {
      // lấy tất cả button có class là .btn
      const btns = document.querySelectorAll(".btn");
      // console.log(btns)
      // mỗi 1 element button sẽ gán vào buttonElement
      btns.forEach((buttonElement) => {
        // lấy id button thông qua property(thuộc tính) data-id
        const idButton = buttonElement.dataset.id;
        buttonElement.addEventListener("click", () => {
          // console.log(idButton)
          const confirm = window.confirm("Bạn có muốn xóa?");
          if(confirm){
            remove(idButton).then(() => window.alert("Bạn đã xóa thành công"))
            // remove nhận id button đã lấy được 
          }
        })
      })
    }

}
export default AdminNew;