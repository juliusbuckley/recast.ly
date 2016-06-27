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
    
window.searchYouTube = searchYouTube;