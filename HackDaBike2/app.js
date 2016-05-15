var sampleData = [
    { data: "images/pet.png" },
    { data: "images/classes.png" },
    { data: "images/goals.png" },
    { data: "images/group.png" },
    { data: "images/info.png" }
];

var addSlides = function(slide) {
    var slideHTML = "<div class='slide'><img src=" + slide.data + "></div>";
    return slideHTML;
}

$(document).ready(function() {
    for (var i = 0; i < sampleData.length; i++) {
        $('#container').append(addSlides(sampleData[i]));
    };
});
