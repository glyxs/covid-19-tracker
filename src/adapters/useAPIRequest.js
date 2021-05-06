import axios from 'axios';
import { useState, useEffect } from 'react';


const useAPIrequest = (APIConString) => {

    const [response, setResponse] = useState(null);
    const [requestError, setRequestError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        makeGETRequest(APIConString, source);

        return () => {
            source.cancel();
        };
    }, [APIConString]);

    const makeGETRequest = async (APIstring, source) => {

        setTimeout(() => {
            source.cancel('Response timed out');
        }, 20000);

        await axios
            .get(APIstring, { cancelToken: source.token }, { timeout: 20000 })
            .then(res => {
                setResponse(res.data);
            })
            .catch(e => {
                setRequestError(e);
            });
    };
    return { response, requestError };
};

export default useAPIrequest;
