/**
 * Created by bishaka on 6/14/15.
 */
$(document).ready(function() {
    var app = ImgApp();
    app.slider.init();
    app.slider.fetchImgs("http://localhost:63342/imgApp/imgs.json");
});




