noseX=0;
noseY=0;
var x= document.getElementById("myAudio");
function preload() {
    crown=loadImage("https://i.postimg.cc/Dwm42gx5/imgbin-party-hat-birthday-cap-png.png");
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-80;
        noseY = results[0].pose.nose.y-250;
        console.log("nose x =" + results[0].pose.nose.x-80);
        console.log("nose y =" + results[0].pose.nose.y-250);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(crown, noseX, noseY, 150, 150)
}

function take_snapshot() {
    save('myFilterImage.png');
}

function playSound(){
	x.play();
}
