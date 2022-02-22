import Navigo from "navigo";
import AdminCate from "./page/admin/adminCate";
import AdminNew from "./page/admin/adminNew";
import AdminCateAdd from "./page/admin/cateAdd";
import AdminEditCate from "./page/admin/cateEdit";
import Dashboard from "./page/admin/dashboard";
import AdminAddNew from "./page/admin/newAdd";
import AdminEditNew from "./page/admin/newEdit";
import Blog from "./page/blog";
import BorderNew from "./page/borderNew";
import CartPage from "./page/cart";
import Checkout from "./page/checkout";
import Contact from "./page/contact";
import Home from "./page/home";
import Introduct from "./page/intro";
import NewDetail from "./page/newDetail";
import renderIdCate from "./page/renderidcate";
import SearchProducts from "./page/renderSearch";
import Signin from "./page/signin";
import Signup from "./page/signup";

const router = new Navigo("/", {linksSelector: "a", hash: true});

const print = async (content, id) => {
  document.getElementById("app").innerHTML = await content.render(id);
  // Sau khi chạy xong giao diện là render() thì tiếp tục chạy logic xử lý tiếp theo
  // ktra nếu có afterRender() thì gọi đến afterRender() và t/so id
  if(content.afterRender) content.afterRender(id)
}
router.on("/admin/*", () => {}, {
  before(done, match){
    if(localStorage.getItem("user")){
      const userId = JSON.parse(localStorage.getItem("user")).id;
      if(userId === 1){
        done()
      }else{
        document.location.href="/#/";
      }
      // console.log(userId);
    }else{
      document.location.href="/#/";
    }
  }
})

router.on({
  "/": () => {
    print(Home)
  },
  // "/product": () => {
  //   print(Product)
  // },
  "/new": () => {
    print(BorderNew)
  },
  "/news/:id": ({ data }) => {
    // detructoring data, lấy id từ data
    print(NewDetail, data.id)
  },

  "/catePro/:id": ({data}) => {
    print(renderIdCate, data.id)
    // console.log(data.catePro)
  },
  "/admin/dashboard": () => {
    print(Dashboard)
  },
  "/admin/category": () => {
    print(AdminCate)
  },
  "/admin/category/add": () => {
    print(AdminCateAdd)
  },
  "/admin/category/:id/edit": ({data}) => {
    print(AdminEditCate, data.id)
  },
  "/admin/news": () => {
    print(AdminNew)
  },
  "/signin": () => {
    print(Signin)
  },
  "/signup": () => {
    print(Signup)
  },
  "/checkout": () => {
    print(Checkout)
  },
  "/introduct": () => {
    print(Introduct)
  },
  "/contact": () => {
    print(Contact)
  },
  "/blog": () => {
    print(Blog)
  },
  "/cart": () => {
    print(CartPage)
  },
  "/renderSearch/:id": ({data}) => {
    print(SearchProducts, data.id);
    // console.log(data);
  },
  "/admin/news/add": () => {
    print(AdminAddNew)
  },
  "/admin/news/:id/edit": ( {data} ) => {
    // detructoring data, lấy id từ data
    print(AdminEditNew, data.id)
  }
})

router.notFound(() => print("Not Found Page"));

router.resolve()











