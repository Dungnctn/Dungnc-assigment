const Footer = {
    render() {
        return /*html*/ `
        <div class=" grid grid-cols-4 gap-2 max-w-7xl mx-auto mb-8">
        <div class="mx-auto font-bold">
          <img src="https://www.bdresearch.org/wp-content/uploads/2019/10/versace-logo.jpg" alt="" class="w-36">
          <a href="">Giới thiệu</a><br>
          <a href="">Điều khoản sử dụng</a><br>
          <a href="">Công nghệ sản xuất</a>
        </div>
        <div class="mt-10 mx-auto font-bold">
          <h2 class="font-bold text-2xl mb-8">Tài khoản</h2>
          <a href="" >Đăng nhập/đăng ký</a><br>
          <a href="" >Lịch sử mua hàng</a><br>
          <a href="" >Danh sách địa chỉ</a>
        </div>
        <div class="mt-10 mx-auto font-bold">
          <h2 class="text-2xl mb-8">Hỗ trợ khách hàng</h2>
          <a href="" >Chính sách thành viên</a><br>
          <a href="" >Chính sách đổi trả</a><br>
          <a href="" >Chính sách bảo hành</a><br>
        </div>
        <div class="mt-10 mx-auto">
          <h2 class="font-bold text-2xl mb-8">Tải App</h2>
          <a href="" ><img src="https://theme.hstatic.net/1000184601/1000766836/14/app-store.svg?v=1223" alt=""></a>
          <a href="" ><img src="https://theme.hstatic.net/1000184601/1000766836/14/google-play.svg?v=1223" alt=""></a>
        </div>
    </div>
        `
    }
}
export default Footer;