import Header from "../conponent/header";
import New from "./new";
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
    }
}
export default Home;