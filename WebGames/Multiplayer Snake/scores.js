var scoreTable = function(){
    this.x = 10
    this.y = 10
    this.textSize = 10
}

scoreTable.prototype.draw = function(){
    textSize(this.textSize)
    fill(0)
    for(i = 0 ; i < snakes.length ; i++){
        text(snakes[i].length, this.x, i * this.textSize + this.textSize + this.y)
        text(snakes[i].maxLength, this.x + this.textSize * 2, i*this.textSize+this.textSize + this.y)
    }

}

scoreTable.prototype.update = function(){

}