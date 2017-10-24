
var video;

function setup() {
  createCanvas(1000, 700);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

}

function draw() {
  tint(255, 0, 78);
  image(video, 0, 0, mouseX, height);
  tint(78, 255, 0);
  image(video, 300, 300, mouseX, height);
  tint(0, 78, 255);
  image(video, 500, 500, mouseX, height);
}
