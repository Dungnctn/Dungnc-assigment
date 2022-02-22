import Footer from "../conponent/footer";
import Header from "../conponent/header";

const Introduct = {
    render() {
        return /*html*/ `
        ${Header.render()}
        <div class="max-w-7xl mx-auto mb-20">
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
                    Giới thiệu
                    </a>
                </div>
                </li>
            </ol>

            <div class="my-20">
                <h2 class="text-3xl font-semibold">Giới thiệu</h2>
                <div class="grid grid-cols-2 gap-4 my-10">
                    <div>
                        <img src="https://oldsailor.com.vn/vnt_upload/about/ab1.jpg" alt="">
                    </div>
                    <div class="mt-10 max-w-xl">
                        <h2 class="text-2xl">HỆ THỐNG CỬA HÀNG</h2>
                        <hr class="w-12 my-2 text-black-800">
                        <p class=""><strong>Store 1</strong>: L1-20 Tầng 2 TTTM Sense City – Tòa Nhà Giga Mall, 240-242 Phạm Văn Đồng, Hiệp Bình Chánh, Quận Thủ Đức.</p>
                        <p class=""><strong>Store 2</strong>: 163 Lê Văn Chí, Phường Linh Trung, Thủ Đức.</p>
                        <p class=""><strong>Store 3</strong>: Đường Lạc Trị, Ngã tư gạch Thị trấn Phúc Thọ, Huyện Phúc Thọ, Thành Phố Hà Nôi</p>
                        <p class=""><strong>Store 4</strong>: 184 Nguyễn Ảnh Thủ, Phường Hiệp Thành, Quận 12.</p>
                        <p class=""><strong>Store 5</strong>: L1-08 Vincom Plaza, 50 Lê Văn Việt, Quận 9</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 my-10">
                    <div class="mt-20 max-w-xl mx-auto">
                        <h2 class="text-2xl">IT’S OK TO CHANGE YOUR MIND!</h2>
                        <hr class="w-12 my-2 ">
                        <p class="">
                            Khi tham gia mua sắm trực tuyến tại The BS, bạn không phải lo lắng về sản phẩm của chúng tôi vì nếu không hài lòng về mẫu mã, chất lượng hay đơn giản là bạn ở thời điểm nhận hàng bạn không còn thích sản phẩm đó nữa, The BS chấp nhận đổi trả hàng trong vòng 14 ngày kể từ ngày xuất hoá đơn bán hàng.
                        </p>
                    </div>
                    <div class="mx-auto">
                        <img src="https://oldsailor.com.vn/vnt_upload/about/ab4.jpg" alt="">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 my-20">
                    <div class="">
                        <img src="https://oldsailor.com.vn/vnt_upload/about/ab2.jpg" alt="">
                    </div>
                    <div class="mt-20 max-w-xl mx-auto">
                        <h2 class="text-2xl">THỜI TRANG NAM</h2>
                        <hr class="w-12 my-2 ">
                        <p>
                        Bụi bặm, mạnh mẽ, hay chỉn chu và lịch lãm. The BS đều có những trang phục khẳng định phong cách nam tính của bạn. Đặc biệt chúng tôi luôn cập nhật những dòng sản phảm BIGSIZE với xu hướng thời trang mới nhất.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        ${Footer.render()}
        
        
        `
    }
}
export default Introduct;