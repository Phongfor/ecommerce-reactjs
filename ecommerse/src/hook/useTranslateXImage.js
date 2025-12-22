import { useEffect, useState } from 'react';
import useScrollHandling from '@/hook/useScrollHandling';
const useTranslateXImage = () => {
    const { scrollDirection, scrollPosition } = useScrollHandling();
    const [translateXPosition, setTransalateXPosition] = useState(60);

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
        handleTranslateX();
    }, [scrollPosition]);

    return {
        translateXPosition
    };
};

export default useTranslateXImage;
