import toastr from "toastr";
import "toastr/build/toastr.min.css"
import { reRender } from "../reRender";
import Nav from "./nav"

const Header = {
    render() {
        return /*html*/ `
        <header class="">
            <div class="bg-[#363F4D] py-4">
                <div class="max-w-7xl grid grid-cols-3 gap-2 mx-auto text-white font-bold">
                    <div class="cursor-pointer">
                        <a href="#"><i class="ri-phone-line"></i> + 0865 9989 31</a> | 
                        <a href="#"><i class="ri-mail-line"></i> Dungnc@gmail.com</a>
                    </div>
                    <div>
                        
                        <input type="text" id="text-search" name="" value="" class="caret-blue-500 text-black">
                        <button type="button" id="btn-search">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>  
                        </button> 
                    </div>
                    
                <div>
                
                    
                <div  class="float-right login">
                    <a href="/#/signin">Đăng Nhập</a> | 
                    <a href="/#/signup">Đăng Ký</a> 
                </div>
                <div  class="float-right acc hidden">
                        <span id="username"></span> | 
                        <button id="logout" class="btn-logout" title="Đăng xuất"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        if(renderUser){
            document.querySelector(".login").classList.add("hidden");
            document.querySelector(".acc").classList.remove("hidden");

            account.innerHTML = JSON.parse(localStorage.getItem('user')).email;
            // console.log(renderUser);
            
            btnLogout.addEventListener("click", (e) => {
                localStorage.removeItem("user");
                toastr.success("Bạn đã đăng xuất thành công")
                reRender(Header, "#header");
            })            
            
        }
    },
    afterRender() {
        const btnSearch = document.querySelector("#btn-search");
        btnSearch.addEventListener("click", (e) => {
            e.preventDefault();
            const textVal = document.querySelector("#text-search").value;
            // console.log(textVal);
            window.location.href = `/#/renderSearch/${textVal}`;
        }) 
    }
}

export default Header