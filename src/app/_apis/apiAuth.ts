import axios from 'axios';

// 로그인
export const postLogin = async (req: any) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.post(
            `${
                process.env.NODE_ENV === 'production'
                    ? process.env.NEXT_PUBLIC_API_URL_PROD
                    : process.env.NEXT_PUBLIC_API_URL_DEV
            }/api/auth`,
            req,
            config,
        );
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

// 회원가입
export const postSignUp = async (req: any) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.post(
            `${
                process.env.NODE_ENV === 'production'
                    ? process.env.NEXT_PUBLIC_API_URL_PROD
                    : process.env.NEXT_PUBLIC_API_URL_DEV
            }/api/auth/signup`,
            req,
            config,
        );
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};
