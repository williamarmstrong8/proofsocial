declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.JPG' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el?: HTMLElement | null;
    smooth?: boolean;
    lerp?: number;
    multiplier?: number;
    smartphone?: Record<string, unknown>;
    tablet?: Record<string, unknown>;
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    on(event: string, callback: (args: any) => void): void;
    update(): void;
    destroy(): void;
  }
}


