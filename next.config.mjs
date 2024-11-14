/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // basePath: '/kjiyu-devlog-front',
    reactStrictMode: false,
    images: {
        domains: ['blogjiyu.s3.ap-northeast-2.amazonaws.com', 'cdn1.iconfinder.com'], // 허용된 도메인 추가
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://kjiyudev.github.io/kjiyu-devlog-front/' : '',
    async rewrites() {
        // * url 경로 재설정
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8000/api/:path*', // 로컬 개발용 백엔드 API URL
            },
        ];
    },
};

export default nextConfig;
