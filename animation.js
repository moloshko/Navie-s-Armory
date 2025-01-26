//Recurse - hour of code with Danny Keig and Kevin Boyer - textiles
let warp;
let weft;
let nThreads;

function setup() {
  createCanvas(500, 500, WEBGL);
  background(20);
  nThreads = 55;
}

function draw() {
  // background(20,20,20)
  t = frameCount / 1000;
  orbitControl();
  normalMaterial();
  //warp
  fill(100, 150, 250);
  // rotateX(PI/2)
  for (let i = 0; i < nThreads; i++) {
    x = -width / 2 + ((i + 0.5) * width) / nThreads;
    y = -height / 2 + height * sin((t * i) / 50);
    fill(
      100 + 150 * noise(50 + x / 80 + y / 20),
      100 + 150 * noise(50 + x / 30 - y / 90),
      100 + 150 * noise(100 + x / 200 - y / 30)
    );
    push();
    translate(x, y, 0);
    sphere(width / 300, 24, 24);
    //stroke(255)
    //line(x,-height/2,x,height/2)
    pop();
  }

  //weft

  for (let i = 0; i < nThreads; i++) {
    x = -width / 2 + width * sin((t * i) / 100);
    y = -height / 2 + ((i + 0.5) * height) / nThreads;
    z = 10 * sin(x * (nThreads / 100));
    fill(
      100 + 150 * noise(50 + y / 100 + x / 50),
      100 + 150 * noise(50 + y / 50 - x / 40),
      100 + 150 * noise(100 + y / 200)
    );
    if (i === 0) {
      console.log(
        100 + 150 * noise(50 + y / 50 - x / 40),
        100 + 150 * noise(50 + y / 50 - x / 40),
        100 + 150 * noise(100 + y / 200)
      );
    }
    push();
    translate(x, y, z);
    sphere(width / 300, 24, 24);
    pop();
  }
}