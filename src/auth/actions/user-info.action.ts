import { nautilusApi } from "../../api/nautilus.api";

export const userInfoAction = async (token: string) => {

    try {
        const response = await nautilusApi.get('/auth/me', {
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