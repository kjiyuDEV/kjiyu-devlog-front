'use client';

import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let scroll: any;

        // 동적 import를 사용하여 클라이언트 사이드에서만 로드
        const initScroll = async () => {
            if (typeof window !== 'undefined' && scrollRef.current) {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                scroll = new LocomotiveScroll({
                    el: scrollRef.current,
                    smooth: true,
                    multiplier: 0.8,
                    lerp: 0.1,
                    smartphone: {
                        smooth: true,
                    },
                    tablet: {
                        smooth: true,
                        breakpoint: 1024,
                    },
                });
            }
        };

        initScroll();

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div data-scroll-container ref={scrollRef}>
            {children}
        </div>
    );
}
