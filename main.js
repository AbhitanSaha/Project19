function preload(){
     moustache=loadImage("https://postimg.cc/bsV5tR30")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX-15,noseY,30,30);
}
function take_snapshot(){
    save('my_filter_is_UNSTOPABLE.png');
}
function modelLoaded(){
    console.log("Piece control kyle is OP");
}
function getPoses(results){
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x ="+noseX);
        console.log("nose y ="+noseY);
    } 
}