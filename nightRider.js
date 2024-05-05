var current_light_index = 0
var max_light_count = 6
var move = "RIGHT"
var myInterval = null
var audio = $(".song")[0];

function updateLightPanel() {
    $(".box").removeClass("lightOn")
    $(".box").removeClass("lightOn2")
    $(".box").removeClass("lightOn3")
    $("#val"+current_light_index).addClass("lightOn")

    if (move === "RIGHT") {
        $("#val"+(current_light_index-1)).addClass("lightOn2")
        $("#val"+(current_light_index-2)).addClass("lightOn3")
        ++current_light_index
        if (current_light_index > max_light_count -1) {
            move = "LEFT"
        }
    } else {
        $("#val"+(current_light_index+1)).addClass("lightOn2")
        $("#val"+(current_light_index+2)).addClass("lightOn3")
        --current_light_index
        if (current_light_index === 0) {
            current_light_index = 2
            move = "RIGHT"
        }
    }
}

$("#btnStart").on("click", function(){
    myInterval = setInterval(updateLightPanel, 70)
    audio.play();
})

$("#btnStop").on("click", function(){
    clearInterval(myInterval)
    audio.pause();
})







