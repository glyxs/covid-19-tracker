import axios from 'axios';
import { useState, useEffect } from 'react';


const useAPIrequest = (APIstr) => {

    const [response, setResponse] = useState(null);
    const [requestError, setRequestError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        GetRequest(APIstr, source);

        return () => {
            source.cancel();
        };
    }, [APIstr]);

    const GetRequest = async (APIstring, source) => {

        setTimeout(() => {
            source.cancel('Response timed out');
        }, 20000);

        await axios
            .get(APIstring, { cancelToken: source.token }, { timeout: 10000 })
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
