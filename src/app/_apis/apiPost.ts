import axios from 'axios';

// 게시글 목록 조회
export const getPosts = async (id: string, categoryId?: string) => {
    try {
        const response = await axios.get(`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL_PROD : process.env.NEXT_PUBLIC_API_URL_DEV}/api/post/list/${id}/view`);
        return response.data;
    } catch (error: any) {
        throw new Error(`Error fetching posts: ${error.message}`);
    }
};
