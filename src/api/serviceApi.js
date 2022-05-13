import axios from "axios";
import { toast } from 'react-toastify';

const axiosClient = axios.create();
const isDev = process.env.ENV === "development";

class ServiceApi {
    url = "";

    // SELECT BASE URL VERSION
    service() {
        axiosClient.defaults.baseURL = isDev ?
            process.env.BASE_DEV_URL :
            process.env.BASE_PROD_URL;
        return this;
    }

    // APPEND URL TO API URL
    appendToURL(url) {
        return (`${this.url}${url}`);
    }

    // GET API REQUEST
    async fetch(url, resolve = false) {
        console.log(this.appendToURL(url))
        
        try {
            const response = await axiosClient.get(
                // this.appendToURL(url),
                url,
                this.setupHeaders()
            );
            return !resolve ?
                response : {...response };
        } catch (err) {
            return this.handleErrors(err);
        }
    }

    // POST API REQUEST
    async push(url, payload = null, resolve = false, is_attached = false) {
        try {
            const response = await axiosClient.post(
                this.appendToURL(url),
                payload,
                this.setupHeaders(is_attached)
            );

            return !resolve ?
                response : {...response };
        } catch (err) {
            return this.handleErrors(err);
        }
    }


    // PUT API REQUEST
    async update(url, payload = {}, resolve = false, is_attached = false) {
        try {
            const response = await axiosClient.put(
                this.appendToURL(url),
                payload,
                this.setupHeaders(is_attached),
            );

            return !resolve ?
                response : {...response };
        } catch (err) {
            return this.handleErrors(err);
        }
    }

    // DELETE API REQUEST
    async remove(url, payload = {}, resolve = false) {
        try {
            const response = await axiosClient.delete(
                this.appendToURL(url), {
                    data: payload,
                    ...this.setupHeaders(),
                }
            );

            return !resolve ?
                response : {...response };
        } catch (err) {
            return this.handleErrors(err);
        }
    }

    // SETUP HEADERS FOR SCENARIOS LIKE IMAGE UPLOAD
    setupHeaders(is_attached = false) {
        return is_attached ? {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        } : {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
        };
    }

    // HANDLE API REQUEST ERRORS
    handleErrors(err) {
        // Alert an error message
        const toastOptions = {
            autoClose: false,
        };
        toast.error('An error occured, please try again', toastOptions);
        console.error('API ERROR:', err);
        return err;
    }

    isSuccessful(response) {
        const codes = [200, 201, 202, 204];
        return codes.includes(response['status'] || response['statusCode'] || response['code']) ?
            true :
            false;
    }
}

export default new ServiceApi();