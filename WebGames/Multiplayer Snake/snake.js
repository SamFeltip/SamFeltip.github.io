var snakeObj = function(x, y, c){
    this.maxLength = 40
    this.length = this.maxLength
    this.speed = 5
    this.pieceSize = this.speed
    this.name = names[Math.floor(random(0,names.length))]

    this.ID = c
    this.x = x
    this.y = y
    this.pieces = []
    this.playing = true
    this.moving = false
    this.randomDecayDev = 1
    this.decomposeTime = 100 * this.randomDecayDev
    this.direction = {x: 0, y: 0}

    for(l = 0 ; l <= this.length ; l++){
        this.pieces.push({x: this.x - this.pieceSize*l, y: this.y, decay: false, decayTime: this.decomposeTime})
    }

    this.colour = color(random(0,255),random(0,255),random(0,255))
    this.inputMethod = inputs[this.ID]

}

snakeObj.prototype.draw = function(){

    fill(this.colour)
    
    for(p in this.pieces){        
        rect(this.pieces[p].x, this.pieces[p].y, this.pieceSize, this.pieceSize)
    }
    if(this.length > 2){
    
        textSize(30)
        text(this.name, this.pieces[0].x, this.pieces[0].y)
    }
    
}

snakeObj.prototype.move = function(val){
    for(m in this.inputMethod){
        if(val == this.inputMethod[m]){
            switch(val){
                case this.inputMethod.up:
                    this.moving = true
                    this.direction = {x: 0, y: -1}
                break
                case this.inputMethod.left:
                    this.moving = true
                    this.direction = {x: -1, y: 0}
                break
                case this.inputMethod.down:
                    this.moving = true
                    this.direction = {x: 0, y: 1}
                break
                case this.inputMethod.right:
                    this.moving = true
                    this.direction = {x: 1, y: 0}
                break
            }
        }
    }
}

snakeObj.prototype.update = function(){
    for(i of this.pieces){

        if(i.decay == true){
            i.decayTime -= Math.random()*this.randomDecayDev
        }
        if(i.decayTime < 0){
            i.x = -10
            i.y = -10
        }
    }

    if(this.moving && this.length > 2){
        if(this.pieces[0].y < 0){
            this.pieces[0].y = canvasProperties.h-this.pieceSize
        }
        if(this.pieces[0].y > canvasProperties.h){
            this.pieces[0].y = this.pieceSize
        }
        if(this.pieces[0].x < 0){
            this.pieces[0].x = canvasProperties.w-this.pieceSize
        }
        if(this.pieces[0].x > canvasProperties.w){
            this.pieces[0].x = this.pieceSize
        }

        for(i = this.length ; i > 0 ; i--){
            this.pieces[i] = JSON.parse(JSON.stringify(this.pieces[i-1]))
        }

        this.pieces[0].x += this.direction.x*this.pieceSize
        this.pieces[0].y += this.direction.y*this.pieceSize
        
        for(s in snakes){
            if(s != this.ID){

                    //collide with other players
                    for(f = 0 ; f < snakes[s].length ; f++){
                        if(this.pieces[0].x == snakes[s].pieces[f].x && this.pieces[0].y == snakes[s].pieces[f].y && snakes[s].playing == true){
                            snakes[s].length = f
                            for(i = snakes[s].length ; i <= snakes[s].maxLength ; i++){
                                snakes[s].pieces[i].decay = true
                            }
                            
                            
                        }
                    }
                    
                    //dead pieces
                    for(d = snakes[s].length ; d < snakes[s].maxLength ; d++){
                        if(this.pieces[0].x == snakes[s].pieces[d].x && this.pieces[0].y == snakes[s].pieces[d].y && snakes[s].playing == true){
                            console.log("eat")
                            snakes[s].pieces[d].x = -10
                            snakes[s].pieces[d].y = -10
                            this.length++
                            this.maxLength = Math.max(this.length, this.maxLength)
                            this.pieces.push({x: -10, y: -10, decay: true, decayTime: this.decomposeTime})
                        }
                    }
            }else{
                // collide with yourself
                for(p = 1 ; p < this.length ; p++){
                    if(this.pieces[0].x == this.pieces[p].x && this.pieces[0].y == this.pieces[p].y){
                        this.length = p
                        for(i = this.length ; i <= this.maxLength ; i++){
                            this.pieces[i].decay = true
                        }
                        
                    }
                }
            }
        }
    }
    if(this.length <= 2){
        for(p of this.pieces){

            p.decay = true
        }
    }
}
