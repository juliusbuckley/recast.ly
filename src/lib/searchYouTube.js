var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${options.key}&videoEmbeddable=true&q=${options.query}&maxResults=${options.max}&type=video`,
    type: 'GET',
    success: data => {
      callback(data.items);
    },
    error: data => {
      console.log('failed to connect to youtube');
    }
  });
};

// searchYouTube({key: 'AIzaSyDv4gvT5m8dC_qPj_LGkrh15pyX4QdN8d0', query: 'cats', max: 10}, function(data) {
//   videoData.push(data);
//   console.log(data);
// });
    
window.searchYouTube = searchYouTube;