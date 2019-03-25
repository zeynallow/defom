import config from '../config';

export const categoryService = {
    getCategories
};


function getCategories() {
    const requestOptions = {
        method: 'GET'
    };
    return fetch(`${config.apiUrl}/api/v1/topic/categories/`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        return data;
    });
}
