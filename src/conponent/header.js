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
                    <div>
                </div>
                <div>
                    
                <div  class="float-right login">
                    <a href="/signin">Đăng Nhập</a> | 
                    <a href="/signup">Đăng Ký</a> 
                </div>
                <div  class="float-right acc hidden">
                        <span id="username">ss</span> | 
                        <button id="logout" class=""><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg></button> 
                    </div>
                </div>
                    
                </div>
            </div>
            ${ Nav.render()}
        </header>
        `
    },

    afterRender() {
        const account = document.querySelector("#username");
        const btnLogout = document.querySelector("#logout");

        const renderUser = JSON.parse(localStorage.getItem('user'));
        if(renderUser != null){
            account.innerHTML = JSON.parse(localStorage.getItem('user')).email;
            
            btnLogout.addEventListener("click", () => {
                localStorage.removeItem("user");
            });
            document.querySelector(".login").classList.add(".hidden");
            document.querySelector(".acc").classList.remove(".hidden");
            document.querySelector(".acc").classList.add(".block");
            
        }
    }
}

export default Header