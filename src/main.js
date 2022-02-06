import Navigo from "navigo";
import AdminNew from "./page/admin/adminNew";
import Dashboard from "./page/admin/dashboard";
import AdminAddNew from "./page/admin/newAdd";
import AdminEditNew from "./page/admin/newEdit";
import BorderNew from "./page/borderNew";
import Cart from "./page/cart";
import Home from "./page/home";
import New from "./page/new";
import NewDetail from "./page/newDetail";
import Signin from "./page/sigin";
import Signup from "./page/signup";

const router = new Navigo("/", {linksSelector: "a"});

const print = async (content, id) => {
  document.getElementById("app").innerHTML = await content.render(id);
  // Sau khi chạy xong giao diện là render() thì tiếp tục chạy logic xử lý tiếp theo
  // ktra nếu có afterRender() thì gọi đến afterRender() và t/so id
  if(content.afterRender) content.afterRender(id)
}

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
  "/admin/dashboard": () => {
    print(Dashboard)
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
  "/cart": () => {
    print(Cart)
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











