// callbacks

const internet = false;

function youtubeVideos(callback, errorCallback){
  if(internet){
    callback('user is watching Youtube Videos !!!');
  } else {
    errorCallback('No internet :(');
  }
} 

youtubeVideos((sucess) => {
  console.log(sucess);
}, (error) => {
  console.log(error);
})