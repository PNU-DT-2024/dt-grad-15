import { useEffect, useRef } from 'react';

const Sparkle = ({ sparkles = 50 }) => {
    const tiny = useRef([]);
    const star = useRef([]);
    const starv = useRef([]);
    const tinyv = useRef([]);
    const starx = useRef([]);
    const stary = useRef([]);
    const tinyx = useRef([]);
    const tinyy = useRef([]);
    
    let x = useRef(0);
    let y = useRef(0);
    let ox = useRef(400);
    let oy = useRef(300);
    let shigh = useRef(window.innerHeight);

    useEffect(() => {
        const initializeSparkles = () => {
            for (let i = 0; i < sparkles; i++) {
                const tinyDiv = createDiv(3, 3);
                tiny.current[i] = tinyDiv;
                tinyDiv.style.visibility = "hidden"; // 초기에는 숨김
                document.body.appendChild(tinyDiv);
                
                const starDiv = createDiv(5, 5);
                starDiv.style.backgroundColor = "transparent";
                const rlef = createDiv(1, 10);
                const rdow = createDiv(10, 1);
                starDiv.appendChild(rlef);
                starDiv.appendChild(rdow);
                rlef.style.top = "2px";
                rlef.style.left = "0px";
                rdow.style.top = "0px";
                rdow.style.left = "2px";
                document.body.appendChild(starDiv);
                star.current[i] = starDiv;

                starv.current[i] = 0;
                tinyv.current[i] = 0;
            }
            sparkle();
        };

        const sparkle = () => {
            if (Math.abs(x.current - ox.current) > 1 || Math.abs(y.current - oy.current) > 1) {
                ox.current = x.current;
                oy.current = y.current;

                for (let c = 0; c < sparkles; c++) {
                    if (!starv.current[c]) {
                        star.current[c].style.left = (starx.current[c] = x.current) + "px";
                        star.current[c].style.top = (stary.current[c] = y.current + 1) + "px";
                        star.current[c].style.clip = "rect(0px, 5px, 5px, 0px)";
                        star.current[c].childNodes[0].style.backgroundColor = newColour();
                        star.current[c].style.visibility = "visible";
                        starv.current[c] = 50;
                        break;
                    }
                }
            }

            for (let c = 0; c < sparkles; c++) {
                if (starv.current[c]) update_star(c);
                if (tinyv.current[c]) update_tiny(c);
            }
            setTimeout(sparkle, 40);
        };

        const update_star = (i) => {
            if (!star.current[i]) return; // 안전성 검사 추가
            if (--starv.current[i] === 25) {
                star.current[i].style.clip = "rect(1px, 4px, 4px, 1px)";
            }
            if (starv.current[i]) {
                stary.current[i] += 1 + Math.random() * 3;
                starx.current[i] += (i % 5 - 2) / 5;
                if (stary.current[i] < shigh.current) {
                    star.current[i].style.top = stary.current[i] + "px";
                    star.current[i].style.left = starx.current[i] + "px";
                } else {
                    star.current[i].style.visibility = "hidden";
                    starv.current[i] = 0;
                    return;
                }
            } else {
                tinyv.current[i] = 50;
                if (tiny.current[i]) {
                    tiny.current[i].style.top = (tinyy.current[i] = stary.current[i]) + "px";
                    tiny.current[i].style.left = (tinyx.current[i] = starx.current[i]) + "px";
                    tiny.current[i].style.width = "2px";
                    tiny.current[i].style.height = "2px";
                    tiny.current[i].style.backgroundColor = star.current[i].childNodes[0].style.backgroundColor;
                    star.current[i].style.visibility = "hidden";
                    tiny.current[i].style.visibility = "visible";
                }
            }
        };

        const update_tiny = (i) => {
            if (!tiny.current[i]) return; // 안전성 검사 추가
            if (--tinyv.current[i] === 25) {
                tiny.current[i].style.width = "1px";
                tiny.current[i].style.height = "1px";
            }
            if (tinyv.current[i]) {
                tinyy.current[i] += 1 + Math.random() * 3;
                tinyx.current[i] += (i % 5 - 2) / 5;
                if (tinyy.current[i] < shigh.current) {
                    tiny.current[i].style.top = tinyy.current[i] + "px";
                    tiny.current[i].style.left = tinyx.current[i] + "px";
                } else {
                    tiny.current[i].style.visibility = "hidden";
                    tinyv.current[i] = 0;
                }
            } else {
                tiny.current[i].style.visibility = "hidden";
            }
        };

        const createDiv = (height, width) => {
            const div = document.createElement("div");
            div.style.position = "absolute";
            div.style.height = height + "px";
            div.style.width = width + "px";
            div.style.overflow = "hidden";
            return div;
        };

        const newColour = () => {
            const c = [255, Math.floor(Math.random() * 256), Math.floor(Math.random() * (256 - Math.floor(Math.random() * 256) / 2))];
            c.sort(() => 0.5 - Math.random());
            return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
        };

        // Initialize sparkle effect
        initializeSparkles();

        // Event listener for mouse movement
        const handleMouseMove = (e) => {
            x.current = e.pageX;
            y.current = e.pageY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Clean up event listener
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [sparkles]);

    return null; // No JSX to render, all is handled in the background
};

export default Sparkle;
