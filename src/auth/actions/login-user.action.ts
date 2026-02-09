import axios from "axios"

interface AuthResponse {
    sub: string
    role: string
    token: string
}

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
    try {
        const url = 'https://nautilus-api-test.up.railway.app/auth/login'
        const response = await axios.post(url, { email, password })
        return response.data;
    } catch (err) {
        console.log(err)
        throw err
    }
}