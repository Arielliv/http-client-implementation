import axios from 'axios';

const ID = '315363366';
const YEAR = '1996';

const port = '8989';
const baseURL = `http://localhost:${port}/`;

const axiosInstance = axios.create({
    baseURL
});

const getReq = async() =>{
    try {
        return axiosInstance.get(`/test_get_method?id=${ID}&year=${YEAR}`);
    } catch (error) {
        console.error(error);
    }
}

const postReq = async(requestId) =>{
    try {
        return axiosInstance.post(`/test_post_method`, {
            "id": ID,
            "year": YEAR,
            requestId
        });
    } catch (error) {
        console.error(error);
    }
}

const updateReq = async(requestId) =>{
    try {
        return axiosInstance.put(`/test_put_method?id=${requestId}`, {
            "id": ID,
            "year": YEAR
        });
    } catch (error) {
        console.error(error);
    }
}

const deleteReq = async(requestId) =>{
    try {
        return axiosInstance.delete(`/test_delete_method?id=${requestId}`);
    } catch (error) {
        console.error(error);
    }
}
const main = async () => {
    const getResponseData = (await getReq()).data;
    const postResponseData = (await postReq(getResponseData)).data;
    const updateResponseData = (await updateReq(postResponseData.message)).data;
    await deleteReq(updateResponseData.message);
}

(async()=> main())();