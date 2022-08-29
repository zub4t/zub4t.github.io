window.addEventListener("load", () => {
    const canvas = document.createElement('canvas');
    canvas.style.position = "absolute"
    canvas.style.zIndex = "1"
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    const hh = window.document.querySelector(".principal_layout ").clientHeight + 200

    const w = canvas.width = window.screen.width
    const h = canvas.height = hh
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    function matrix() {
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';

        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            else ypos[ind] = y + 20;
        });
    }


    setInterval(matrix, 50);


})