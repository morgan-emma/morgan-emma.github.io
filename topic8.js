@keyframes orbit {
  from 	{ transform: rotate(360deg); }
	to 	{ transform: rotate(0); }
}

html, body {
	height: 100%;
	width: 100%;
	font-family: arial;
	color: #fff;
}

body {
	background: black;
}

#earth {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: 0px;
	margin-left: -50px;	
	height: 100px;
	width: 100px;
	border-radius: 100%;
	
	background: radial-gradient(circle, #00cc00, #0000ff);
}

#moonOrbit {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -75px;
	margin-left: -125px;
	height: 250px;
	width: 250px;
	border-radius: 100%;
}

.animate {
  animation: orbit 6.4s linear infinite;
  animation-play-state: paused;
}

#moon {
	position: absolute;
	top: 50%;
	right: 0;
	width: 18px;
	height: 18px;
  background: #d0d1c0;
  border-radius: 100%;
}

#title, #button {
	position: relative;
	top: 10%;
	left: 10%;
}
