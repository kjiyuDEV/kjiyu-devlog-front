/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['blogjiyu.s3.ap-northeast-2.amazonaws.com'], // 허용된 도메인 추가
    },
    async rewrites() {
        // * url경로 재설정
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:5000/api/:path*', // 로컬 개발용 백엔드 API URL
            },
        ];
    },
};

export default nextConfig;
