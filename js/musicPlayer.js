const player = $("#autio")[0]; /*jquery对象转换成js对象*/
const musicList = ['花海 - 周杰伦.mp3', '蔡健雅 - 红色高跟鞋.mp3']
var musicIndex = 0
var playModel = 0


// 点击播放
$('#action').click(function() {
	var imgstatus = $('.playimg').css("animation-play-state")
	if (imgstatus == 'paused') {
		play()
	}

	if (imgstatus == 'running') {
		$('.playimg').css({
			"animation-play-state": "paused"
		})
		$('#action>use').attr("xlink:href", "#iconplay")
		$('#prosser-container').css("visibility", "hidden")
		$('#music-name').css("visibility", "hidden")
		player.pause()
	}

})

function play() {
	$('.playimg').css({
		"animation-play-state": "running"
	})
	// console.log($('#action>use').attr("xlink:href"))
	$('#action>use').attr("xlink:href", "#iconbofangzanting")

	$('#autio').attr("src", musicList[musicIndex])
	$('#music-name>h4').text(musicList[musicIndex])
	$('#prosser-container').css("visibility", "visible")
	$('#music-name').css("visibility", "visible")
	$('.music').css('background-color','')
	$('.music.'+musicIndex).css('background-color','#48fb48')
	player.play()
}



// 点击模式切换
$('#model').click(function() {
	modelstatus = $('#model>use').attr("xlink:href")

	if (modelstatus == '#iconziyuanldpi') {
		$('#model>use').attr("xlink:href", "#iconsuiji")
		playModel = 1

	}

	if (modelstatus == '#iconsuiji') {
		$('#model>use').attr("xlink:href", "#iconziyuanldpi")
		playModel = 0
	}
	// console.log('   playModel   ' + playModel)

})

// 点击设置进度条
$('#prosser-container').click(function(e) {
	const width = this.clientWidth
	// console.log(' width ' + width)
	const clickX = e.offsetX
	// console.log(' clickX ' + clickX)
	// audio.duration: 音频长度
	const musicDuration = player.duration

	player.currentTime = (clickX / width) * musicDuration

})


// 进度条监听
player.ontimeupdate = function(e) {

	// audio.duration: 音频长度
	// audio.currentTime: 音频播放位置
	// 对象解构操作
	const {
		duration,
		currentTime
	} = e.target;
	const progressPercent = (currentTime / duration) * 100 + '%';
	// console.log(progressPercent)

	$("#prosser").css("width", progressPercent)
}

function nextsong() {
	if(playModel==1){
		console.log('   playModel   ' + playModel)
		musicIndex = Math.floor(Math.random()*musicList.length)
		console.log('   musicIndex   ' + musicIndex)
	}
	if (++musicIndex == musicList.length) {
		musicIndex = 0;
	}
	play()
}

// 下一首
$('#next').click(nextsong)

function prevSong() {

	if (--musicIndex == -1) {
		musicIndex = musicList.length - 1;
	}
	play()
}

// 上一首
$('#prev').click(prevSong)

function clickmusic(index){
	var imgstatus = $('.playimg').css("animation-play-state")
	if(musicIndex==index&&imgstatus == 'running'){
		return
	}
	musicIndex=index
	
	play()
}

// 初始化
$(document).ready(function(){
	console.log('document.ready')
	var musicList_html=''
	for (var i = 0; i < musicList.length; i++) {
		musicList_html+='<div class="music '+i+'" onclick="clickmusic('+i+')" ><span>'+musicList[i]+'</span></div>'
	}
	$('#music-list').html(musicList_html)
	
})
