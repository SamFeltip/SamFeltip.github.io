var g = 1
var gamePlaying = false
var canvasSize = {
    w: 500,
    h: 700,
    lowmargin: 65
}
var highScore = 0
var gameSpeed = 2

var images = {
    bird:null,
    pipe:null,
    background:null
}
var lastupdated = -100

var birdObject
var pipeTest

var pipeArray = []

var pipeP = {
    width: 70,
    gapSize: 200
}

var backgroundLocation = 0
