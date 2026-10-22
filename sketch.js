const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(600, 600, "raylib_objects");
    r.SetTargetFPS(50);
}

function update() {
    // change the state
}

const windowRect = {
    x: 50,
    y: 50,
    width: 400,
    height: 380,
};
const buttonPosition = {
    x: 100,
    y: 100,
};
const buttonSize = {
    x: 200,
    y: 50,
};
const targetPosition = {
    x: 200,
    y: 120,
};
const start = {
    x: 50,
    y: 50,
};
const end = {
    x: 250,
    y: 150,
};
const panel = {
    x: 50,
    y: 50,
    width: 300,
    height: 150,
};
const target = {
    x: 200,
    y: 100,
};
const spaceship = {
    position: {
        x: 100,
        y: 120,
    },

    size: {
        x: 60,
        y: 30,
    },

    color: r.WHITE,
};

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    // r.DrawRectangleRec(windowRect, r.RED);
    // r.DrawRectangleLines(
    //     windowRect.x,
    //     windowRect.y,
    //     windowRect.width,
    //     windowRect.height,
    //     r.BLACK,
    // );
    // r.DrawRectangleV(buttonPosition, buttonSize, r.BLUE);
    // r.DrawCircleV(targetPosition, 20, r.RED);
    // r.DrawLineV(start, end, r.WHITE);
    // r.DrawLineEx(start, end, 20, r.RED);
    // r.DrawRectangleRounded(windowRect, 0.5, 4, r.BLUE);
    // r.DrawRectangleRoundedLines(windowRect, 0.2, 8, 2, r.RED);
    // r.DrawRectangleGradientH(panel.x, panel.y, panel.width, panel.height, r.BLUE, r.WHITE);
    // r.DrawRectangleGradientV(panel.x, panel.y + 250, panel.width, panel.height, r.BLUE, r.WHITE);
    // r.DrawCircleV(target, 30, r.RED);
    // r.DrawCircleLines(target.x, target.y, 30, r.BLACK);
    // r.DrawCircleSectorLines(target, 40, 0, 360, 5, r.WHITE);
    // r.DrawCircleSector(target, 40, 0, 360, 5, r.BLUE);
    r.EndDrawing();
    r.DrawRectangleV(spaceship.position, spaceship.size, spaceship.color);
    r.DrawRectangleRounded(
        {
            x: spaceship.position.x,
            y: spaceship.position.y,
            width: spaceship.size.x,
            height: spaceship.size.y,
        },
        0.3,
        8,
        spaceship.color,
    );
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};