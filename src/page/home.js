import Header from "../conponent/header";
import New from "./new";
import Footer from "../conponent/footer"
const Home = {
    async render() {
        return /*html*/ `
            ${Header.render()}
            ${await New.render()}
            ${Footer.render()}
            `
    }
}
export default Home;