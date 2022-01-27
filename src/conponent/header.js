import Nav from "./nav"

const Header = {
    render() {
        return /*html*/ `
        <header class="">
            <div class="bg-[#363F4D] py-4">
                <div class="max-w-7xl grid grid-cols-3 gap-2 mx-auto text-white font-bold">
                    <div class="cursor-pointer">
                        <a href=""><i class="ri-phone-line"></i> + 0865 9989 31</a> | 
                        <a href=""><i class="ri-mail-line"></i> Dungnc@gmail.com</a>
                    </div>
                    <div></div>
                    <div>
                        <div  class="float-right">
                        <a href="/signin">Đăng Nhập</a> | 
                        <a href="/signup">Đăng Ký</a> 
                        </div>
                    </div>
                </div>
            </div>
            ${ Nav.render()}
        </header>
        `
    }
}

export default Header