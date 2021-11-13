import './Box2D_v2.3.1_min'
function main() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");

    if (gl == null) {
        alert("WebGL not supported. Please try again on a different web browser (your web browser is probably like ie2 lmao).");
    }

    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    const Box2D = Box2D.Box2D;
    Box2D().then(function(Box2D) {
        var gravity = new Box2D.b2Vec2(0.0, -10.0);
        var world = new Box2D.b2World(gravity);
        world.SetAllowSleeping(false);
        var bd = new Box2D.b2BodyDef();
        var ground = world.CreateBody(bd);
        var a = 0.5;
        var shape = new Box2D.b2PolygonShape();
        shape.SetAsBox(a, a);
}
window.onload = main;
