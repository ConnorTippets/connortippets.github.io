function main() {
    const canvas = document.querySelector("#glCanvas");
    const gl = canvas.getContext("webgl");

    if (gl == null) {
        alert("WebGL not supported. Please try again on a different web browser (your web browser is probably like ie2 lmao).");
    }

    gl.clearColor(0.2, 0.34117647058, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;