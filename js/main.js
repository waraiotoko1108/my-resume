/**
 * Created by gonglixuan on 15/7/13.
 */
console.log("here is main.js");
require.config({
    shim:{
        'zepto':{
            exports: "Zepto"
        }
    }

})
require(["underscore","zepto"],function(_,$){
    var oSkill = {
        "os":[
            {
                "text": "OS X",
                "width":"90"
            },
            {
                "text": "Linux",
                "width":"70"
            },
            {
                "text": "Windows",
                "width":"80"
            }
        ],
        "coding":[
            {
                "text": "Android",
                "width":"75"
            },
            {
                "text": "HTML/JS/CSS",
                "width":"85"
            },
            {
                "text": "Python/PHP",
                "width":"70"
            }
        ],
        "tools":[
            {
                "text": "Chrome",
                "width":"90"
            },
            {
                "text": "Android Studio",
                "width":"90"
            },
            {
                "text": "WebStorm",
                "width":"90"
            }
        ]
    };
    _.each(oSkill,function(value,key,ist){
        var zWarp = $('#'+key+" .skill-section");
        var aDom = _.map(value,function(element){
            return "<div>"+
                        "<div class='skill-detail'>"+ (element["text"]|| "")  +"</div>"+
                        "<div class='rect' style='width: " + (element["width"] * 0.5 || "") + "%'></div>"+
                    "</div>"
        })
        zWarp.append(aDom.join(""));
    });
    var canvas = document.querySelector("#graph");
    var cxt = canvas.getContext("2d");
    /* circle */
    /* 左 */
    cxt.beginPath();
    cxt.fillStyle = 'rgba(0,204,255,0.6)';
    cxt.arc(100,200,100,0,Math.PI*2,true);
    cxt.fill();
    cxt.closePath();
    /* 中 */
    cxt.beginPath();
    cxt.fillStyle = 'rgba(204,53,53,0.6)';
    cxt.arc(150,100,100,0,Math.PI*2,true);
    cxt.fill();
    cxt.closePath();
    /* 右 */
    cxt.beginPath();
    cxt.fillStyle = 'rgba(153,204,102,0.6)';
    cxt.arc(200,200,100,0,Math.PI*2,true);
    cxt.fill();
    cxt.closePath();

    cxt.fillStyle = "rgba(255,255,255,255)";
    cxt.textAlign = "center";
    cxt.textBaseline = "middle";
    cxt.font = "16px sans-serif";
    cxt.fillText("JavaScript",150,90);
    cxt.fillText("Android",60,220);
    cxt.fillText("Python",240,220);

    setTimeout(function(){
        $(".opacity_bg").hide();
        $(".about-me .wrapper #graph").css("-webkit-animation-play-state","running");
    },1500)


});