//if this works i will actually-
import * as Box2D from "./Box2D.min.js";
function main() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");

    if (gl == null) {
        alert("WebGL not supported. Please try again on a different web browser (your web browser is probably like ie2 lmao).");
    }

    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    var b2Vec2 = Box2D.Common.Math.b2Vec2;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2Body = Box2D.Dynamics.b2Body;
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2Fixture = Box2D.Dynamics.b2Fixture;
    var b2World = Box2D.Dynamics.b2World;
    var b2MassData = Box2D.Collision.Shapes.b2MassData;
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
    var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
    
    function setupDebugDraw() {
        var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
        var debugDraw = new b2DebugDraw();
        debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
        debugDraw.SetDrawScale(30.0);
        debugDraw.SetFillAlpha(0.3);
        debugDraw.SetLineThickness(1.0);
        debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
        world.SetDebugDraw(debugDraw);
    };
    
    setupDebugDraw();
    const Box2D = Box2D.Box2D;
    var gravity = new Box2D.b2Vec2(0.0, 10.0);
    var world = new Box2D.b2World(gravity);
    var bodyDef = new b2BodyDef;
    bodyDef.type = b2Body.b2_dynamicBody;
    bodyDef.position.x = 10;
    bodyDef.position.y =0;
    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;
    fixDef.shape = new b2CircleShape(1);
    var body = world.CreateBody(bodyDef);
    body.CreateFixture(fixDef);
    world.Step(1 / 60  , 10 , 10 );
    
    function update() {
        world.Step(1 / 60  , 10 , 10 );
        world.DrawDebugData();
        world.ClearForces();
    };
    window.setInterval(update, 1000 / 60);
}
window.onload = main;
