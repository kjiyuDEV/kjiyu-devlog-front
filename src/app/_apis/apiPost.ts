import axios from 'axios';

// 게시글 목록 조회
export const getPosts = async (categoryId?: string) => {
    try {
        const response = await axios.get(
            `${
                process.env.NODE_ENV === 'production'
                    ? process.env.NEXT_PUBLIC_API_URL_PROD
                    : process.env.NEXT_PUBLIC_API_URL_DEV
            }/api/post/list/${categoryId}/view`,
            {
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        throw new Error(`Error fetching posts: ${errorMessage}`);
    }
};

// 게시글 상세 조회
export const getPostDetail = async (id: string) => {
    try {
        const response = await axios.get(
            `${
                process.env.NODE_ENV === 'production'
                    ? process.env.NEXT_PUBLIC_API_URL_PROD
                    : process.env.NEXT_PUBLIC_API_URL_DEV
            }/api/post/${id}/detail`,
            {
                withCredentials: true,
            },
        );
        return response.data;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        throw new Error(`Error fetching post detail: ${errorMessage}`);
    }
};

// 게시글 좋아요 등록
export const postLike = async (id: string, req: any) => {
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
            }/api/post/${id}/like`,
            req,
            config,
        );
        return response.data;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        throw new Error(`Error posting like: ${errorMessage}`);
    }
};

// 게시글 댓글 조회
export const getPostComments = async (id: string) => {
    console.log(id, '<id');
    try {
        const response = await axios.get(
            `${
                process.env.NODE_ENV === 'production'
                    ? process.env.NEXT_PUBLIC_API_URL_PROD
                    : process.env.NEXT_PUBLIC_API_URL_DEV
            }/api/post/${id}/comments`,
        );
        return response.data;
    } catch (error: any) {
        const errorMessage = error.response ? error.response.data.message : error.message;
        throw new Error(`Error fetching post detail: ${errorMessage}`);
    }
};
