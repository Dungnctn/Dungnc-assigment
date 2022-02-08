import { signup } from "../api/user";

const Signup = {
    render() {
        return /*html*/ `
            <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <div>
                        <a href="/">
                            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
                        </a>
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Đăng ký tài khoản
                        </h2>
                    </div>
                    <form class="mt-8 space-y-6" id="form-signup">
                        <input type="hidden" name="remember" value="true">
                        <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="" class="sr-only">Username</label>
                            <input id="user" name="user" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username">
                        </div>
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email">
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu">
                        </div>
                        </div>
                
                        <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                            Ghi nhớ tài khoản
                            </label>
                        </div>
                
                        <div class="text-sm">
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                <ion-icon name="logo-github" class="text-black-600 text-2xl"></ion-icon>
                            </a>
                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                            <ion-icon name="logo-google" class="text-black-600 text-2xl"></ion-icon>
                            </a>
                        </div>
                        </div>
                
                        <div>
                        
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <!-- Heroicon name: solid/lock-closed -->
                            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                            </span>
                            Đăng Ký
                        </button>
                        
                    </form>
                    <div class="bg-green-400 alert succes hidden text-[#fff] min-h-10">
                    <a href="">Đăng nhập</a>
                    </div>
                    <div class="bg-red-500 alert error hidden text-[#fff] min-h-10"></div>
                </div>
            </div>
        
        `
    },

    afterRender() {
        const formSignup = document.querySelector("#form-signup");
        formSignup.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                await signup({
                    username: document.querySelector("#user").value,
                    email: document.querySelector("#email-address").value,
                    password: document.querySelector("#password").value
                })
                // const alertSignup = alert("Đã đăng ký thành công!");
                // if(alertSignup)  window.location = "/"
                document.querySelector(".succes").classList.add("block");
                document.querySelector(".succes").classList.remove("hidden");
                document.querySelector(".succes").innerHTML = "Đăng ký thành công!!" + `<a href="/signin" class="text-[#0f54d4]">Đăng nhập</a>`;
                
            } catch (error) {
                document.querySelector(".error").classList.add("block");
                document.querySelector(".error").classList.remove("hidden");
                document.querySelector(".error").innerHTML = "Tài khoản đã tồn tại!!";
                // const alertSignup = alert("Tài khoản đã tồn tại!");
                // if(alertSignup) window.location = "/signup"
            }
        });

    }

}
export default Signup