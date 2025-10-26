//Constants
var FRAME_RATE = 30;
var leftPressed = false;
var rightPressed = false;
var GRAV = 1.4;
var jumping = false;
var attacking = false;
var attackTimer = 0;
var code = 0;

//Dictionaries or whatever these are called
var gPlayer = {
    "x": 100,
    "y": 100,
    "velX": 0,
    "velY": 0,
    "width": 50,
    "height": 50,
    "maxVel": 0.5,
    "accel": 0.02,
    "alive": true,
    "colour": "Blue"
}
var playerSword = {
    "active": false,
    "x": 0,
    "y": 0,
    "width": 50,
    "height": 5,
    "direction": 0
}
var swordHitBox = {
    "active": false,
    "x": 0,
    "y": 0,
    "width": 40,
    "height": 80
}

//1-1
var ground1 = {
    "x": -2000, "y": 300, "width": 5650, "height": 1000, "colour": "Green"}
var wallLeft = {
    "x": -1000, "y": -700, "width": 100, "height": 1000, "colour": "lightblue"}
var block1 = {
    "x": 500, "y": 100, "width": 50, "height": 50, "colour": "brown"}
var blockLine1 = {
    "x": 700, "y": 100, "width": 250, "height": 50, "colour": "brown"}
var highBlock1 = {
    "x": 850, "y": -100, "width": 50, "height": 50, "colour": "orange"}
var pipe1 = {
    "x": 1100, "y": 200, "width": 100, "height": 100, "colour": "limegreen"}
var pipe2 = {
    "x": 1600, "y": 150, "width": 100, "height": 150, "colour": "limegreen"}
var pipe3 = {
    "x": 2000, "y": 100, "width": 100, "height": 200, "colour": "limegreen"}
var pipe4 = {
    "x": 2550, "y": 100, "width": 100, "height": 1200, "colour": "limegreen"}
var hiddenBlock = {
    "x": 2900, "y": 50, "width": 50, "height": 50, "colour": "lightblue"}
var ground2 = {
    "x": 3750, "y": 300, "width": 750, "height": 1000, "colour": "Green"}
var blockLine2 = {
    "x": 4050, "y": 100, "width": 150, "height": 50, "colour": "brown"}
var blockLine3 = {
    "x": 4200, "y": -100, "width": 250, "height": 50, "colour": "brown"}
var ground3 = {
    "x": 4650, "y": 300, "width": 3250, "height": 1000, "colour": "Green"}
var blockLine4 = {
    "x": 4750, "y": -100, "width": 200, "height": 50, "colour": "brown"}
var block2 = {
    "x": 4900, "y": 100, "width": 50, "height": 50, "colour": "orange"}
var blockLine5 = {
    "x": 5150, "y": 100, "width": 100, "height": 50, "colour": "brown"}
var block3 = {
    "x": 5450, "y": 100, "width": 50, "height": 50, "colour": "orange"}
var block4 = {
    "x": 5600, "y": 100, "width": 50, "height": 50, "colour": "orange"}
var block5 = {
    "x": 5750, "y": 100, "width": 50, "height": 50, "colour": "orange"}
var block6 = {
    "x": 5600, "y": -100, "width": 50, "height": 50, "colour": "orange"}
var block7 = {
    "x": 6150, "y": 100, "width": 50, "height": 50, "colour": "brown"}
var blockLine6 = {
    "x": 6300, "y": -100, "width": 150, "height": 50, "colour": "brown"}
var blockLine7 = {
    "x": 6650, "y": -100, "width": 200, "height": 50, "colour": "brown"}
var blockLine8 = {
    "x": 6700, "y": 100, "width": 100, "height": 50, "colour": "brown"}
var stairTop1 = {
    "x": 7850, "y": 100, "width": 50, "height": 200, "colour": "Olive"}
var ground4 = {
    "x": 8000, "y": 300, "width": 4000, "height": 1000, "colour": "Green"}
var pipe5 = {
    "x": 8400, "y": 200, "width": 100, "height": 1100, "colour": "limegreen"}
var blockLine9 = {
    "x": 8650, "y": 100, "width": 200, "height": 50, "colour": "brown"}
var pipe6 = {
    "x": 9200, "y": 200, "width": 100, "height": 100, "colour": "limegreen"}
var stairTop2 = {
    "x": 9700, "y": -100, "width": 50, "height": 400, "colour": "Olive"}
var poleBase = {
    "x": 10150, "y": 250, "width": 50, "height": 50, "colour": "Olive"}
var wallRight = {
    "x": 11150, "y": -700, "width": 50, "height": 1000, "colour": "lightblue"}
var flagPole = {
    "x": 10190, "y": -300, "width": 10, "height": 550, "colour": "black"}
var castleBase = {
    "x": 10350, "y": 175, "width": 250, "height": 125, "colour": "brown"}
var castleTop = {
    "x": 10400, "y": 125, "width": 150, "height": 50, "colour": "brown"}
var castleEntrance = {
    "x": 10450, "y": 200, "width": 50, "height": 100, "colour": "black"}

//Final boss room
var bossRoomGround = {
    "x": 12500, "y": 300, "width": 1050, "height": 1000, "colour": "Brown"}
var bossRoomWallL = {
    "x": 12500, "y": -100, "width": 50, "height": 1000, "colour": "Brown"}
var bossRoomWallR = {
    "x": 13500, "y": -100, "width": 50, "height": 1000, "colour": "Brown"}
var bossRoomCeil = {
    "x": 12500, "y": -150, "width": 1050, "height": 50, "colour": "Brown"}
var bossRoomBack = {
    "x": 11900, "y": -1700, "width": 2000, "height": 4000, "colour": "Black"}

//Secret Room
var secretFloor = {
    "x": -3200, "y": 300, "width": 1000, "height": 850, "colour": "Cyan"}
var secretWallL = {
    "x": -3200, "y": -250, "width": 50, "height": 550, "colour": "DarkBlue"}
var secretWallR = {
    "x": -2450, "y": -700, "width": 50, "height": 1000, "colour": "Limegreen"}
var secretPipe = {
    "x": -2550, "y": 200, "width": 100, "height": 100, "colour": "Limegreen"}
var secretBlock = {
    "x": -3000, "y": 150, "width": 350, "height": 150, "colour": "DarkBlue"}
var secretBack = {
    "x": -4200, "y": -1700, "width": 2500, "height": 3000, "colour": "Black"}
var secretCeil = {
    "x": -3000, "y": -250, "width": 350, "height": 50, "colour": "DarkBlue"}

var miniBoss = {
    "x":5500, "y": 225, "width": 75, "height": 75, "colour": "Purple", "speed": 4, 
        "right": false, "alive": true, "boss": false, "summonTimer": 3000
}
var projectile = {
    "x":-5000, "y": 5000, "width": 30, "height": 30, "colour": "Silver", "speed": 10, 
        "right": false, "alive": true, "boss": false, "yVel": 0
}
var bigBoss = {
    "x": 10500, "y": 0, "width": 150, "height": 150, "colour": "Black", "alive": true, "boss": true, 
    "health": 50, "angry": false, "state": 0, "targetX": 0, "targetY": 0, "invincible": false
}
var secretBoss = {
    "x": -2750, "y": 100, "width": 50, "height": 50, "colour": "Yellow", "alive": true, "boss": false, "angry": false
}
var biggerBoss = {
    "x": 13000, "y": 250, "width": 150, "height": 50, "colour": "Maroon", "alive": true, "boss": false, "angry": false,
    "health": 100, "state": 0, "invincible": false, "direction": 0
}

var renderBlocks = [flagPole, castleBase, castleTop, castleEntrance, ground1, wallLeft, block1, blockLine1, highBlock1,
    pipe1, pipe2, pipe3, pipe4, hiddenBlock, ground2, blockLine2, blockLine3, ground3, blockLine4, block2, blockLine5, 
    block3, block4, block5, block6, block7, blockLine6, blockLine7, blockLine8, stairTop1, ground4, pipe5, blockLine9,
    pipe6, stairTop2, poleBase, wallRight, bigBoss, miniBoss, projectile, secretBack, secretBlock, secretCeil,
    secretFloor, secretPipe, secretWallL, secretWallR, secretBoss];
var collBlocks = [ground1, wallLeft, block1, blockLine1, highBlock1, pipe1, pipe2, pipe3, pipe4, hiddenBlock,
    ground2, blockLine2, blockLine3, ground3, blockLine4, block2, blockLine5, block3, block4, block5, block6, block7,
    blockLine6, blockLine7, blockLine8, stairTop1, ground4, pipe5, blockLine9, pipe6, stairTop2, poleBase, wallRight, 
    secretBlock, secretCeil, secretFloor, secretPipe, secretWallL, secretWallR, bossRoomGround, bossRoomCeil, bossRoomWallL,
    bossRoomWallR];
var bossRoomBlocks = [bossRoomBack, bossRoomGround, bossRoomCeil, bossRoomWallL,
    bossRoomWallR, biggerBoss, gPlayer]
createStairs(6950, 4);
stairsCreate(7250, 4);
createStairs(7650, 4);
stairsCreate(8000, 4);
createStairs(9300, 8);

var hitboxes = [swordHitBox];
var enemies = [bigBoss, miniBoss, projectile, secretBoss, biggerBoss];

createKnight(850, 250);
createKnight(1700, 250);
createKnight(2300, 250);
createKnight(2400, 250);
createKnight(4200, -150);
createKnight(4300, -150);
createKnight(5100, 250);
createKnight(5000, 250);
createKnight(5850, 250);
createKnight(5950, 250);
createKnight(6450, 250);
createKnight(6550, 250);
createKnight(6650, 250);
createKnight(6750, 250);
createKnight(9000, 250);
createKnight(9100, 250);

//Create a staircase
function createStairs(x, height) {
    for (var i=height; i>0; i--) {
        var step = {"x": x+(height-i)*50, "y": 250-(height-i)*50, "width": i*50, "height": 50, "colour": "Olive"}
        renderBlocks.push(step);
        collBlocks.push(step);
    }
}
function stairsCreate(x, height) {
    for (var i=1; i<=height; i++) {
        var step = {"x": x, "y": 250-(height-i)*50, "width": i*50, "height": 50, "colour": "Olive"}
        renderBlocks.push(step);
        collBlocks.push(step);
    }
}

//Create a dude
function createKnight(x, y) {
    var knight = {"x": x, "y": y, "width": 50, "height": 50, "colour": "grey", "speed": 3, 
        "right": false, "alive": true, "boss": false}
    renderBlocks.push(knight);
    enemies.push(knight);
}

//Display Controls
function showControls() {
    var menu = document.getElementById("menu");
    var controls = document.getElementById("controlScreen");
    menu.hidden = true;
    controls.hidden = false;
}

//Return to main menu
function menu() {
    var menu = document.getElementById("menu");
    var controls = document.getElementById("controlScreen");
    menu.hidden = false;
    controls.hidden = true;
}

//Begin the game
function startGame() {
    var menu = document.getElementById("menu");
    var canvas = document.getElementById("gameWindow");
    menu.hidden = true;
    canvas.hidden = false;

    code = setInterval(draw, 1000/FRAME_RATE);
    document.addEventListener("keydown", doKeys);
    document.addEventListener("keyup", releaseKeys)
    document.addEventListener("mousedown", doMouse);
    //Disable right-click
    document.addEventListener("contextmenu", function (event) {event.preventDefault(); return false})
}

function doKeys(evt) {
    var num = evt.keyCode
    if ((num==87|num==32) && !jumping) jump()
    else if (num==65) leftPressed = true;
    else if (num==68) rightPressed = true;

    //Secret entrances
    if (num==83 && gPlayer.x >= 2550 && gPlayer.x <= 2600) {
        gPlayer.x = -3100;
        gPlayer.y = -250;
    }
    if (num==83 && gPlayer.x >= -2550 && gPlayer.x <= -2500) {
        gPlayer.x = 8450;
        gPlayer.y = 150;
    }
    if (num==83 && gPlayer.x >= 10425 && gPlayer.x <= 10525) {
        gPlayer.x = 12600;
        gPlayer.y = 200;
        biggerBoss.angry = true;
        biggerBoss.state = 0;
        biggerBoss.x = 13000;
        biggerBoss.y = 250;
    }
}
function releaseKeys(evt) {
    var num = evt.keyCode
    if (num==97|num==32) jumping = false;
    if (num==65) leftPressed = false;
    else if (num==68) rightPressed = false;
}
function doMouse(evt) {
    evt.preventDefault();
    if (playerSword.active | !gPlayer.alive) return;
    var num = evt.button;
    if (num == 0) attackLeft();
    if (num == 2) attackRight();
}

function draw() {
    var canv = document.getElementById("game");
    var ctx = canv.getContext("2d");
    var width = canv.width;
    var height = canv.height;

    ctx.reset();
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0,0,width,height);

    updatePlayer();
    updateEnemies();
    if (bigBoss.angry) updateBoss();

    //Draw to the screen
    drawBlocks(ctx, width, height);
    if (gPlayer.x < 12000) {
    ctx.fillStyle = gPlayer.colour;
    ctx.fillRect((width-gPlayer.width)/2, (height-gPlayer.height)/2, gPlayer.width, gPlayer.height);
    ctx.fillStyle = "Black";
    ctx.fillRect((width-gPlayer.width)/2 + 10, (height-gPlayer.height)/2 + 10, 30, 5);
    if (playerSword.active) {
        ctx.strokeStyle = "silver";
        ctx.moveTo(width/2 + gPlayer.width/2*playerSword.direction, height/2);
        ctx.lineWidth = 5;
        ctx.lineTo((width/2 + gPlayer.width/2*playerSword.direction) + 
                    Math.sin(Math.PI*attackTimer/90)*playerSword.direction*playerSword.width,
                    height/2 -playerSword.width*Math.sin(Math.PI*(135+attackTimer)/90));
        ctx.stroke();
    }}else {
        ctx.fillStyle = "Black";
        ctx.fillRect((width/2) + gPlayer.x-13015, height/2 - 90 + gPlayer.y, 30, 5);
        if (playerSword.active) {
            ctx.strokeStyle = "silver";
            ctx.moveTo((width/2) + gPlayer.x-13025 + gPlayer.width/2 + gPlayer.width/2*playerSword.direction, 
                    height/2 + gPlayer.height/2 - 100 + gPlayer.y);
            ctx.lineWidth = 5;
            ctx.lineTo(((width/2) + gPlayer.x-13025 + gPlayer.width/2 + gPlayer.width/2*playerSword.direction) + 
                    Math.sin(Math.PI*attackTimer/90)*playerSword.direction*playerSword.width,
                    height/2 + gPlayer.height/2 - 100 + gPlayer.y -playerSword.width*
                    Math.sin(Math.PI*(135+attackTimer)/90));
            ctx.stroke();
        }//ctx.fillRect((width/2)-525 + current.x-12500, height/2 - 100 + current.y, current.width, current.height);
    }
}

function updatePlayer() {
    if (!gPlayer.alive) {
        gPlayer.y += 9;
        return;
    }

    if (isOnGround(gPlayer)) {
    if (rightPressed && !leftPressed && gPlayer.velX < 0 || leftPressed && !rightPressed && gPlayer.velX > 0) {
        gPlayer.velX *= 0.5;
    }}

    if (rightPressed && gPlayer.velX < gPlayer.maxVel) {
        gPlayer.velX += Math.min(gPlayer.accel, gPlayer.maxVel-gPlayer.velX);}
    if (leftPressed && gPlayer.velX > -gPlayer.maxVel) {
        gPlayer.velX -= Math.min(gPlayer.accel, (gPlayer.maxVel)+gPlayer.velX);}

    if (!rightPressed && !leftPressed) {
        gPlayer.velX *= 0.9;
        if (Math.abs(gPlayer.velX) < 0.01) gPlayer.velX = 0;
    }

    //jumping
    if (jumping && gPlayer.velY > -0.5) 
        gPlayer.velY -= Math.min(gPlayer.accel+GRAV/FRAME_RATE, (0.5)+gPlayer.velY);

    //Gravity
    if (gPlayer.velY < 2) gPlayer.velY += GRAV/FRAME_RATE;

    //X movement
    gPlayer.x += gPlayer.velX*1000/FRAME_RATE;
    var impactBlock = doCollisions(gPlayer);
    if (impactBlock != false) {
        if (gPlayer.velX < 0) gPlayer.x = impactBlock.x + impactBlock.width;
        else gPlayer.x = impactBlock.x - gPlayer.width;
        gPlayer.velX = 0;
    }
    gPlayer.y += gPlayer.velY*1000/FRAME_RATE;
    impactBlock = doCollisions(gPlayer);
    if (impactBlock != false) {
        if (gPlayer.velY < 0) gPlayer.y = impactBlock.y + impactBlock.height;
        else gPlayer.y = impactBlock.y - gPlayer.height;
        gPlayer.velY = 0;
    }

    //Progress attacks
    if (playerSword.active) {
        attackTimer += 180/FRAME_RATE;
        if (attackTimer >= 90) {playerSword.active = false; swordHitBox.active = false;}
        else {
            if (playerSword.direction == 1) {swordHitBox.x = gPlayer.x+gPlayer.width;
            }else swordHitBox.x = gPlayer.x-swordHitBox.width;
            swordHitBox.y = gPlayer.y-swordHitBox.height/2;
        }
    }

    //take damage
    var attacker = enemyCollision(gPlayer);
    if (attacker != false) {
        gPlayer.alive = false;
        gPlayer.colour = "Maroon";
        playerSword.active = false;
        swordHitBox.active = false;
        setTimeout(resetPlayer, 2000);
    }
    if (gPlayer.y >= 1000) resetPlayer();
}

function updateEnemies() {
    for (var i=0; i<enemies.length; i++) {
        current = enemies[i];
        if (current == biggerBoss) continue;

        if (!current.alive) {
            current.y += 9;
        }else if (!current.boss){
            if (current.colour == "Yellow") {
                if (!current.angry) {
                    if (gPlayer.x <= -2000) current.angry = true; else continue;
                }
                if (gPlayer.x > current.x) current.x += 15; else current.x -= 15;
                if (gPlayer.y > current.y) current.y += 15; else current.y -= 15;
            }else{
            if (current.right) current.x += current.speed;
            else current.x -= current.speed;
            }

        //kill enemies
        var attack = doHitboxes(current);
        if (attack != false) {
            current.colour = "Red";
            current.alive = false;
        }

        //miniboss action
        if (current.colour == "Purple") {
            current.summonTimer -= 1000/FRAME_RATE;
            if (current.summonTimer <= 0) {
                current.summonTimer = 3000;
                projectile.x = current.x; projectile.y = current.y;
                projectile.right = current.right; projectile.alive = true;
                projectile.yVel = -25; projectile.colour = "Silver";
            }
        }

        //projectile gravity
        if (current.colour == "Silver") {
            current.y += current.yVel;
            current.yVel += GRAV/2;
        }

        //enemies turn round at edges and walls (except projectiles)
        var impactBlock = doCollisions(current);
        if (impactBlock != false | (!isOnGround(current) && current.colour != "Silver")) current.right = !current.right;
        }
        //THE BOSS
        else {
            if (current.alive && current.angry) {
                if (current.state == 1) {
                    current.y += 12;
                    var impactBlock = doCollisions(current);
                    if (impactBlock != false) {current.state = 2; current.y = impactBlock.y-current.height;
                         setTimeout(function(){bigBoss.state = 3;
                        if (gPlayer.x > bigBoss.x) bigBoss.right = true; else bigBoss.right = false;}, 500);
                    setTimeout(function(){if (bigBoss.state == 3) bigBoss.state == 4;}, 5000);}
                }else if (current.state == 3) {
                    if (current.right) current.x += 15; else current.x -= 15;
                    var impactBlock = doCollisions(current);
                    if (impactBlock != false) {current.state = 4; setTimeout(function(){
                        bigBoss.state = 5;}, 200);}
                }else if (current.state == 5) {
                    current.y -= 5;
                    if (current.y <= -100) {
                        var impactBlock = doCollisions(current);
                        if (impactBlock == false){
                        bigBoss.state = 6;
                        bigBoss.targetX = gPlayer.x;
                        bigBoss.targetY = gPlayer.y;
                        setTimeout(function(){
                            if (bigBoss.state == 6) {bigBoss.state = 0; setTimeout(function(){
                                if (bigBoss.state == 0) bigBoss.state = 1;}, Math.random()*3);}
                            }, 3000)
                        }}
                }else if (current.state == 6) {
                    if (current.targetX > current.x) current.x += 20;
                    else if (current.targetX < current.x) current.x -= 20;
                    if (current.targetY > current.y) current.y += 20;
                    else if (current.targetY < current.y) current.y -= 20;
                    var impactBlock = doCollisions(current);
                    if (impactBlock != false) {bigBoss.state = 7; setTimeout(function(){
                        if (bigBoss.state == 7) bigBoss.state = 1;}, 2000);}
                }else if (current.state == 7) {
                    current.y -= 10;
                }
                if (!current.invincible) {
                    var attack = doHitboxes(current);
                    if (attack != false ) {
                        current.health -= 5;
                        current.colour = "Red";
                        if (current.health <= 0) {
                            current.alive = false;
                        }else {
                            current.invincible = true;
                            setTimeout(function() {bigBoss.invincible = false; bigBoss.colour = "Black";}, 500)
                        }
        }}
            }else if (!current.angry && gPlayer.x >=10000) current.angry = true; 
            setTimeout(function(){if (bigBoss.state == 0) bigBoss.state = 1;}, Math.random()*3);
        }
    }
}

function updateBoss() {
    if (biggerBoss.alive) {
        if (biggerBoss.state == 0) {
            biggerBoss.state = 1;
            setTimeout(function() {
                biggerBoss.state = 2;
                if (gPlayer.x > biggerBoss.x) biggerBoss.direction = 1;
                else biggerBoss.direction = -1;
            }, 1000)
            //Charge Attack
        }else if (biggerBoss.state == 2 | biggerBoss.state == 5 | biggerBoss.state == 8) {
            biggerBoss.x += 20*biggerBoss.direction;
            var impact = doCollisions(biggerBoss);
            if (impact != false) biggerBoss.state += 1;
        }else if (biggerBoss.state == 3 | biggerBoss.state == 6 | biggerBoss.state == 9) {
            biggerBoss.state += 1;
            setTimeout(function() {
                biggerBoss.state += 1;
                biggerBoss.direction *= -1;
            }, 1000)
        }else if (biggerBoss.state == 4 | biggerBoss.state == 7) {
            if (gPlayer.y > biggerBoss.y) biggerBoss.y += 5;
            else if (gPlayer.y < biggerBoss.y) biggerBoss.y -= 5;
        //Slam Attack
        }else if (biggerBoss.state == 10 | biggerBoss.state == 16 | biggerBoss.state == 21) {
            biggerBoss.state += 1;
            setTimeout(function() {biggerBoss.state += 1;}, 500)
        }else if (biggerBoss.state == 13 | biggerBoss.state == 18 | biggerBoss.state == 23) {
            biggerBoss.y -= 25;
            if (biggerBoss.y <= -100) {
                biggerBoss.state += 1;
                setTimeout(function(){biggerBoss.state += 1;}, 2000);
            }
        }else if (biggerBoss.state == 14 | biggerBoss.state == 19 | biggerBoss.state == 24) {
            if (gPlayer.x > biggerBoss.x+25) biggerBoss.x += 10;
            else if (gPlayer.x < biggerBoss.x+25) biggerBoss.x -= 10;
        }else if (biggerBoss.state == 15 | biggerBoss.state == 20 | biggerBoss.state == 25) {
            biggerBoss.y += 20;
            if (biggerBoss.y >= 250) {
                biggerBoss.state += 1;
                biggerBoss.y = 250;
            }
        }else if (biggerBoss.state == 26) {
            if (biggerBoss.y <= 300) biggerBoss.state = 0;
            else biggerBoss.y -= 5;
        }
    }

    //Boss takes damage
    if (!biggerBoss.invincible && biggerBoss.alive) {
        var attack = doHitboxes(biggerBoss);
        if (attack != false ) {
            biggerBoss.health -= 5;
            console.log(biggerBoss.health);
            biggerBoss.colour = "Red";
            if (biggerBoss.health <= 0) {
                biggerBoss.alive = false;
                bossDeathScreen();
            }else {
                biggerBoss.invincible = true;
                setTimeout(function() {biggerBoss.invincible = false; biggerBoss.colour = "Maroon";}, 500)
            }
        }
    }
}

function jump(){
    if (!isOnGround(gPlayer)) {return;}
    gPlayer.velY = -0.5;
    jumping = true;
    setTimeout(function(){jumping=false;}, 300);
}

function drawBlocks(ctx, width, height) {
    minX = gPlayer.x-((width-gPlayer.width)/2);
    maxX = gPlayer.x+gPlayer.width+(width-gPlayer.width)/2
    minY = gPlayer.y-((height-gPlayer.height)/2);
    maxY = gPlayer.y+gPlayer.height+(height-gPlayer.height)/2
    if (gPlayer.x < 12000) {
    for (var i=0; (i<renderBlocks.length); i++) {
        var current = renderBlocks[i];
        //Don't draw if entirely offscreen
        if (!((current.x+current.width)<minX || current.x>maxX ||
                (current.y+current.height)<minY || current.y>maxY)) {
            ctx.fillStyle = current.colour;
            ctx.fillRect(current.x-gPlayer.x-gPlayer.width/2+width/2, current.y-gPlayer.y-gPlayer.height/2+height/2,
                current.width, current.height);
    }}}
    else {
        for (var i=0; i<bossRoomBlocks.length; i++) {
            var current = bossRoomBlocks[i];
            ctx.fillStyle = current.colour;
            ctx.fillRect((width/2) + current.x-13025, height/2 - 100 + current.y, current.width, current.height);
        }
    }
}

function doCollisions(entity) {
    var notCollided = false;
    for (var i=0; i<collBlocks.length; i++) {
        var current = collBlocks[i];
        notCollided = false;
        if (entity.x+entity.width <= current.x) notCollided = true;
        if (entity.x >= current.x+current.width) notCollided = true;
        if (entity.y+entity.height <= current.y) notCollided = true;
        if (entity.y >= current.y+current.height) notCollided = true;
        if (!notCollided) {
            if (current.colour == "lightblue" && current.height == 50) current.colour = "Brown";
            return current;}
    }
    return false;
}

function isOnGround(entity) {
    for (var i=0; i<collBlocks.length; i++) {
        var current = collBlocks[i];
        if (!(entity.x+entity.width <= current.x || 
            entity.x >= current.x+current.width))  {
                if (entity.y+entity.height == current.y) return true;
            }
    }
    return false;
}

function doHitboxes(entity) {
    var notCollided = false;
    for (var i=0; i<hitboxes.length; i++) {
        var current = hitboxes[i];
        notCollided = false;
        if (current.active) {
            if (entity.x+entity.width <= current.x) notCollided = true;
            if (entity.x >= current.x+current.width) notCollided = true;
            if (entity.y+entity.height <= current.y) notCollided = true;
            if (entity.y >= current.y+current.height) notCollided = true;
            if (!notCollided) return current;
        }
    }
    return false;
}

function attackLeft() {
    attackTimer = 0;
    playerSword.active = true;
    swordHitBox.active = true;
    playerSword.direction = -1;
}

function attackRight() {
    attackTimer = 0;
    playerSword.active = true;
    swordHitBox.active = true;
    playerSword.direction = 1;
}

function enemyCollision(entity) {
    var notCollided = false;
    for (var i=0; i<enemies.length; i++) {
        var current = enemies[i];
        notCollided = false;
        if (current.alive) {
            if (entity.x+entity.width <= current.x) notCollided = true;
            if (entity.x >= current.x+current.width) notCollided = true;
            if (entity.y+entity.height <= current.y) notCollided = true;
            if (entity.y >= current.y+current.height) notCollided = true;
            if (!notCollided) return current;
        }
    }
    return false;
}

function resetPlayer() {
    gPlayer.x = 100;
    gPlayer.y = 100;
    gPlayer.alive = true;
    gPlayer.velX = 0;
    gPlayer.velY = 0;
    gPlayer.colour = "Blue";
    bigBoss.angry = false;
    bigBoss.state = 0;
    biggerBoss.angry = false;
    biggerBoss.state = 0;
    biggerBoss.health = 100;
    if (!miniBoss.alive) {
        miniBoss.alive = true;
        miniBoss.y = 225;
        miniBoss.colour = "Purple";
    }
}

function bossDeathScreen() {
    setTimeout(function(){flashBlack(); setTimeout(function(){flashRed(); setTimeout(
            function(){flashBlack(); setTimeout(function(){flashRed(); setTimeout(
                function(){flashBlack(); setTimeout(function(){flashRed(); setTimeout(
                    function(){flashBlack(); setTimeout(function(){flashRed(); setTimeout(
                        function(){flashBlack(); setTimeout(function(){flashRed(); setTimeout(
                            function(){flashBlack(); setTimeout(function(){victoryScreen();}, 500)}, 500
                        )}, 500)}, 500
                    )}, 500)}, 500
                )}, 500)}, 500
            )}, 500)}, 500
        )}, 500
    )}, 500)
}

function flashRed() {biggerBoss.colour = "Red";}
function flashBlack() {biggerBoss.colour = "Black";}
function victoryScreen() {
    var canv = document.getElementById("game");
    var ctx = canv.getContext("2d");
    var width = canv.width;
    var height = canv.height;
    clearInterval(code);

    ctx.fillStyle = "White";
    ctx.font = "72px Alex Brush";
    ctx.fillText("You Win!", width/2-150, height/4);
}