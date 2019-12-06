import queryString from "query-string";

export const API_URL = "https://itunes.apple.com/search?";

export const fetchApi = (url, options = {}) => {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(response => {
                if (response.status < 400) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then(data => {
                resolve(data);
            })
            .catch(response => {
                response.json().then(error => {
                    reject(error);
                });
            });
    });
};

export default class CallApi {
    static post(options = {}) {
        const { params = {}, body = {} } = options;
        const queryStringParams = {
            // country: 'US',
            ...params
        };

        return fetchApi(
            `${API_URL}${queryString.stringify(queryStringParams)}`,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(body)
            }
        );
    }
}