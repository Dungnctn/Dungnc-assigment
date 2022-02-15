import Header from "../conponent/header";
import Footer from "../conponent/footer"
import BorderNew from "./borderNew";
import Slider from "./slide";
const Home = {
    async render() {
        return /*html*/ `
            ${Header.render()}
            ${Slider.render()}
            ${await BorderNew.render()}
            ${Footer.render()}
            `
    },

    afterRender() {
        Header.afterRender();
        // vì conponent chưa được thực thi afterRender nên gọi cùng với Home
    }
}
export default Home;