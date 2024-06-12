import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:3001";

class ManifestApi {
    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);

        const url = `${BASE_URL}/${endpoint}`;
        const params = (method === "get")
            ? data
            : {};
        const headers = {
            "Content-Type": "application/json"
            };

        try {
            return (await axios({ url, method, data, params, headers })).data;
        }
        catch (err) {
            console.error("API Error:", err.response);
            let message = err.response?.data?.error?.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getKinships() {
        const res = await this.request(`kinships/`);
        return res;
    }

    static async getKinship(name) {
        const res = await this.request(`kinships/${name}`);
        return res;
    }
}

export default ManifestApi;