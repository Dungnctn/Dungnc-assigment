import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json"
    }
    // dữ liệu mặc định đẩy lên sẽ là headers "Content-type": "applicatuion/json"
})

export default instance;