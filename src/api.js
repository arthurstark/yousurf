export const getVideos = (callback, nextPageToken) => {

    let apiEndpoint = 'https://www.googleapis.com/youtube/v3/search' +
        '?key=AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo&part=snippet&type=video&q=surf&maxResults=12';


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