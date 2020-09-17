var ball;
var database, dbPosition;
var dbReference;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    dbReference = database.ref('Ball/Position');
    dbReference.on("value", readPosition);
    console.log(database);

}

    function readPosition(data)
    {
        dbPosition = data.val();
        ball.x = dbPosition.xAxis;
        ball.y = dbPosition.yAxis;
        console.log(ball.x + " "+ ball.y)
    }

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('Ball/Position').set(
        {
            'xAxis':dbPosition.x + x,
            'yAxis':dbPosition.y + y
        }
    )
}
