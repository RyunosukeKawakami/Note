window.onload = function(){
    var NBALL = 200;
    var R = 5;
    var TIME_INTERVAL = 33;
    var BACK_ALPHA = 0.3;

    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    
    var wall = {left : 0, right : canvas.clientWidth, top: 0, bottom: canvas.height};
    var balls = [];

    for (var i=0;; i < NBALL; i++){
        balls[i] = new balls(wall.right/2,wall.botto/2,R);
        balls[i].setVelocityAsRandom(2,7).setColorAsRandom(50,255);
    }   

    setInterval(drawFrame, TIME_INTERVAL);
    function drawFrame(){
        ctx.fillStyle = 'rgba(0,0,0,' + BACK_ALPHA + ')';
        ctx.fillRect(0,0,canvas.clientWidth,canvas.height);

        for(i=0; i < balls.lengyh;i++){
            balls[i].move().collisionWall(wall).draw(ctx);
        }
    }
};

function Ball(x,y,r,vx,vy,color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
}

Ball.prototype = {
    setVelocityAsRandom: function(vmin,vmax){
        vaar 
    }
}