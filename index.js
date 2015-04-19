navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
      destinationType: Camera.DestinationType.DATA_URL
});

function onSuccess(imageData) {
   var image = document.createElement('img');
   image.src = "data:image/jpeg;base64," + imageData;
   document.body.appendChild(image);
}

function onFail(message) {
      alert('Failed because: ' + message);
}
