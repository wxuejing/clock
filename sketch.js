let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
var hour_xs = [], hour_ys = [];
var minute_xs = [], minute_ys = [];
var second_xs = [], second_ys = [];
var tmp;
var tmp2;
var tmpx;
var tmpy;
var hoursx, hoursy, minutesx, minutesy, secondsx, secondsy 

function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	let radius = min(width, height) / 2;
  	secondsRadius = radius;
  	minutesRadius = radius*0.85;
  	hoursRadius = radius * 0.7;
	cx = width / 2;
  	cy = height / 2;
  	hoursx = cx;
  	hoursy = cy/2;
  	minutesx = cx/1.8;
  	minutesy = cy*1.2;
  	secondsx = cx*1.5;
  	secondsy = cy*1.2;

  	for (var i = 0; i < 24; i++){
  		tmp = random(TWO_PI);
  		tmp2 = random(hoursRadius/2.5);
  		tmpx = hoursx+tmp2*cos(tmp);
  		tmpy = hoursy+tmp2*sin(tmp);
    	append(hour_xs, tmpx);
    	append(hour_ys, tmpy);
  	}

  	for (var i = 0; i < 60; i++){
  		tmp = random(TWO_PI);
  		tmp2 = random(minutesRadius/2.5);
  		tmpx = minutesx+tmp2*cos(tmp);
  		tmpy = minutesy+tmp2*sin(tmp);
    	append(minute_xs, tmpx);
    	append(minute_ys, tmpy);
  	}

   	for (var i = 0; i < 60; i++){
  		tmp = random(TWO_PI);
  		tmp2 = random(secondsRadius/2.5);
  		tmpx = secondsx+tmp2*cos(tmp);
  		tmpy = secondsy+tmp2*sin(tmp);
    	append(second_xs, tmpx);
    	append(second_ys, tmpy);
  	}
}

function draw() {
	if(second() == 0){
		console.log(minute());
	}
	background(225);
	
	//draw the hour circle on the top center
	noStroke();
	fill(244, 122, 158);
  	ellipse(hoursx, hoursy, hoursRadius, hoursRadius);

  	//draw the minute circle on the bottom left
	fill(116, 183, 252);
  	ellipse(minutesx, minutesy, minutesRadius, minutesRadius);

  	//draw the second circle on the bottom right
  	fill(207, 183, 252);
  	ellipse(secondsx, secondsy, secondsRadius, secondsRadius);

  	for (var i = 0; i < second(); i++){
    	drawBall(second_xs[i], second_ys[i], 40, 250);
 	}

  	for (var i = 0; i < minute(); i++){
    	drawBall(minute_xs[i], minute_ys[i], 40, 150);
  	}

  	for (var i = 0; i < hour(); i++){
    	drawBall(hour_xs[i], hour_ys[i], 40, 80);
  	}

}

function drawBall(x, y, dia, k) {
  	fill(k, 150); // grayscale with 150/255 transparency
  	ellipse(x, y, dia, dia);
}
