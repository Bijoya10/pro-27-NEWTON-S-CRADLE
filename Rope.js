class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
           bodyA:bodyA,
           bodyB:bodyB,
           pointB:{x:offsetX,y:offsetY},
           stiffness:1,
           length:250
        }
        this.body=Constraint.create(options)
        World.add(world,this.body)
    }
    
    display(){
        var pos=this.body.bodyA.position
        var pos2=this.body.bodyB.position

        var offsetX=pos2.x+this.offsetX
        var offsetY=pos2.y+this.offsetY
        push()
        stroke("#1A4314")
        strokeWeight(4)
        line(pos.x,pos.y,offsetX,offsetY)
        pop()
    }
}