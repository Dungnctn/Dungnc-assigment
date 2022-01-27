import Footer from "../conponent/footer";
import Header from "../conponent/header";


const Product = {
    render() {
        return /*html*/ `
        <div class="container">
            ${Header.render()}
            <div class="max-w-7xl mx-auto mb-10">
            <ol role="list" class="bg-[#F1F1F1] max-w-2xl mt-10 mx-auto px-4 py-2 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
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
                    Sản phẩm
                    </a>
                </div>
                </li>
            </ol>
            <div class="bg-white">
            <div class="max-w-2xl mx-auto py-5 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            
            <div class="grid grid-cols-4 gap-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            ${data.map(post => /*html*/ `
            
                    <a href="/news/${post.id}" class="group">
                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img src="${post.img}" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75">
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">
                        ${post.title}
                    </h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">
                        ${post.price}
                    </p>
                    </a>
                    `).join("")}
                    <!-- More products... -->
                </div> 
                </div>
            </div>
        </div>
            ${Footer.render()}
        </div>
        
        `
    }

}

export default Product;