export const getVideos = (callback, nextPageToken, filterText) => {

    let apiEndpoint = 'https://www.googleapis.com/youtube/v3/search' +
        '?key=AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo&part=snippet&type=video&maxResults=6&q=surf';

    if (filterText) {
        apiEndpoint += ' ' + filterText;
    }

    if (nextPageToken) {
        apiEndpoint += '&pageToken=' + nextPageToken;
    }

    fetch(apiEndpoint)
        .then(response => {
            return response.json();
        }).then(data => {
            callback(data);
        }
    );
};
