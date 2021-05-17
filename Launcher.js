class Launcher{
constructor(pointA,pointB){

    var options = {

        pointA:pointA,
        pointB:pointB,
        stiffness : 0.004,
        lenght:5
    }
 
    this.pointA = pointA
    this.pointB = pointB
    this.sling = Constraint.create(options);
    World.add(world,this.sling);


}

fly(){
 this.launcher.pointA = null;   

}

display(){

push();

strokeWeight(4);
stroke(48,22,8);

pop();


}


}