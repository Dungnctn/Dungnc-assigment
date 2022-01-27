import { getAll } from "../api/post";
const New = {
    async render() {
        // detructoring: lấy thuộc tính làm tên biến trong object
        const { data } = await getAll();
        // console.log(data)
        return /*html*/ `
            <div class="bg-white">
            <div class="max-w-2xl mx-auto py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="grid grid-cols-4 gap-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                ${data.map((post) => /*html*/ `

                        <a href="/news/${post.id}" class="group">
                            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                <img src="${post.img}" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
                            </div>
                            <h3 class="mt-4 text-sm text-gray-700">
                                ${post.title}
                            </h3>
                            
                        </a>
                        `).join("")}
                    <!-- More products... -->
                </div> 
                </div>
            </div>
            
        `
    }
}
export default New;