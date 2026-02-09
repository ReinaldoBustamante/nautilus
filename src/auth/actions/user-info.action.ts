import axios from "axios";

export const userInfoAction = async (token: string) => {

    try {
        const url = `https://nautilus-api-test.up.railway.app/auth/me`
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data;
    } catch (err) {
        console.log(err)
        throw err
    }
}