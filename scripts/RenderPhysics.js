//import { Box2D } from "./Box2D.min.js";
function main() {
    const canvas = document.querySelector("#glCanvas");
    const ctx = canvas.getContext("2d");
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fill();
    
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
        var debugDraw = new b2DebugDraw();
        debugDraw.SetSprite(ctx);
        debugDraw.SetDrawScale(30.0);
        debugDraw.SetFillAlpha(0.3);
        debugDraw.SetLineThickness(1.0);
        debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
        world.SetDebugDraw(debugDraw);
    };
    var gravity = new b2Vec2(0.0, 10.0);
    var world = new b2World(gravity);
    var bodyDef = new b2BodyDef;
    bodyDef.type = b2Body.b2_dynamicBody;
    bodyDef.position.x = 10;
    bodyDef.position.y = 0;
    var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;
    fixDef.shape = new b2CircleShape(1);
    var body = world.CreateBody(bodyDef);
    body.CreateFixture(fixDef);
    
    var bodyDef = new b2BodyDef;
    var fixDef = new b2FixtureDef;
    var body;
    bodyDef.type = b2Body.b2_staticBody;
    bodyDef.position.x = 400;
    bodyDef.position.y = 400;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.5;
    fixDef.shape = new b2CircleShape(2.5);
    body = world.CreateBody(bodyDef);
    body.CreateFixture(fixDef);
    setupDebugDraw();
    world.Step(1 / 60  , 10 , 10 );
    
    function update() {
        world.Step(1 / 60  , 10 , 10 );
        world.DrawDebugData();
    };
    window.setInterval(update, 1000 / 60);
}
window.onload = main;
