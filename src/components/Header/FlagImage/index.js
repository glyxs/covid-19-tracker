import { Skeleton } from '@chakra-ui/skeleton';
import React, { useState } from 'react';

const FlagImage = ({ val }) => {
    const [isLoading, setIsLoading] = useState(true);
    const imgLoaded = () => {
        setIsLoading(false);
    };
    return (
        <Skeleton mr={3} isLoaded={!isLoading}>
            <img
                style={{ borderRadius: "3px" }}
                src={val.flag}
                alt={val.country}
                onLoad={imgLoaded}
                height="20px" width="34px" />
        </Skeleton>
    );
};

export default FlagImage;
