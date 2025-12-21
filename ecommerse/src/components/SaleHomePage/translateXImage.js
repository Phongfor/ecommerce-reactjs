import { useEffect, useRef, useState } from 'react';

const useTranslateX = () => {
    const [scrollDirection, setScrollDirextion] = useState(null);
    const [translateXPosition, setTransalateXPosition] = useState(60);
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

    const handleTranslateX = () => {
        if (scrollDirection === 'down' && scrollPosition >= 1500) {
            setTransalateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (scrollDirection === 'up') {
            setTransalateXPosition(
                translateXPosition >= 20 ? 20 : translateXPosition + 1
            );
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);

        return () => window.removeEventListener('scroll', scrollTracking);
    }, []);

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);

    return {
        translateXPosition
    };
};

export default useTranslateX;
