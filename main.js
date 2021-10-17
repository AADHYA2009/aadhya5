noseX=0;
noseY=0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(450, 450);
    canvas = createCanvas(400,300);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('noseX =' + noseX +" noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    
        console.log('leftWristX =' + leftWristX +" rightWristX =" + rightWristX +' difference ='+ difference);
    }
}

function draw() {
    background("#49c0de");
    

    document.getElementById('square_side').innerHTML = "Width And Height of a Text will be =" + difference + "px";
   fill('#fcd303');
   text('A.L', 20, 250);
   textSize(difference);
   stroke("#fcd303");
   

}


