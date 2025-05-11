import { useEffect, useRef } from "react";

/**
 * A component that renders a background with dotted pattern.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.className] - Optional class name to apply custom styling to the component.
 * 
 * @returns {JSX.Element} A div element with a dotted background.
 */
function DottedBG({className})
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
            precision mediump float;
            
            in vec2 vTexCoord;
            
            out vec4 FragColor;
            
            vec2 Random(vec2 point)
            {
                point = vec2(dot(point, vec2(127.1, 311.7)), dot(point, vec2(269.5, 183.3)));
                return fract(sin(point) * 43758.5453) * 2.0 - 1.0;
            }

            void main()
            {
                vec2 grid = fract(vTexCoord * 10.0);
                vec2 id = floor(vTexCoord * 10.0);
                
                vec2 interp = smoothstep(0.0, 1.0, grid);
                
                float bottomLeft  = dot(Random(id + vec2(0.0, 0.0)), grid - vec2(0.0, 0.0));
                float bottomRight = dot(Random(id + vec2(1.0, 0.0)), grid - vec2(1.0, 0.0));
                float topLeft     = dot(Random(id + vec2(0.0, 1.0)), grid - vec2(0.0, 1.0));
                float topRight    = dot(Random(id + vec2(1.0, 1.0)), grid - vec2(1.0, 1.0));
                
                float noise = mix(mix(bottomLeft, bottomRight, interp.x), mix(topLeft, topRight, interp.x), interp.y);
                
                FragColor = vec4(vec3(noise * 0.5 + 0.5), 1.0);
            }`;

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);

        const shaderProgram = gl.createProgram();
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        gl.useProgram(shaderProgram);

        gl.detachShader(shaderProgram, vertexShader);
        gl.deleteShader(vertexShader);

        gl.detachShader(shaderProgram, fragmentShader);
        gl.deleteShader(fragmentShader);

        const vertices = new Float32Array([
            -1.0,  1.0,    0.0, 1.0,
            -1.0, -1.0,    0.0, 0.0,
             1.0, -1.0,    1.0, 0.0,
             1.0,  1.0,    1.0, 1.0
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

        const Render = () =>
        {
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0);

            animationRequest.current = requestAnimationFrame(Render);
        }

        animationRequest.current = requestAnimationFrame(Render);

        return () => cancelAnimationFrame(animationRequest.current);
    }, []);


    return (
        <canvas ref={canvas} className={className}></canvas>
    );
}

export default DottedBG;