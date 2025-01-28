
// регистрация через яндекс и гугл
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile(); // регистрация через яндекс и гугл
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  }

<script src="https://apis.google.com/js/platform.js" async defer></script>