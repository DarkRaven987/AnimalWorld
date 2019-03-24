//Set output div
var output = document.getElementById("root");

//Set classes for game objects

function p(){
    return new PlantEater(25)
}

function a(){
    return new MeatEater(35)
}

function w(){
    return new Wall()
}

function f(){
    return new Floor()
}

function g(){
    return new Grass()
}



class Wall {

    constructor(){
        this.texture = "#";
    }

    getTexture(){
        return this.texture;
    }

}

class Floor {

    constructor(){
        this.texture = " ";
    }

    getTexture(){
        return this.texture;
    }

}

class Grass {
    constructor(){
        this.texture = "*";
        this.energy = 8;
    }


    getTexture(){
        return this.texture;
    }

    getEnergy(){
        return this.energy;
    }
}

class PlantEater {

    constructor(energy){
        this.texture = "o";
        this.energy = energy;
        this.moved = true;
    }

    getEnergy(){
        return this.energy;
    }

    setEnergy(energy){
        this.energy = energy;
    }

    getMoved(){
        return this.moved;
    }

    changeMovedTo(val){
        this.moved = val;
    }

    addEnergy(energy){
        this.energy+=energy;
    }

    decrEnergy(){
        this.energy--;
    }

    getTexture(){
        return this.texture;
    }
}

class MeatEater {

    constructor(energy){
        this.texture = "a";
        this.energy = energy;
        this.moved = true;
    }

    getEnergy(){
        return this.energy;
    }

    setEnergy(energy){
        this.energy = energy;
    }

    getMoved(){
        return this.moved;
    }

    changeMovedTo(val){
        this.moved = val;
    }

    addEnergy(energy){
        this.energy+=energy;
    }

    decrEnergy(){
        this.energy--;
    }

    getTexture(){
        return this.texture;
    }
}

//Set game start plan

const plan = [
    [w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w(), w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f(), f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , a() , p() , f() , f() , f() , a() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f(), f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , p() , f() , f() , f() , f() , p() , f() , f() , f() , f() , f(), f() , f() , f() , p() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , g() , f() , f() , f() , g() , f() , f() , f() , f() , f(), f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , g() , g() , f() , f() , g() , g() , f() , f() , f() , f() , f(), f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , g() , f() , f() , f(), f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , g() , g() , f() , f() , f(), f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , g() , g() , f() , f() , f(), f() , f() , g() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , a() , f() , f() , f() , f() , f() , f() , f() , a() , f() , f() , f() , f() , f() , f(), f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w() , f() , f() , f() , f() , f() , f() , f() , f(), w() , w() , w() , w() , w() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w() , g() , f() , f() , p() , f() , f() , f() , f(), w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , g() , f() , f() , f() , f() , f() , f() , p() , f() , w() , g() , g() , f() , f() , f() , f() , f() , f(), w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , g() , g() , g() , f() , f() , g() , f() , f() , f() , f() , g() , g() , f() , f() , f() , f() , f() , f(), w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , g() , f() , f() , f() , f() , f() , f() , f() , w() , f() , g() , g() , g() , f() , f() , f() , f() , f(), w() , f() , f() , f() , p() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , w() , f() , f() , g() , f() , f() , f() , f() , f() , f(), w() , f() , f() , f() , f() , f() , a() , f() , f() , f() , f() , w()],
    [w() , f() , f() , p() , f() , f() , f() , f() , f() , w() , f() , f() , f() , f() , f() , f() , f() , f() , f(), a() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , p() , f() , f(), f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , g(), f() , f() , f() , f() , f() , p() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , g(), g() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , g(), f() , f() , f() , g() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , g() , g() , g() , f() , p() , g() , f() , f() , f() , p(), f() , f() , f() , f() , f() , f() , g() , g() , f() , f() , f() , w()],
    [w() , f() , f() , g() , f() , f() , f() , p() , f() , f() , g() , g() , f() , f() , f() , f() , f() , f() , f(), f() , f() , f() , f() , f() , f() , g() , g() , f() , f() , f() , w()],
    [w() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , g() , a() , f() , f() , f() , f() , f() , f(), f() , f() , f() , f() , f() , f() , g() , g() , f() , f() , f() , w()],
    [w() , g() , f() , f() , a() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f(), f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , p() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f(), f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , f() , w()],
    [w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w(), w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w() , w()],
];


//Set array of movement directions
const directions = ['up','down', 'left', 'right', 'up-left', 'down-left', 'up-right', 'down-right'];

//Set movement direction for an object

function setMoveDirection(){
    let rand = Math.floor(Math.random() * directions.length);
    return(directions[rand]);
}

//Set born new object function
function born(dir,i,j){
    switch(plan[i][j].getTexture()){
        case "o":
            switch (dir) {
                case 'up':
                    plan[i - 1][j] = new PlantEater(plan[i][j].getEnergy() / 2);
                    plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'down':
                    plan[i + 1][j] = new PlantEater(plan[i][j].getEnergy() / 2);
                    plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'left':
                    plan[i][j - 1] = new PlantEater(plan[i][j].getEnergy() / 2);
                    plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'right':
                    plan[i][j + 1] = new PlantEater(plan[i][j].getEnergy() / 2);
                    plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'up-left':
                    plan[i - 1][j - 1] = new PlantEater(plan[i][j].getEnergy() / 2);
                    plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'up-right':
                    plan[i - 1][j + 1] = new PlantEater(plan[i][j].getEnergy() / 2);
                    plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'down-left':
                    plan[i + 1][j - 1] = new PlantEater(plan[i][j].getEnergy() / 2);
                    plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'down-right':
                    plan[i + 1][j + 1] = new PlantEater(plan[i][j].getEnergy() / 2);
                    plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
            }break;
        case "a":
            switch (dir) {
                case 'up':
                    plan[i - 1][j] = new MeatEater(plan[i][j].getEnergy() / 2);
                    plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'down':
                    plan[i + 1][j] = new MeatEater(plan[i][j].getEnergy() / 2);
                    plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'left':
                        plan[i][j - 1] = new MeatEater(plan[i][j].getEnergy() / 2);
                        plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'right':
                        plan[i - 1][j] = new MeatEater(plan[i][j].getEnergy() / 2);
                        plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'up-left':
                        plan[i - 1][j - 1] = new MeatEater(plan[i][j].getEnergy() / 2);
                        plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'up-right':
                        plan[i - 1][j + 1] = new MeatEater(plan[i][j].getEnergy() / 2);
                        plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'down-left':
                        plan[i + 1][j - 1] = new MeatEater(plan[i][j].getEnergy() / 2);
                        plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
                case 'down-right':
                        plan[i + 1][j + 1] = new MeatEater(plan[i][j].getEnergy() / 2);
                        plan[i][j].setEnergy(plan[i][j].getEnergy() / 2);
                    break;
            }break;
    }
}


//Set function to check around for grass to eat
function checkForGrass(i,j){
    if(plan[i-1][j].getTexture()==="*"){
        return 'up'
    }else if(plan[i + 1][j].getTexture()==="*"){
        return 'down'
    }else if(plan[i][j - 1].getTexture()==="*"){
        return 'left'
    }else if(plan[i][j + 1].getTexture()==="*"){
        return 'right'
    }else if(plan[i - 1][j - 1].getTexture()==="*"){
        return 'up-left'
    }else if(plan[i - 1][j + 1].getTexture()==="*"){
        return 'up-right'
    }else if(plan[i + 1][j - 1].getTexture()==="*"){
        return 'down-left'
    }else if(plan[i + 1][j + 1].getTexture()==="*"){
        return 'down-right'
    }else{
        return null
    }
}


//Set function to generate grass randomly
function growGrass(i,j){
    let rand = Math.floor(Math.random() * (300-1))+1;
    if(rand===1){
        plan[i][j] = g();
    }
}


//Set function to find plant eaters around hunter
function checkForMeat(i,j){
    if(plan[i-1][j].getTexture()==="o"){
        return 'up'
    }else if(plan[i + 1][j].getTexture()==="o"){
        return 'down'
    }else if(plan[i][j - 1].getTexture()==="o"){
        return 'left'
    }else if(plan[i][j + 1].getTexture()==="o"){
        return 'right'
    }else if(plan[i - 1][j - 1].getTexture()==="o"){
        return 'up-left'
    }else if(plan[i - 1][j + 1].getTexture()==="o"){
        return 'up-right'
    }else if(plan[i + 1][j - 1].getTexture()==="o"){
        return 'down-left'
    }else if(plan[i + 1][j + 1].getTexture()==="o"){
        return 'down-right'
    }else{
        return null
    }
}

//Set function to eat object and move to it`s position
function moveToEat(dir, i,j){
    let interData;
    switch (dir) {
        case 'up':
            interData = plan[i - 1][j];
            plan[i - 1][j] = plan[i][j];
            plan[i - 1][j].addEnergy(interData.getEnergy());
            plan[i - 1][j].decrEnergy();
            plan[i - 1][j].changeMovedTo(true);
            plan[i][j] = f();
            break;
        case 'down':
            interData = plan[i + 1][j];
            plan[i + 1][j] = plan[i][j];
            plan[i + 1][j].addEnergy(interData.getEnergy());
            plan[i + 1][j].decrEnergy();
            plan[i + 1][j].changeMovedTo(true);
            plan[i][j] = f();
            break;
        case 'left':
            interData = plan[i][j - 1];
            plan[i][j - 1] = plan[i][j];
            plan[i][j - 1].addEnergy(interData.getEnergy());
            plan[i][j - 1].decrEnergy();
            plan[i][j - 1].changeMovedTo(true);
            plan[i][j] = f();
            break;
        case 'right':
            interData = plan[i][j + 1];
            plan[i][j + 1] = plan[i][j];
            plan[i][j + 1].addEnergy(interData.getEnergy());
            plan[i][j + 1].decrEnergy();
            plan[i][j + 1].changeMovedTo(true);
            plan[i][j] = f();
            break;
        case 'up-left':
            interData = plan[i - 1][j - 1];
            plan[i - 1][j - 1] = plan[i][j];
            plan[i - 1][j - 1].addEnergy(interData.getEnergy());
            plan[i - 1][j - 1].decrEnergy();
            plan[i - 1][j - 1].changeMovedTo(true);
            plan[i][j] = f();
            break;
        case 'up-right':
            interData = plan[i - 1][j + 1];
            plan[i - 1][j + 1] = plan[i][j];
            plan[i - 1][j + 1].addEnergy(interData.getEnergy());
            plan[i - 1][j + 1].decrEnergy();
            plan[i - 1][j + 1].changeMovedTo(true);
            plan[i][j] = f();
            break;
        case 'down-left':
            interData = plan[i + 1][j - 1];
            plan[i + 1][j - 1] = plan[i][j];
            plan[i + 1][j - 1].addEnergy(interData.getEnergy());
            plan[i + 1][j - 1].decrEnergy();
            plan[i + 1][j - 1].changeMovedTo(true);
            plan[i][j] = f();
            break;
        case 'down-right':
            interData = plan[i + 1][j + 1];
            plan[i + 1][j + 1] = plan[i][j];
            plan[i + 1][j + 1].addEnergy(interData.getEnergy());
            plan[i + 1][j + 1].decrEnergy();
            plan[i + 1][j + 1].changeMovedTo(true);
            plan[i][j] = f();
            break;
        default:
            break;
    }
}

//Set movement function

function move(dir,i,j){
    let interData;
    switch (dir) {
        case 'up':
            interData = plan[i - 1][j];
            plan[i - 1][j] = plan[i][j];
            plan[i - 1][j].decrEnergy();
            plan[i - 1][j].changeMovedTo(true);
            if (plan[i - 1][j].getEnergy() <= 0) {
                plan[i - 1][j] = f();
            }
            plan[i][j] = interData;
            break;
        case 'down':
            interData = plan[i + 1][j];
            plan[i + 1][j] = plan[i][j];
            plan[i + 1][j].decrEnergy();
            plan[i + 1][j].changeMovedTo(true);
            if (plan[i + 1][j].getEnergy() <= 0) {
                plan[i + 1][j] = f();
            }
            plan[i][j] = interData;
            break;
        case 'left':
            interData = plan[i][j - 1];
            plan[i][j - 1] = plan[i][j];
            plan[i][j - 1].decrEnergy();
            plan[i][j - 1].changeMovedTo(true);
            if (plan[i][j - 1].getEnergy() <= 0) {
                plan[i][j - 1] = f();
            }
            plan[i][j] = interData;
            break;
        case 'right':
            interData = plan[i][j + 1];
            plan[i][j + 1] = plan[i][j];
            plan[i][j + 1].decrEnergy();
            plan[i][j + 1].changeMovedTo(true);
            if (plan[i][j + 1].getEnergy()<= 0) {
                plan[i][j + 1] = f();
            }
            plan[i][j] = interData;
            break;
        case 'up-left':
            interData = plan[i - 1][j - 1];
            plan[i - 1][j - 1] = plan[i][j];
            plan[i - 1][j - 1].decrEnergy();
            plan[i - 1][j - 1].changeMovedTo(true);
            if (plan[i - 1][j - 1].getEnergy() <= 0) {
                plan[i - 1][j - 1] = f();
            }
            plan[i][j] = interData;
            break;
        case 'up-right':
            interData = plan[i - 1][j + 1];
            plan[i - 1][j + 1] = plan[i][j];
            plan[i - 1][j + 1].decrEnergy();
            plan[i - 1][j + 1].changeMovedTo(true);
            if (plan[i - 1][j + 1].getEnergy() <= 0) {
                plan[i - 1][j + 1] = f()
            }
            plan[i][j] = interData;
            break;
        case 'down-left':
            interData = plan[i + 1][j - 1];
            plan[i + 1][j - 1] = plan[i][j];
            plan[i + 1][j - 1].decrEnergy();
            plan[i + 1][j - 1].changeMovedTo(true);
            if (plan[i + 1][j - 1].getEnergy() <= 0) {
                plan[i + 1][j - 1] = f()
            }
            plan[i][j] = interData;
            break;
        case 'down-right':
            interData = plan[i + 1][j + 1];
            plan[i + 1][j + 1] = plan[i][j];
            plan[i + 1][j + 1].decrEnergy();
            plan[i + 1][j + 1].changeMovedTo(true);
            if (plan[i + 1][j + 1].getEnergy() <= 0) {
                plan[i + 1][j + 1] = f();
            }
            plan[i][j] = interData;
            break;
        default:
            break;
    }
}

//Set check surrounding walls function

function checkForWalls(dir, i ,j){

    if((plan[i - 1][j].getTexture() === "#")&&(plan[i + 1][j].getTexture() === "#")&&(plan[i][j - 1].getTexture() === "#")&&(plan[i][j + 1].getTexture() === "#")){
        return "surr";
    }else {
        switch (dir) {
            case 'up':
                return plan[i - 1][j].getTexture() !== "#";
            case 'down':
                return plan[i + 1][j].getTexture() !== "#";
            case 'left':
                return plan[i][j - 1].getTexture() !== "#";
            case 'right':
                return plan[i][j + 1].getTexture() !== "#";
            case 'up-left':
                return plan[i - 1][j - 1].getTexture() !== "#";
            case 'up-right':
                return plan[i - 1][j + 1].getTexture() !== "#";
            case 'down-left':
                return plan[i + 1][j - 1].getTexture() !== "#";
            case 'down-right':
                return plan[i + 1][j + 1].getTexture() !== "#";
        }
    }
}

//Set plan render function

function render(){
    output.innerText='';
    for(let i=0; i<plan.length;i++){
        for(let j=0; j<plan[i].length;j++){
            output.innerText+= " " + plan[i][j].getTexture();
        }
        output.innerText+="\n"
    }
}

render();

//Set time interval for one game frame
setInterval(onTimerTick, 600);

function onTimerTick(){
    console.log("game frame");
    plan.map((arr) => {
        arr.map((el) => {
            if ((el.getTexture() === "o")||(el.getTexture()==="a")) {
                el.changeMovedTo(false);
            }
        })
    });

    for (let i=0; i<plan.length;i++){
        for (let j=0; j<plan[i].length;j++){

            switch(plan[i][j].getTexture()){
                case "a":
                    if(plan[i][j].getMoved()===false){
                        let curEnergy = plan[i][j].getEnergy();
                        if(curEnergy >=80){
                            do {
                                bornDir = setMoveDirection();
                                res = checkForWalls(bornDir,i,j)
                            }while(res===false);
                            born(bornDir, i,j);
                        }else {
                            moveDir = checkForMeat(i, j);
                            if (moveDir != null) {
                                moveToEat(moveDir, i, j);
                            } else {
                                do {
                                    moveDir = setMoveDirection();
                                    res = checkForWalls(moveDir, i, j);
                                } while ((res === false) && (res !== "surr"));
                                res !== "surr" ? move(moveDir, i, j) : '';
                            }
                        }
                    }
                    break;
                case "o":
                    if(plan[i][j].getMoved()===false){
                        let curEnergy = plan[i][j].getEnergy();
                        if(curEnergy >=40){
                            do {
                                bornDir = setMoveDirection();
                                res = checkForWalls(bornDir,i,j)
                            }while(res===false);
                            born(bornDir, i,j);
                        }else {
                            moveDir = checkForGrass(i, j);
                            if (moveDir != null) {
                                moveToEat(moveDir, i, j);
                            } else {
                                do {
                                    moveDir = setMoveDirection();
                                    res = checkForWalls(moveDir, i, j);
                                } while ((res === false) && (res !== "surr"));
                                res !== "surr" ? move(moveDir, i, j) : '';
                            }
                        }
                    }break;
                case " ":
                    growGrass(i,j);
                    break;
            }
        }
    }
    render();
}