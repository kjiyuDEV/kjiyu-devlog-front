// src/@types/locomotive-scroll.d.ts
declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
        el: HTMLElement;
        smooth?: boolean;
        multiplier?: number;
        class?: string;
        mobile?: {
            smooth?: boolean;
        };
        tablet?: {
            smooth?: boolean;
            breakpoint?: number;
        };
    }

    export default class LocomotiveScroll {
        constructor(options: LocomotiveScrollOptions);
        update(): void;
        destroy(): void;
    }
}
