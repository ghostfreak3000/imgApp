/**
 * Created by bishaka on 6/14/15.
 */


var ImgApp = function(){

    var sliderId = "owl-example";
    var slider = {};

    slider.init = function(){
        $("#"+sliderId).owlCarousel({
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        });
    };

    slider.addImg = function(img){

        var imgDiv = '<div> <img src="'+img+'"> </div>'

        var owl = $("#"+sliderId).data('owlCarousel');
        owl.addItem(imgDiv)
    };

    slider.fetchImgs = function(url){

        $.getJSON(url,function(imgs){

            var owl = $("#"+sliderId).data('owlCarousel');

            imgs.forEach(function(img){
                var imgDiv = '<div> <img src="'+img.name+'"> </div>'
                owl.addItem(imgDiv)
            });

        });

    };

    return{
        slider:slider
    }
};