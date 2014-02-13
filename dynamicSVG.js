/* My Javascript file for the SVG project*/

//status of the tank size
var resizeOn = 0;

/* This function loads the whole svg element and it's sub-elements dynamically*/
function init() {

  /* This part writes the content on to the body of the page that fish 2 is the winner of the "so-called race" */
  var winner = document.getElementById("winningFish");
  var winner_text = document.createTextNode("Fish 2 always wins!");
  winner.appendChild(winner_text);
  document.getElementsByTagName("body")[0].appendChild(winner);
  
  /* This chunk of code dynamically creates the svg element */
  console.log("inside here");
  var body = document.getElementsByTagName("body")[0];
  var svgns = "http://www.w3.org/2000/svg";
  var svg = document.createElementNS(svgns, "svg");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("baseProfile", "full");
  svg.setAttribute("height", "100%");
  svg.setAttribute("width", "100%");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  /* Creation of gradient dynamically for the fish tank to use */
  var defs_gradient = document.createElementNS(svgns, "defs");
  var linear_gradient = document.createElementNS(svgns, "linearGradient");
  linear_gradient.setAttribute("id", "Gradient1");

  var stop1 = document.createElementNS(svgns, "stop");
  stop1.setAttribute("stop-color", "aqua");
  stop1.setAttribute("offset", "0%");

  var stop2 = document.createElementNS(svgns, "stop");
  stop2.setAttribute("stop-color", "blue");
  stop2.setAttribute("offset", "0%");
  stop2.setAttribute("stop-opacity", "0.4");

  var stop3 = document.createElementNS(svgns, "stop");
  stop3.setAttribute("stop-color", "aqua");
  stop3.setAttribute("offset", "100%");

  linear_gradient.appendChild(stop1);
  linear_gradient.appendChild(stop2);
  linear_gradient.appendChild(stop3);

  defs_gradient.appendChild(linear_gradient);

  /* Creation of the fish tank dynamically*/
  var fish_tank = document.createElementNS(svgns, "rect");
  fish_tank.setAttribute("id", "tank");
  fish_tank.setAttribute("x", "400px");
  fish_tank.setAttribute("y", "133px");
  fish_tank.setAttribute("width", "700px");
  fish_tank.setAttribute("height", "300px");
  fish_tank.setAttribute("fill", "url(#Gradient1)");

  /* Creation of a definitions tag which groups paths constituting a fish, which can be (re)-used in order to create more fishes */
  var defs1 = document.createElementNS(svgns, "defs");
  defs1.setAttribute("id", "defs1");
  var group_tag1 = document.createElementNS(svgns, "g");
  group_tag1.setAttribute("id", "myFish");
  group_tag1.setAttribute("transform", "translate(570, 300) scale(-1, 1)");

  var path1 = document.createElementNS(svgns, "path");
  path1.setAttribute("d", "M48.58,11.699c-9.45,6.647-3.105,24.561,2.375,31.702c0.55,0.717,3.132-0.471,2.898-0.777 \
  			c-2.838-3.697-5.008-8.882-6.061-13.396c-1.164-4.991-1.963-13.92,3.013-17.421C52.006,10.962,49.1,11.333,48.58,11.699 \
  			L48.58,11.699z");

  var path2 = document.createElementNS(svgns, "path");
  path2.setAttribute("d", "M52.636,42.855c-5.209-4.551-6.333-14.027-14.01-15.353c-0.87-0.15-3.413,1.234-1.79,1.515 \
  			c6.911,1.193,8.304,10.757,13.103,14.95C50.681,44.615,53.378,43.504,52.636,42.855L52.636,42.855z");

  var path3 = document.createElementNS(svgns, "path");
  path3.setAttribute("d", "M37.868,27.553c-4.124,0.387-7.623,2.562-11.406,4.114c-4.95,2.031-10.939,3.272-16.265,3.382 \
  			c-1.625,0.033-2.25,2.093-0.275,2.052c4.512-0.093,8.646-1.213,12.994-2.302c4.905-1.228,9.693-4.727,14.678-5.194 \
  			C39.188,29.456,39.85,27.367,37.868,27.553L37.868,27.553z");

  var path4 = document.createElementNS(svgns, "path");
  path4.setAttribute("d", "M12.151,34.859c-8.811,1.55-10.527-6.716-7.757-13.571c1.519-3.757,4.271-9.137,9.214-7.801 \
  			c3.531,0.954,7.426,2.075,10.709,3.666c4.456,2.16,7.662,4.845,12.804,4.146c0.941-0.128,2.029-0.643,2.725-1.258 \
  			c3.848-3.408,6.175-6.978,11.493-8.432c1.692-0.463,1.432-1.449-0.264-0.985c-2.752,0.753-5.787,1.645-7.931,3.639 \
  			c-1.312,1.22-2.478,2.569-3.725,3.854c-3.21,3.31-6.197,1.394-9.418-0.409c-3.777-2.114-7.31-3.173-11.416-4.383 \
  			c-3.504-1.033-5.373-1.879-8.951-0.76c-6.499,2.031-8.997,9.914-8.891,16.026c0.051,2.906-0.356,5.517,2.895,6.803 \
  			c2.612,1.034,5.252,1.105,7.996,0.623C12.824,35.806,14.182,34.501,12.151,34.859L12.151,34.859z");

  var path5 = document.createElementNS(svgns, "path");
  path5.setAttribute("d", "M1.884,27.574c1.817,0.059,3.581,1.247,5.426,1.509c1.933,0.275,3.837-0.16,5.395-1.34 \
  			c1.235-0.936-1.674-0.686-2.261-0.241c-1.707,1.294-4.852-1.206-6.723-1.267c-0.706-0.023-1.466,0.125-2.049,0.549 \
  			C1.237,27.101,1.286,27.555,1.884,27.574L1.884,27.574z");
  
  /* Creation of eye for the fish */
  var eye = document.createElementNS(svgns, "circle");
  eye.setAttribute("r", "4px");
  eye.setAttribute("cx", "8.5px");
  eye.setAttribute("cy", "19px");
  eye.setAttribute("fill", "black");

  group_tag1.appendChild(path1);
  group_tag1.appendChild(path2);
  group_tag1.appendChild(path3);
  group_tag1.appendChild(path4);
  group_tag1.appendChild(path5);
  group_tag1.appendChild(eye);

  defs1.appendChild(group_tag1);

  /* Creation of the path for the fish to animate upon */
  var fish_path = document.createElementNS(svgns, "path");
  fish_path.setAttribute("id", "fishPath");
  fish_path.setAttribute("d", "M00 -04 H 520");
  //fish_path.setAttribute("d", "M00 -04 H 520 V -2 H 10");
  fish_path.setAttribute("fill", "none");
  //fish_path.setAttribute("stroke", "black");
  var use1 = document.createElementNS(svgns, "use");
  use1.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myFish");
  use1.setAttribute("class", "fish");

  var ani1 = document.createElementNS(svgns, "animateMotion");
  ani1.setAttributeNS(null, "begin", "2s");
  ani1.setAttributeNS(null, "dur", "8s");
  ani1.setAttributeNS(null, "repeatCount", "1");
  ani1.setAttributeNS(null, "fill", "freeze");

  var mpath1 = document.createElementNS(svgns, "mpath");
  mpath1.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#fishPath");
  ani1.appendChild(mpath1);
  use1.appendChild(ani1);

  /* Creation of the path for the second fish to follow upon*/
  var fish_path1 = document.createElementNS(svgns, "path");
  fish_path1.setAttribute("id", "fishPath1");
  fish_path1.setAttribute("d", "M00 -04 H 450");
  fish_path1.setAttribute("fill", "none");
  //fish_path1.setAttribute("stroke", "black");
  var use2 = document.createElementNS(svgns, "use");
  use2.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myFish");
  use2.setAttribute("class", "fish");
  use2.setAttributeNS(null, "x", "80px");
  use2.setAttributeNS(null, "y", "35px");

  var ani2 = document.createElementNS(svgns, "animateMotion");
  ani2.setAttributeNS(null, "begin", "2s");
  ani2.setAttributeNS(null, "dur", "8s");
  ani2.setAttributeNS(null, "repeatCount", "1");
  ani2.setAttributeNS(null, "fill", "freeze");

  var mpath2 = document.createElementNS(svgns, "mpath");
  mpath2.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#fishPath1");
  ani2.appendChild(mpath2);
  use2.appendChild(ani2);

  var defs2 = document.createElementNS(svgns, "defs");
  var group_tag2 = document.createElementNS(svgns, "g");
  group_tag2.setAttribute("id", "myPlant");
  group_tag2.setAttribute("transform", "translate(580, 384)");

  /* Creation of plants in the fish tank using path, dynamically */
  var path_plant = document.createElementNS(svgns, "path");
  path_plant.setAttribute("d", "M19.127,11.686c0.806,5.619-0.765,11.812-0.72,17.525c0.054,6.945-1.376,13.708-1.626,20.612c1.667,0,3.333,0,5,0 \
			c0.079-6.127-0.182-10.836,5.12-14.913c3.873-2.979,8.603-4.983,12.739-7.582c2.199-1.381,1.179-4.461-1.262-4.659 \
			c-3.886-0.314-6.022,2.852-8.922,4.894c-1.864,1.312-4.083,2.08-5.983,3.361c-0.934,0.165-1.158,0.518-0.672,1.06 \
			c-0.047-1.288,0.305-2.66,0.509-3.922c1.583-9.751-7.014-12.773-14.563-15.894c-0.443,1.607-0.886,3.214-1.329,4.821 \
			c4.323,1.5,8.262,3.85,12.673,5.121c0.991,0.286,2.371-0.151,2.823-1.149c2.582-5.697-0.575-11.492,2.431-17.188 \
			c1.503-2.849-2.812-5.376-4.317-2.523c-1.004,1.902-1.875,3.807-2.135,5.975c-0.42,3.507,1.19,7.933-0.296,11.213 \
			c0.941-0.383,1.882-0.766,2.823-1.149c-4.399-1.268-8.355-3.623-12.673-5.121c-3.109-1.079-4.223,3.625-1.329,4.821 \
			c5.508,2.277,12.008,3.963,10.84,11.161c-0.431,2.656-1.231,6.116,1.156,8.036c2.083,1.676,4.659,0.279,6.582-0.945 \
			c1.938-1.234,3.98-2.235,5.982-3.361c1.834-1.032,4.171-4.391,6.399-4.211c-0.42-1.553-0.841-3.106-1.262-4.659 \
			c-5.204,3.269-10.953,5.785-15.571,9.897c-5.318,4.736-4.681,10.429-4.765,16.915c-0.042,3.233,4.884,3.211,5,0 \
			c0.25-6.901,1.556-13.673,1.626-20.612c0.063-6.225,1.425-12.689,0.541-18.854C23.493,7.175,18.675,8.533,19.127,11.686 \
			L19.127,11.686z");

  group_tag2.appendChild(path_plant);

  defs2.appendChild(group_tag2);
  
  /* Creation of use tags to create multiple plants in the fish tank */
  var use_plant1 = document.createElementNS(svgns, "use");
  use_plant1.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant1.setAttributeNS(null, "x", "295px");
  use_plant1.setAttributeNS(null, "y", "-3px");

  var use_plant2 = document.createElementNS(svgns, "use");
  use_plant2.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant2.setAttributeNS(null, "x", "245px");
  use_plant2.setAttributeNS(null, "y", "-3px");

  var use_plant3 = document.createElementNS(svgns, "use");
  use_plant3.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant3.setAttributeNS(null, "x", "195px");
  use_plant3.setAttributeNS(null, "y", "-3px");

  var use_plant4 = document.createElementNS(svgns, "use");
  use_plant4.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant4.setAttributeNS(null, "x", "145px");
  use_plant4.setAttributeNS(null, "y", "-3px");

  var use_plant5 = document.createElementNS(svgns, "use");
  use_plant5.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant5.setAttributeNS(null, "x", "95px");
  use_plant5.setAttributeNS(null, "y", "-3px");

  var use_plant6 = document.createElementNS(svgns, "use");
  use_plant6.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant6.setAttributeNS(null, "x", "45px");
  use_plant6.setAttributeNS(null, "y", "-3px");

  var use_plant7 = document.createElementNS(svgns, "use");
  use_plant7.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant7.setAttributeNS(null, "x", "-5px");
  use_plant7.setAttributeNS(null, "y", "-3px");

  var use_plant8 = document.createElementNS(svgns, "use");
  use_plant8.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant8.setAttributeNS(null, "x", "-55px");
  use_plant8.setAttributeNS(null, "y", "-3px");


  var use_plant9 = document.createElementNS(svgns, "use");
  use_plant9.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant9.setAttributeNS(null, "x", "-105px");
  use_plant9.setAttributeNS(null, "y", "-3px");

  var use_plant10 = document.createElementNS(svgns, "use");
  use_plant10.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant10.setAttributeNS(null, "x", "-155px");
  use_plant10.setAttributeNS(null, "y", "-3px");

  var use_plant11 = document.createElementNS(svgns, "use");
  use_plant11.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant11.setAttributeNS(null, "x", "345px");
  use_plant11.setAttributeNS(null, "y", "-3px");

  var use_plant12 = document.createElementNS(svgns, "use");
  use_plant12.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant12.setAttributeNS(null, "x", "395px");
  use_plant12.setAttributeNS(null, "y", "-3px");

  var use_plant13 = document.createElementNS(svgns, "use");
  use_plant13.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
  use_plant13.setAttributeNS(null, "x", "445px");
  use_plant13.setAttributeNS(null, "y", "-3px");

  /* Creation of rectangular buttons which serve as an interactive menu. Clicking on the rectangle; not the text, fires the events which has some animation integrated. */
  var g2 = document.createElementNS(svgns, "g");
  var rect_button = document.createElementNS(svgns, "rect");
  rect_button.setAttribute("x", "220px");
  rect_button.setAttribute("y", "240px");
  rect_button.setAttribute("width", "110px");
  rect_button.setAttribute("height", "50px");
  rect_button.setAttribute("rx", "30px");
  rect_button.setAttribute("ry", "10px");
  rect_button.setAttribute("class", "button");
  rect_button.setAttribute("onclick", "pet();");

  var text_button = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text_button.setAttribute("x", "239px");
  text_button.setAttribute("y", "269px");
  text_button.setAttribute("class", "Text");
  //text_button.setAttribute("onclick", "pet();");
  text_button.setAttribute("fill", "white");
  text_button.setAttribute("stroke", "white");
  text_button.setAttribute("font-size", "18px");

  text_button.textContent = "Pet me!";

  g2.appendChild(rect_button);
  g2.appendChild(text_button);

  var g3 = document.createElementNS(svgns, "g");
  var rect_button1 = document.createElementNS(svgns, "rect");
  rect_button1.setAttribute("id", "rect_1");
  rect_button1.setAttribute("x", "680px");
  rect_button1.setAttribute("y", "40px");
  rect_button1.setAttribute("width", "110px");
  rect_button1.setAttribute("height", "50px");
  rect_button1.setAttribute("rx", "30px");
  rect_button1.setAttribute("ry", "10px");
  rect_button1.setAttribute("class", "button");
  rect_button1.setAttribute("onclick", "doResize();");

  var text_button1 = document.createElementNS(svgns, "text");
  text_button1.setAttribute("x", "689px");
  text_button1.setAttribute("y", "70px");
  text_button1.setAttribute("class", "Text");
  //text_button1.setAttribute("onclick", "doResize();");
  text_button1.setAttribute("fill", "white");
  text_button1.setAttribute("stroke", "white");
  text_button1.setAttribute("font-size", "17px");

  text_button1.textContent = "Resize Tank!!";
  g3.appendChild(rect_button1);
  g3.appendChild(text_button1);

  var g4 = document.createElementNS(svgns, "g");
  g4.setAttribute("id", "g4");
  var rect_button2 = document.createElementNS(svgns, "rect");
  rect_button2.setAttribute("id", "rect_2");
  rect_button2.setAttribute("x", "1150px");
  rect_button2.setAttribute("y", "240px");
  rect_button2.setAttribute("width", "110px");
  rect_button2.setAttribute("height", "50px");
  rect_button2.setAttribute("rx", "30px");
  rect_button2.setAttribute("ry", "10px");
  rect_button2.setAttribute("class", "button");
  rect_button2.setAttribute("onclick", "resizeBack();");

  var text_button2 = document.createElementNS(svgns, "text");
  text_button2.setAttribute("id", "text2");
  text_button2.setAttribute("x", "1163px");
  text_button2.setAttribute("y", "270px");
  text_button2.setAttribute("class", "Text");
  //text_button2.setAttribute("onclick", "resizeBack();");
  text_button2.setAttribute("fill", "white");
  text_button2.setAttribute("stroke", "white");
  text_button2.setAttribute("font-size", "17px");

  text_button2.textContent = "Resize Back!";
  g4.appendChild(rect_button2);
  g4.appendChild(text_button2);

  /* Appending tags to the svg tag to load the SVG content on to the page */
  svg.appendChild(defs_gradient);
  svg.appendChild(fish_tank);
  svg.appendChild(defs1);
  svg.appendChild(fish_path);
  svg.appendChild(use1);
  svg.appendChild(fish_path1);
  svg.appendChild(use2);
  svg.appendChild(g2);
  svg.appendChild(g3);
  svg.appendChild(g4);
  svg.appendChild(defs2);
  svg.appendChild(use_plant1);
  svg.appendChild(use_plant2);
  svg.appendChild(use_plant3);
  svg.appendChild(use_plant4);
  svg.appendChild(use_plant5);
  svg.appendChild(use_plant6);
  svg.appendChild(use_plant7);
  svg.appendChild(use_plant8);
  svg.appendChild(use_plant9);
  svg.appendChild(use_plant10);
  svg.appendChild(use_plant11);
  svg.appendChild(use_plant12);
  svg.appendChild(use_plant13);

  /* Appending the SVG tag to the body of the page */
  body.appendChild(svg);

}

/* This function simulates my idea of petting a fish, which is when you "touch" (pet) a fish, it rotates 360* relative to it's position. SMIL animation is used here. */
function pet() {

  var fishSVG = document.getElementsByTagName('svg')[0];
  var svgns = "http://www.w3.org/2000/svg";
  var myFish = document.getElementById('myFish');
  var rotate = document.createElementNS(svgns, "animateTransform");
  rotate.setAttributeNS(null, "attributeName", "transform");
  rotate.setAttributeNS(null, "type", "rotate");
  rotate.setAttributeNS(null, "begin", "0s");
  rotate.setAttributeNS(null, "from", "0");
  rotate.setAttributeNS(null, "to", "360");
  rotate.setAttributeNS(null, "dur", "4s");
  rotate.setAttributeNS(null, "additive", "sum");
  rotate.setAttributeNS(null, "repeatCount", "1");
  myFish.appendChild(rotate);

  fishSVG.appendChild(myFish);
  rotate.beginElement();
}

/* This function is used to resize the tank width back to it's original position. Javascript animation was used to 
decrease the width of the tank by 1 pixel till it reaches 700px. The rectangular button to the right side is animated too. */
function delayResizeBackTheTank() {

  var svgns = "http://www.w3.org/2000/svg";
  var a = document.getElementById("tank");
  var b = a.getAttribute("width");
  var x_rect = document.getElementById("rect_2");
  //var x_rect1 = document.getElementById("rect_1");
  var x_value = x_rect.getAttribute("x");
  var x_text = document.getElementById("text2");
  var text_value = x_text.getAttribute("x");
  //var x_value1 = x_rect.getAttribute("x");
  b = parseInt(b);
  text_value = parseInt(text_value);
  x_value = parseInt(x_value);
  if (b > 700) {
    b = b - 1;
    x_value = x_value - 1;
    text_value = text_value - 1;
    setTimeout("delayResizeBackTheTank()", 50);
    a.setAttribute("width", b + "px");
    x_rect.setAttribute("x", x_value + "px");
    x_text.setAttribute("x", text_value + "px");
  }

  /* Removal of the plant as the size of the plant decreases */
  if (b == 785) {
    console.log("removeChild");
    var remove_use_plant17 = document.getElementById("use17");
    remove_use_plant17.parentNode.removeChild(remove_use_plant17);
  }

  /* Removal of the plant as the size of the plant further decreases. */
  if (b == 735) {
    console.log("remove child 2");
    var remove_use_plant16 = document.getElementById("use16");
    remove_use_plant16.parentNode.removeChild(remove_use_plant16);

  }

}

/* This function is used to resize the tank width 100px more than it's original size. Javascript animation was used to 
increase the width of the tank by 1 pixel till it reaches 800px. The rectangular button to the right side is animated too. */
function delayResizeTank() {
  console.log("Akash");
  var svgns = "http://www.w3.org/2000/svg";
  var a = document.getElementById("tank");
  var b = a.getAttribute("width");
  var x_rect = document.getElementById("rect_2");
  var x_text = document.getElementById("text2");
  var text_value = x_text.getAttribute("x");
  //var x_rect1 = document.getElementById("rect_1");
  var x_value = x_rect.getAttribute("x");
  //var x_value1 = x_rect.getAttribute("x");
  console.log(x_value);

  x_value = parseInt(x_value);
  text_value = parseInt(text_value);
  b = parseInt(b);
  if (b < 800) {
    x_value = x_value + 1;
    text_value = text_value + 1;
    b = b + 1;
    setTimeout("delayResizeTank()", 50);
    a.setAttribute("width", b + "px");
    x_rect.setAttribute("x", x_value + "px");
    x_text.setAttribute("x", text_value + "px");
  }

  /* Creation of an extra plant */
  if (b == 735) {
    var use_plant16 = document.createElementNS(svgns, "use");
    use_plant16.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
    use_plant16.setAttributeNS(null, "id", "use16");
    use_plant16.setAttributeNS(null, "x", "495px");
    use_plant16.setAttributeNS(null, "y", "-3px");

    document.getElementsByTagName("svg")[0].appendChild(use_plant16);
  }
  /* Creation of another plant */
  if (b == 785) {
    var use_plant17 = document.createElementNS(svgns, "use");
    use_plant17.setAttributeNS("http://www.w3.org/1999/xlink", "xLink:href", "#myPlant");
    use_plant17.setAttributeNS(null, "id", "use17");
    use_plant17.setAttributeNS(null, "x", "545px");
    use_plant17.setAttributeNS(null, "y", "-3px");
    document.getElementsByTagName("svg")[0].appendChild(use_plant17);
  }
}

/* This is fired when the rectangular button is clicked which in turn calls the delayResizeTank() which animates to increase the width of the fish tank */
function doResize() {
  if (!resizeOn) {
    resizeOn = 1;
    delayResizeTank();
  }
}

/* This is fired when the rectangular button is clicked which in turn calls the delayResizeBackTheTank() which animates to decrease the width of the tank back to it;s original state. */
function resizeBack() {
  if (resizeOn) {
    resizeOn = 0;
    delayResizeBackTheTank();
  }

}