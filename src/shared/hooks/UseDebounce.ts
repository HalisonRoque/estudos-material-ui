import { useCallback, useRef } from "react";

export const useDebouce = (delay = 300, notDelayInFirsTime = true) => {

    const debouncing = useRef<NodeJS.Timeout | null>(null);
    const isFirstTime = useRef(notDelayInFirsTime);

    const debounce = useCallback((func: () => void) => {

        if (isFirstTime.current) {
            isFirstTime.current = false;
            func();
        } else {
            if (debouncing.current) {
                clearTimeout(debouncing.current)
            }

            debouncing.current = setTimeout(() => func(), delay);
        }
    }, [delay]);

    return { debounce };
};