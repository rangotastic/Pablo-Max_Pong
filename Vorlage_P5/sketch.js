//Ball
let bx;
let by;
let bd;
let stepx = 5;
let stepy = 7;

//speed
let s = 0;

//Punkte
let pu;
let bp;
let pn;

//Padel
let px;
let py;

//für den arc befehl
let circle = 40;

//Variablen die sich verändern
let degree = 10;
let start = 0;
n = 10;


//countdown
let co = 0;
let w = 0;

//background
let gx;
let gy;
let gv;

let img;




function setup() {


  createCanvas(windowWidth, windowHeight - 4);
  bx = width / 2;
  by = height / 8;
  bd = 30;
  px = width / 2;
  py = height - width / 2 - width / 100;
  gx = width / 2;
  gy = width / 2;
  gv = 0
  pu = 0;
  bp = 0;
  bd = width / 15;
  pn = 0;
  img = loadImage("src/Christoph.png");

  //für den arc befehl
  angleMode(DEGREES);

}




function draw() {
  background(255);
  image(img,0,0,width,height)
  //picture();
  backgr();
  ball();
  fullPadel(px, py);

  //speed...................................................................................................................
  s = s + 0.009;

  //x Richtung..............................................................................................................
  bx = bx + stepx;
  if (bx > width - 15) {
    stepx = -5 - s;
  }

  if (bx <= 15) {
    stepx = 5 + s;
  }


  //Y RICHTUNG..............................................................................................................
  by = by + stepy;

  if (bp > 0) {
    fill(255);
    //    text(bp, px + 80, py + 15);
    //    text("B E S T", px - 80, py + 15);
    fill(200);
  }


  collision();

}

function backgr() { //.............................................
//  background(255);
  fill(200);
  noStroke();
  gv = (rotationY) / (width / 180);
  rect(0, 0, width / 50 + gv, height)
  rect(width - (width / 50 - gv), 0, width / 50 - gv, height)
  noFill();
  stroke(200);
  strokeWeight(width / 4);
  strokeCap(SQUARE);
  arc(width / 2, width / 2 + width / 100, width - width / 25 + width / 4, width - width / 25 + width / 4, 180, 0);
  arc(width / 2, height - (width / 2 + width / 100), width - width / 25 + width / 4, width - width / 25 + width / 4, 0, 180);

}


function fullPadel(x, y) { //.............................................
  strokeCap(SQUARE);
  fill(220);
  px = (width / 2) + (rotationY * (width / 180));
  quad(x - width / 7, y, x - width / 7, y + width / 30, x + width / 7, y + width / 30, x + width / 7, y);
  stroke(255);
  strokeWeight(2);
  // line(x - 100, y, x + 100, y);


}


function ball() { //.............................................
  fill(230, 70, 20);
  noStroke();
  ellipse(bx, by + 10, bd);
}


function collision() { //.............................................
  if (by >= py - 15) {
    if (by <= py + 30) {
      if (bx >= px - width / 7) {
        if (bx <= px + width / 7) {
          stepy = -7 - s;
          pu = pu + 1;
        }
      }
    }
  }
  if (by >= height) {
    background(155, 0, 0);
    stepy = -7 - s;
    if (pu > bp) {
      bp = pu;
    }
    pu = 0;
    s = 0;
    bx = width / 2;
    by = height / 8;
  }

  if (pu > 9) {
    pn = 4;
  }

  if (pu == 0) {
    pn = 0;
  }

  if (by <= 0) {
    stepy = 7 + s;
  }
}



function punkte() {
  fill(190);
  ellipse(x, y + 30, 50, 50);
  fill(200);
  strokeCap(ROUND);
  strokeWeight(1);
  noFill();
  arc(x, y + 30, circle + 10, circle + 10, 0, 180);
  arc(x, y + 30, circle, circle, start, degree);
  arc(x, y + 30, circle - 10, circle - 10, -start, -degree);

  degree = degree + 1.5;
  start = degree - n;
  n = n + 0.5;



  //Punkte
  fill(255);
  noStroke();
  textStyle(BOLD);
  text(pu, x - 4 - pn, y + 30 + 3);
}


function picture() {


    // code by christoph schubert
    // 10 Print Variante C
    // Christoph Schubert
    let step = 20; // Rastergröße
    let xC = 0; // aktueller X Wert
    let yC = 0; // aktueller Y Wert

    let limitSky = 240;
    let limitMountains1 = 260;
    let limitMountains2 = 280;
    let limitClouds = 500;
    let limitForest = 780;

    let hueSky = 240;
    let hueMountains = 140;
    let hueForest = 100;
    let hueRiver = 140;


    background(52);
    noStroke();
    colorMode(HSB, 255);



    // erzeugt eine zufällige Zahl zwischen 0 und 3
    let rand = random(0, 1);

    if (yC <= limitSky) {
      fill(hueSky, 150, 80 + yC / 2);
      rect(xC, yC, step, step);
    } else if (yC <= limitMountains1) {

      fill(hueMountains, 80, 100);
      triangle(xC, yC, xC + 20 + rand * 20, yC - 15 - 15 * rand, xC + 40 + rand * 20, yC);
      rect(xC, yC, step, step);

    } else if (yC <= limitMountains2) {
      fill(hueMountains, 80, 100);
      rect(xC, yC, step, step);
    } else if (yC <= limitClouds) {
      fill(yC - limitMountains2 / 2 - 50);
      ellipse(xC + step / 2, y + step / 2, 20 + 80 * rand);
    } else if (yC <= limitForest) {
      stroke(hueForest, 100, 200 - (yC - limitClouds));
      strokeWeight(3);
      fill(hueForest, 100, 200 - (yC - limitClouds));
      drawTree(xC, yC, 20 + 20 * rand);
      rect(xC, yC, step, step);

      let cloudBrightness = yC - limitMountains2 / 2 - 50;
      noStroke();
      fill(0, 0, cloudBrightness, 30);
      ellipse(xC + step / 2, yC + step / 2, 80 + 80 * rand);
    }

    // nächster Punkt auf der X-Achse im Raster
    xC = xC + step;

    // wenn x am Ende der Zeile/X-Achse der Zeichenfläche ankommt
    if (xC >= width) {
      xC = 0; // x wieder ganz nach links setzten
      yC = yC + step; // Zeilenumbruch

      print("Zeilenumbruch!!!");
    }

    // sobald y am unteren Ende der Zeichenfläche angekommen ist
    if (yC > height + 60) {
      saveCanvas("10printC-" + year() + month() + day() + "-" + hour() + minute() + second());
      noStroke();
      background(52);
      print("RESET!");
    }



    function drawTree(xC, yC, height, scale) {
      let rand = random(0, 1);
      line(xC, yC, xC, yC - (height + height * rand));
      ellipse(xC, yC - (height + height * rand), 40 + 10 * rand, 20 + 10 * rand);
    }
    colorMode(RGB, 255);
  }
