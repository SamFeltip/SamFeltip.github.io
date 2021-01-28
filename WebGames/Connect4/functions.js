var date = new Date()
var now = date.getTime()
var lastRefresh = 0
var refreshRate = 100

var board = []
var Player = 1

var bg = ['DarkRed','GoldenRod']
var Colours = [200,'red','yellow']
var heightArray = []

var games = [0,0]

var myHeight = 6
var myWidth = 7

var CheckArray = [] //Starting North, Clockwise (8)

var CheckCount = 0
var Winner = 0

var Size = 100
var MarginX
var MarginY = 100

function setup(){
    myHeight = 6
    myWidth = 7

    createCanvas(windowWidth, windowHeight);

    MarginX = floor(windowWidth/2/100)*100-Size*3
    for(i=0;i<myWidth;i++){

		heightArray[i] = 0
        board[i] = []

		for(j=0;j<myHeight;j++){
			board[i][j] = 0
		}
    }
    
    Player = floor(random(1,3))
    Colours[0] = bg[Player-1]
}

function draw(){
    date = new Date()
    now = date.getTime()

    strokeWeight(0)
    fill(0)

    if(now - lastRefresh > refreshRate){
        lastRefresh = now
        background(bg[Player-1]);

        //draw big board (decorative)
        fill('DarkBlue')
        rect(MarginX,MarginY,myWidth*Size,myHeight*Size)
        triangle(MarginX,MarginY+Size*myHeight,MarginX-Size*1.5,MarginY+Size*myHeight,MarginX,MarginY+Size*myHeight-Size)
        triangle(MarginX+Size*myWidth,MarginY+Size*myHeight,MarginX+Size*myWidth,MarginY+Size*myHeight-Size,MarginX+Size*myWidth+Size*1.5,MarginY+Size*myHeight)

        for(x=0;x<myWidth;x++){
            for(y=0;y<myHeight;y++){
                //draw tiles according to their given color
                fill(Colours[board[x][y]])
                ellipse(MarginX+x*Size+Size/2,MarginY+y*Size+Size/2,Size*0.6)
                
                //Numbers for columns (decorative)
                fill(255)
                textSize(Size/2)
                text(x,MarginX+x*Size+Size/3,MarginY-MarginY/10)

            }
                fill(0)
        }
        
        //Outer Lines
        line(MarginX+myWidth*Size,MarginY,MarginX+myWidth*Size,MarginY+Size*myHeight)
        line(MarginX,MarginY+myHeight*Size,MarginX+Size*myWidth,MarginY+myHeight*Size)
        
    
    }
    //games won
    fill(Colours[1])
    textSize(Size/2)
    text(games[0], 100, 100)
    fill(255)
    text("-", 132, 95)
    fill(Colours[2])
    text(games[1], 152, 100)

}

function findPosition(){

    posX = floor(mouseX/Size)-MarginX/100
    return {x: posX, y: myHeight-heightArray[posX]-1}
}

function placePiece(p){
    console.log(p)
    board[p.x][p.y] = Player //assigns the grid space on the board to the current player ID
    heightArray[p.x]++ //Inc height Array for this column
}

function checkWin(p){
    
    //check hoz

    var currentSize = 0
    var maxSize = 0

    for(checkX = Math.max(0,p.x-3) ; checkX < Math.min(Math.max(0,p.x)+3, myWidth) ; checkX++){
        board[checkX][p.y] == Player ? currentSize++ : currentSize=0
        if (currentSize > maxSize){maxSize = currentSize}
    }

    console.log("&" + maxSize)

    //check ver
    currentSize = 0
    for(checkY = Math.max(0,p.y-3) ; checkY <= Math.min(Math.max(0,p.y)+3, myHeight) ; checkY++){
        board[p.x][checkY] == Player ? currentSize++ : currentSize=0
        if (currentSize > maxSize){maxSize = currentSize}
    }

    console.log("&" + maxSize)

    //check di left

    currentSize = 0
    for(checkDiff = -4 ; checkDiff < 4 ; checkDiff++){

        if((p.x+checkDiff) >= 0 && (p.x+checkDiff) < myWidth && (p.y+checkDiff) >= 0 && (p.y+checkDiff) < myHeight){
            
            checkX = p.x+checkDiff
            checkY = p.y+checkDiff

            board[checkX][checkY] == Player ? currentSize++ : currentSize=0
            if (currentSize > maxSize){maxSize = currentSize}
            console.log(maxSize)
        }


        //console.log((p.x+checkDiff) + ", " + (p.y+checkDiff))
    }

    console.log("&" + maxSize)

    //check di right

    currentSize = 0
    for(checkDiff = -4 ; checkDiff < 4 ; checkDiff++){

        if((p.x+checkDiff) >= 0 && (p.x+checkDiff) < myWidth && (p.y-checkDiff) >= 0 && (p.y-checkDiff) < myHeight){

            console.log((p.x+checkDiff) + ", " + (p.y-checkDiff))
            
            checkX = p.x+checkDiff
            checkY = p.y-checkDiff

            board[checkX][checkY] == Player ? currentSize++ : currentSize=0
            if (currentSize > maxSize){maxSize = currentSize}
        }
    }

    return maxSize > 3;
}

function mousePressed() {
	
    position = findPosition()
	
	if (heightArray[position.x] < myHeight){ //makes sure the piece isn't played over the top of the board
		
		placePiece(position)
		
		if (checkWin(position)){
            console.log(Player + " won")
            fill(0)
            textSize(10)
            games[Player-1]++
            alert("Player" + Player + " Has Won")
            reset()
		}else{
			Player = 3-Player //Swap Player
			Colours[0] = bg[Player-1]
		}	
	}
}

function test(){
    console.log("test")
}

function reset(){
    for(i=0;i<myWidth;i++){

		heightArray[i] = 0
        board[i] = []
        heightArray[i] = 0

		for(j=0;j<myHeight;j++){
            board[i][j] = 0
            
		}
    }
}