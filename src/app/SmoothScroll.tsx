'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import Header from './_components/Header';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ScrollEl = scrollRef.current;

        // Locomotive Scroll을 동적으로 import
        import('locomotive-scroll').then((locomotiveModule) => {
            if (ScrollEl) {
                const scroll = new locomotiveModule.default({
                    el: ScrollEl,
                    smooth: true,
                    multiplier: 1.2,
                    class: 'is-reveal',
                    mobile: {
                        smooth: true,
                    } as any,
                    tablet: {
                        smooth: true,
                        breakpoint: 0,
                    },
                });

                // ResizeObserver를 사용하여 크기 변경 시 스크롤 업데이트
                new ResizeObserver(() => scroll.update()).observe(ScrollEl);

                // 페이지 이동 시 스크롤을 최상단으로 이동
                const handleScrollRestore = () => {
                    const scrollPosition = window.history.state?.scrollPosition || 0; // 이전 스크롤 위치 가져오기
                    window.scrollTo(0, scrollPosition); // 해당 위치로 스크롤
                    scroll.update(); // Locomotive Scroll 업데이트
                };

                // 페이지가 로드될 때 스크롤 위치 복원
                window.addEventListener('popstate', handleScrollRestore);

                // Cleanup function
                return () => {
                    scroll.destroy(); // Locomotive Scroll 인스턴스 파괴
                    window.removeEventListener('popstate', handleScrollRestore); // 이벤트 리스너 제거
                };
            }
        });
    }, [pathname]);

    // 페이지 이동 시 스크롤 위치 저장
    const saveScrollPosition = () => {
        const scrollPosition = window.scrollY; // 현재 스크롤 위치 저장
        window.history.replaceState({ scrollPosition }, ''); // 스크롤 위치를 history state에 저장
    };

    // 페이지 이동 시 스크롤 위치 저장
    useEffect(() => {
        window.addEventListener('beforeunload', saveScrollPosition); // 페이지를 떠날 때 스크롤 위치 저장

        return () => {
            window.removeEventListener('beforeunload', saveScrollPosition); // 이벤트 리스너 제거
        };
    }, [pathname]);

    return (
        <>
            {pathname !== '/' && <Header />}
            <div data-scroll-container ref={scrollRef}>
                {children}
                <div className="footer" />
            </div>
        </>
    );
}
