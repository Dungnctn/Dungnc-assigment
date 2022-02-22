import Header from "../conponent/header"
import Footer from "../conponent/footer"

const Contact = {
    render() {
        return /*html*/ `
        ${Header.render()}
        
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
                        Liên hệ
                        </a>
                    </div>
                    </li>
                </ol>   
 
            <div class="md:grid md:grid-cols-3 md:gap-6 ml-20 mr-20">
                <div class="md:col-span-1 mt-20">
                <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-2xl text-gray-900">VERSACE</h3>
                    <p class="mt-1 text-sm text-gray-600">
                    Đường lạc trị, Ngã tư gạch Thị Trấn, H. Phúc Thọ - TP.HN
                    </p>
                    <p class="mt-1 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>Dungnc@gmail.com.vn
                    </p>
                </div>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="first-name" class="block text-sm font-medium text-gray-700">Họ tên</label>
                                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="last-name" class="block text-sm font-medium text-gray-700">Số điện thoại</label>
                                <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-4">
                                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                                <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6">
                                <label for="street-address" class="block text-sm font-medium text-gray-700">Nội dung</label>
                                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="h-10 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label for="city" class="block text-sm font-medium text-gray-700">Mã bảo vệ</label>
                                <input type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <img src="https://oldsailor.com.vn/includes/captcha.php?w=100&h=40&size=25&nocache=6231" alt="">  
                            </div>

                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Gửi
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
            

            <div class="max-w-7xl mx-auto mt-20 mb-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.556344728751!2d105.54303296747437!3d21.10476800090737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313458f4dcc5cae3%3A0xe329010b3c8cb7de!2zQ8O0bmcgQW4gVGjhu4sgVHLhuqVuIFBow7pjIFRo4buN!5e0!3m2!1svi!2s!4v1642739766054!5m2!1svi!2s" width="1300" height="550" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        
            ${Footer.render()}
        `
    }
}
export default Contact;