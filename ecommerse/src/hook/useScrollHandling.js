import { useEffect, useRef, useState } from "react";

const useScrollHandling = () => {
    const [scrollDirection, setScrollDirextion] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const previousScrollPosition = useRef(0);
    const scrollTracking = () => {
        const currentScrollPoisition = window.pageYOffset;

        if (currentScrollPoisition > previousScrollPosition.current) {
            setScrollDirextion('down');
        } else if (currentScrollPoisition < previousScrollPosition.current) {
            setScrollDirextion('up');
        }

        previousScrollPosition.current =
            currentScrollPoisition <= 0 ? 0 : currentScrollPoisition;

        setScrollPosition(currentScrollPoisition);
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    return {
        scrollDirection,
        scrollPosition
    };
};

export default useScrollHandling;
