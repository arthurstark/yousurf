

export const getVideos = (callback) => {

    fetch('http://localhost:3000/test.json')
        .then(response => {
            return response.json();
        }).then(data => {
            callback(data);
        }
    );
};