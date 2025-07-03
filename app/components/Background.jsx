"use client";

import { useEffect, useRef } from "react";

/**
 * Animated WebGL background rendered with shaders.
 *
 * Renders a full-screen or container-bound canvas with GPU-accelerated visual effects.
 *
 * @returns {JSX.Element} The WebGL canvas.
 */
function Background()
{
    const canvas = useRef(null);
    const animationRequest = useRef(null);

    useEffect(() =>
    {
        /**@type {WebGL2RenderingContext} */
        const gl = canvas.current.getContext("webgl2");
        if (!gl)
        {
            throw new Error("WebGl 2 is not supported");
        }
        else
        {
            console.log("WebGl initialised successfully");
        }

        const vertexShaderSource = 
        `   #version 300 es
            #pragma vscode_glsllint_stage : vert

            precision mediump float;

            in vec3 aPos;
            in vec2 aTexCoord;

            out vec2 vTexCoord;

            void main()
            {
                gl_Position = vec4(aPos, 1.0);

                vTexCoord = aTexCoord;
            }`;

        const fragmentShaderSource = 
        `   #version 300 es
            #pragma vscode_glsllint_stage : frag

            precision mediump float;
            
            in vec2 vTexCoord;
            
            out vec4 FragColor;

            uniform float uTime;
            uniform vec2 uResolution;
            
            vec3 RandomUnitVec(vec3 point)
            {
                point = vec3(dot(point, vec3(127.1, 311.7, 74.7)), dot(point, vec3(269.5, 183.3, 246.1)), dot(point, vec3(113.5, 271.9, 124.6)));
                return normalize(fract(sin(point) * 43758.5453123) * 2.0 - 1.0);
            }
            
            float Noise(vec3 point, float zTiling)
            {
                vec3 id = floor(point);
                vec3 grid = fract(point);
                
                vec3 interp = grid * grid * (3.0 - 2.0 * grid);

                float a = dot(RandomUnitVec(vec3(id.x + 0.0, id.y + 0.0, mod(id.z + 0.0, zTiling))), grid - vec3(0.0, 0.0, 0.0));
                float b = dot(RandomUnitVec(vec3(id.x + 1.0, id.y + 0.0, mod(id.z + 0.0, zTiling))), grid - vec3(1.0, 0.0, 0.0));
                float c = dot(RandomUnitVec(vec3(id.x + 0.0, id.y + 1.0, mod(id.z + 0.0, zTiling))), grid - vec3(0.0, 1.0, 0.0));
                float d = dot(RandomUnitVec(vec3(id.x + 1.0, id.y + 1.0, mod(id.z + 0.0, zTiling))), grid - vec3(1.0, 1.0, 0.0));

                float e = dot(RandomUnitVec(vec3(id.x + 0.0, id.y + 0.0, mod(id.z + 1.0, zTiling))), grid - vec3(0.0, 0.0, 1.0));
                float f = dot(RandomUnitVec(vec3(id.x + 1.0, id.y + 0.0, mod(id.z + 1.0, zTiling))), grid - vec3(1.0, 0.0, 1.0));
                float g = dot(RandomUnitVec(vec3(id.x + 0.0, id.y + 1.0, mod(id.z + 1.0, zTiling))), grid - vec3(0.0, 1.0, 1.0));
                float h = dot(RandomUnitVec(vec3(id.x + 1.0, id.y + 1.0, mod(id.z + 1.0, zTiling))), grid - vec3(1.0, 1.0, 1.0));

                float lerp0 = mix(mix(a, b, interp.x), mix(c, d, interp.x), interp.y);
                float lerp1 = mix(mix(e, f, interp.x), mix(g, h, interp.x), interp.y);

                return mix(lerp0, lerp1, interp.z);
            }

            void main()
            {
                vec2 uv = vTexCoord * 0.8;
                if (uResolution.x < uResolution.y) 
                {
                    uv.y *= uResolution.y / uResolution.x;
                }
                else
                {
                    uv.x *= uResolution.x / uResolution.y;
                }

                int zTiling = 4;
                float z = mod(uTime * 0.05, float(zTiling));
                float noise = Noise(vec3(uv, z), float(zTiling));
                float bg = step(fract(noise * 4.0), 0.1);

                FragColor = vec4(vec3(bg * 0.8), 1.0);
            }`;

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);

        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS))
        {
            const infoLog = gl.getShaderInfoLog(vertexShader);
            console.error(`Vertex shader failed to compile:\n${infoLog}`);
        }

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);

        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS))
        {
            const infoLog = gl.getShaderInfoLog(fragmentShader);
            console.error(`Fragment shader failed to compile:\n${infoLog}`);
        }

        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS))
        {
            const infoLog = gl.getProgramInfoLog(shaderProgram);
            console.error(`Program failed to link:\n${infoLog}`);
        }

        gl.useProgram(shaderProgram);

        gl.detachShader(shaderProgram, vertexShader);
        gl.deleteShader(vertexShader);

        gl.detachShader(shaderProgram, fragmentShader);
        gl.deleteShader(fragmentShader);

        const vertices = new Float32Array([
            -1.0,  1.0,    -1.0,  1.0,
            -1.0, -1.0,    -1.0, -1.0,
             1.0, -1.0,     1.0, -1.0,
             1.0,  1.0,     1.0,  1.0
        ]);

        const indices = new Int32Array([
            0, 1, 2,
            2, 3, 0
        ]);

        const VAO = gl.createVertexArray();
        gl.bindVertexArray(VAO);

        const VBO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, VBO);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const EBO = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, EBO);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

        const aPosLoc = gl.getAttribLocation(shaderProgram, "aPos");
        gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, vertices.BYTES_PER_ELEMENT * 4, 0);
        gl.enableVertexAttribArray(aPosLoc);

        const aTexCoordLoc = gl.getAttribLocation(shaderProgram, "aTexCoord");
        gl.vertexAttribPointer(aTexCoordLoc, 2, gl.FLOAT, false, vertices.BYTES_PER_ELEMENT * 4, vertices.BYTES_PER_ELEMENT * 2);
        gl.enableVertexAttribArray(aTexCoordLoc);

        const uTimeLoc = gl.getUniformLocation(shaderProgram, "uTime");
        const uResolutionLoc = gl.getUniformLocation(shaderProgram, "uResolution");

        const Render = (time) =>
        {
            gl.clear(gl.COLOR_BUFFER_BIT);

            time = Math.round((time / 1000) * 1000) / 1000;

            gl.uniform1f(uTimeLoc, time);

            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0);

            animationRequest.current = requestAnimationFrame(Render);
        }

        animationRequest.current = requestAnimationFrame(Render);

        const CanvasResizeCallback = () =>
        {
            canvas.current.width = canvas.current.clientWidth;
            canvas.current.height = canvas.current.clientHeight;
            gl.viewport(0, 0, canvas.current.width, canvas.current.height);
            gl.uniform2f(uResolutionLoc, canvas.current.width, canvas.current.height);
        }

        window.addEventListener("resize", CanvasResizeCallback);
        CanvasResizeCallback();

        return () => 
            {
                cancelAnimationFrame(animationRequest.current);
                window.removeEventListener("resize", CanvasResizeCallback);
            }
    }, []);


    return (
        <canvas
            className="w-full h-full -z-10"
            ref={canvas}
        ></canvas>
    );
}

export default Background;