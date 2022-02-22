import Footer from "../conponent/footer";
import Header from "../conponent/header";


const Blog = {
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
                        Blog
                        </a>
                    </div>
                    </li>
                </ol>
                <div class="ml-5">
                    <h2 class="text-4xl text-black-400 mt-3 hover:text-blue-500 cursor-pointer">Áo phông Cotton Supima: Phong cách mới của đàn ông hiện đại</h2>
                    <div class="mt-10">
                        <p class="max-w-5xl">Áo phông nam mang đến sự thoải mái tối đa cho mọi nam giới. Bất kì nam giới nào ở đồ tuổi nào đi nữa đều sở hữu một chiếc áo phông trong tủ đồ vì sự tiện lợi và thoải mái mà nó đem lại. Một khi bạn bắt đầu mặc áo phông, bạn sẽ không thể quay lại. Vì vậy, để làm cho trải nghiệm này tốt hơn, đây là áo thun cotton Supima.</p>
                    </div>
                    <div class="my-3">
                        <p class="max-w-5xl">Áo phông Supima là lối sống mới cho những người đàn ông thích sự nhẹ nhàng. Nhưng áo thun Supima chính xác là gì hay cùng ONOFF tìm hiểu nhé!</p>
                    </div>
                    <h5 class="text-3xl">Cotton Supima là gì?</h5>
                    <div class="max-w-5xl mt-4">
                        <p class="">Cotton Supima là một loại vải bông được tạo ra từ các sợi bông dài, không giống như các chất liệu bông khác được làm bằng các sợi ngắn. Các sợi bông cực dài ở Pima dài hơn 34 mm và điều đó làm cho vải sở hữu đặc tính mềm và nhẹ. Vì vậy, áo thun Pima rất thoải mái và nhẹ nhàng khi mặc.
                        </p>
                        <p class="mt-3">
                        Bông Pima có nguồn gốc từ một loài thực vật có tên là Gossypium Barbadense chỉ được trồng ở các vùng nhiệt đới. Những cây này rất dễ bị hư hại do sương giá. Gossypium Barba rậm rạp là một loại cây ngắn có hoa màu vàng tươi. Những sợi bông dài được làm từ hoa của loài cây này.
                        </p>
                        <p class="mt-3">
                        Supima là chất lượng cao cấp của Pima, siêu mềm và nhẹ và được ứng dụng nhiều trong các sản phẩm thời trang cao cấp.</p>
                    </div>
                    <h5 class="text-3xl my-3">Tại sao nên mua áo thun cotton Supima?</h5>
                    <p class="max-w-5xl">Nếu bạn vẫn chưa mặc áo thun Supima thì bạn phải thử nó. Dưới đây là một số yếu tố tại sao bạn sẽ yêu thích áo thun nam Supima cotton khi bạn bắt đầu mặc chúng:</p>
                    <h6 class="text-xl my-3">Chất liệu</h6>
                    <p class="max-w-5xl">Chất liệu của áo thun nam Supima cotton là lý do chính khiến nó được ưa chuộng đến vậy. Chất liệu mềm và nhẹ giúp bạn dễ dàng mang theo trong mọi thời tiết. Nó cho phép làn da luôn khô thoáng bằng việc hấp thụ mồ hôi một cách hiệu quả, kể cả trong thời tiết oi bức. Những chiếc áo thun này có thể mặc cả ngày và rất thích hợp để mặc để đi làm, đi học, hay bất kì những trường hợp nào.</p>
                    <h6 class="text-xl my-3">Độ bền cao</h6>
                    <p class="max-w-5xl">Một chiếc áo thun cotton Supima không dễ bị rách vì độ bền cao. Bạn có thể giặt những chiếc áo thun này trong máy giặt mà không phải lo lắng về vấn đề biến dạng. Nó không bị giãn ra sau vài lần giặt. Đối với áo thun Supima, độ vừa vặn của bạn sẽ không thay đổi sau một số ngày. Vì vậy, bạn không cần phải xử lý vật liệu này một cách cẩn thận. Đối với các loại áo thun cotton khác, sau một thời gian sẽ xuất hiện các lỗ nhỏ. Điều này không xảy ra với áo thun Supima.</p>
                    <h6 class="text-xl my-3">Bền màu</h6>
                    <p class="max-w-5xl">Hầu hết thời gian chúng ta thấy rằng áo phông bị mất màu sau một vài lần giặt. Nhưng với áo thun cotton Supima bạn không phải lo lắng về điều đó. Màu sắc của những chiếc áo thun này được giữ lại lâu hơn. Vì vậy, bạn có thể giặt nó bằng chất tẩy rửa hàng ngày và nó sẽ luôn mới trong một thời gian dài.</p>
                    <h6 class="text-xl my-3">Không bị vón cục hoặc xù lông</h6>
                    <p class="max-w-5xl">Hầu hết các loại vải cotton đều có lông tơ hoặc vón cục chỉ sau một lần giặt. Xù lông hoặc vón cục là những quả bóng nhỏ trên quần áo xuất hiện ở phía trên. Điều này xảy ra khi các sợi bông ngắn được sử dụng để làm sợi. Rỉ vải làm cho quần áo không sử dụng được sau một thời gian. Nhưng với áo thun Supima, bạn không phải lo lắng về vấn đề này nữa. Vì vải Supima được làm từ sợi bông dài hơn nên áo phông của bạn không xuất hiện xơ vải.</p>
                    <h6 class="text-xl my-3">Dễ giặt</h6>
                    <p class="max-w-5xl">Là vải có độ bền cao nên dễ bảo quản được lâu hơn. Vải có thể được giặt thường xuyên bằng chất tẩy rửa. Bạn có thể giặt trong máy giặt và sấy khô. Nó cũng có khả năng chống lại ánh sáng mặt trời nên việc đem ra ngoài nắng để phơi khô sẽ không làm hại vải.</p>
                </div>
            </div>
            ${Footer.render()}
        `
    }
}
export default Blog;