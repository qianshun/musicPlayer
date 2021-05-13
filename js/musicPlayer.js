const player = $("#autio")[0];/*jquery对象转换成js对象*/

$('#action').click(function () {
    imgstatus = $('.playimg').css("animation-play-state")

    if (imgstatus == 'paused') {
        $('.playimg').css({"animation-play-state": "running"})
        // console.log($('#action>use').attr("xlink:href"))
        $('#action>use').attr("xlink:href", "#iconbofangzanting")
        player.play()

    }

    if (imgstatus == 'running') {
        $('.playimg').css({"animation-play-state": "paused"})
        $('#action>use').attr("xlink:href", "#iconplay")
        player.pause()
    }

})

$('#model').click(function () {
    modelstatus = $('#model>use').attr("xlink:href")

    if (modelstatus == '#iconziyuanldpi') {
        $('#model>use').attr("xlink:href", "#iconsuiji")

    }

    if (modelstatus == '#iconsuiji') {
        $('#model>use').attr("xlink:href", "#iconziyuanldpi")

    }

})

