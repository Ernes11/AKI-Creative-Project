import axios from "axios";

const http = axios.create({ baseURL: 'https://creative.kg/api/' })

export default http;