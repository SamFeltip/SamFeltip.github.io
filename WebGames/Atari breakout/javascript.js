function setup(){
    createCanvas(500,600)
    reset()
    console.log(test)
}

function draw(){

    background(backCol)

    //draw text
    fill(255,0,0)
    textAlign(CENTER)
    text(score, 250, 450)
    fill(170)
    textSize(50)
    text("ATARI BREAKOUT",250,300)

    //draw bar
    fill(bar.colour)
    rect(bar.x,bar.y,bar.w,bar.h)
    fill(255,0,0)
    rect(bar.x+bar.w/2-3,bar.y,6,bar.h)

    //draw ball
    fill(ball.colour)
    ellipse(ball.x, ball.y, ball.size)

    //draw bricks
    for(item of bricks){
        item.draw()
    }

    bar.x = mouseX - bar.w/2
    if(disco == true){
        for(i = 0 ; i < 50 ; i++){
            textSize(Math.random()*100)
            text("AGHHHHHHH",Math.random()*500, Math.random()*600)
        }
        ball.size = 50
        backCol = color(Math.random()*255,Math.random()*255,Math.random()*255)
    }
    if(gameStarted == false){
        ball.x = mouseX
    }else{
        if(collisions() > -1){
            ball.vy = -ball.vy
            removed = bricks.splice(i,1)
            backCol = 200
            switch(removed[0].type){
                case "points":
                    score += removed[0].value
                    disco = false
                    ball.size = 10
                    
                break
                case "size":
                    bar.w += removed[0].value*2
                    score++
                    disco = false
                    ball.size = 10
                break
                case "speed":
                    ball.vy += -removed[0].value*2
                    disco = true
                break
            }
            bricksBroken++
        }

        ball.y -= ball.vy
        ball.x += ball.vx
    }

    if(bricksBroken >= 45){
        alert("you win")
        score++
        reset()
    }
    if(ball.y < 0){
        alert("you win")
        reset()
    }
    if(ball.y > 600){
        alert("you loose")
        score = 0
        reset()
    }
}

function mousePressed(){
    gameStarted = true
    ball.vx = Math.random()*5
}

function collisions(){

    if(collideLineCircle(500,0,500,600,ball.x,ball.y,ball.size) || collideLineCircle(0,0,0,600,ball.x,ball.y,ball.size)){
        ball.vx = -ball.vx
    }

    if(collideLineCircle(bar.x, bar.y, bar.x+bar.w, bar.y, ball.x, ball.y, ball.size)){
        ball.vy = -ball.vy
        ball.vx = (ball.x-(bar.x+bar.w/2))/7
    }

    for(i in bricks){
        if(collideRectCircle(bricks[i].x,bricks[i].y,bricks[i].w,bricks[i].h,ball.x,ball.y,ball.size)){
            return i
        }
    }
    return -1
}

function reset(){
    bricks = []
    bricksBroken = 0
    for(x = 0 ; x < 9 ; x++){
        for(y = 0 ; y < 5 ; y++){
            bricks.push(new brick(x*brickS.w+x*brickS.x+brickS.x,y*brickS.h+y*brickS.y+brickS.y,Math.floor(Math.random()*5)+1, typeDistribution[Math.floor(Math.random()*20)]))
        }
    }
    ball.vx = Math.floor(Math.random()*10)
    gameStarted = false
    disco = false
    ball.vy = 2
    backCol = 200
    ball.y = bar.y-ball.size
    ball.size = 10
}