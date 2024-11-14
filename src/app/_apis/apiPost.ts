import axios from 'axios';

// 게시글 목록 조회
export const getPosts = async (categoryId?: string) => {
    try {
        const response = await axios.get(`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL_PROD : process.env.NEXT_PUBLIC_API_URL_DEV}/api/post/list/${categoryId}/view`);
        return response.data;
    } catch (error: any) {
        throw new Error(`Error fetching posts: ${error.message}`);
    }
};

// 게시글 목록 조회
export const getPostDetail = async (id: string) => {
    try {
        const response = await axios.get(`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL_PROD : process.env.NEXT_PUBLIC_API_URL_DEV}/api/post/${id}/detail`);
        return response.data;
    } catch (error: any) {
        throw new Error(`Error fetching posts: ${error.message}`);
    }
};
