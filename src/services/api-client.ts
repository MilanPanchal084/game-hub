import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        mode: "no-cors",
        key: "5eda0c622c0d4fc2b9c96d0cca3c6eae"
    }
})
