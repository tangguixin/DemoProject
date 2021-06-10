 
<template>
<div class="video-js">
    <div v-if="videoSrc===''" class="no-video">
        暂未连接视频流
        </div>
        <video-player v-else class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
        </div>
</template>
 
<script>
// import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import {videoPlayer} from 'vue-video-player'
import 'videojs-flash'
// import SWF_URL from 'videojs-swf/dist/video-js.swf' //实时直播视频会用到
 
// videojs.options.flash.swf = SWF_URL // 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件
export default {
    name: 'videojs',
    components: {
        videoPlayer
        },
        data () {
            return {
                videoSrc: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
                playerOptions: {
                    // live: true,
                    language: 'en',
                    autoplay: true, // 如果true，浏览器准备好时开始播放
                    muted: false, // 默认情况下将会消除任何音频
                    loop: true, // 是否视频一结束就重新开始
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    controlBar: {
                        timeDivider: false,
                        durationDisplay: false,
                        remainingTimeDisplay: false,
                        currentTimeDisplay: false, // 当前时间
                        volumeControl: false, // 声音控制键
                        playToggle: false, // 暂停和播放键
                        progressControl: false, // 进度条
                        fullscreenToggle: true // 全屏按钮
                        },
                        sources: [{
                            type: 'video/mp4',
                            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" // 视频地址-改变它的值播放的视频会改变
                        }],
                        poster: "../assets/1.png", //你的封面地址
                        notSupportedMessage: '此视频暂无法播放，请稍后再试' // 允许覆盖Video.js无法播放媒体源时显示的默认信息。poster: "../../static/images/test.jpg", //你的封面地址
                        }
                    }
                }
    }
</script>
 

<style lang="scss" >
.video-js{
    width:100%;
    height:4.5rem;
    .no-video{
        display:flex;
        height:100%;
        font-size:14px;
        text-align:center;
        justify-content: center;
        align-items:center;
        }
        }
</style>

 