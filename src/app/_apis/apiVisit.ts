import axios from 'axios';

export const fetchVisits = async (params: any) => {
  try {
    const response = await axios.post(
      `${
        process.env.NODE_ENV === 'production'
          ? process.env.NEXT_PUBLIC_API_URL_PROD
          : process.env.NEXT_PUBLIC_API_URL_DEV
      }/api/visitor/visit`,
      params
    );
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};
