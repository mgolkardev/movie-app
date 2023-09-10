import { useEffect, useState } from "react";

type ScreenSizeType = "xlarge" | "large" | "medium" | "tablet" | "mobile";

export const useScreenSize = (): ScreenSizeType => {
    const [state, setState] = useState<ScreenSizeType>("mobile");
    useEffect(() => {
        const updateSize = () => {
            let size: ScreenSizeType = "xlarge";

            const width = window.innerWidth || document.documentElement.clientWidth ||
                document.body.clientWidth;
            if (width < 1440) {
                size = "large";
            }
            if (width < 1200) {
                size = "medium";
            }
            if (width < 992) {
                size = "tablet";
            }
            if (width < 768) {
                size = "mobile";
            }

            setState(size);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return state;
};
