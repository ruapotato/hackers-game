/**
 * Stained glass wallpaper, the default desktop background of Stained Glass OS:
 * Voronoi panes of jewel-toned glass held in dark lead, the colour drifting
 * across the screen (magenta, purple, ruby and amber up top, teal and blue
 * below). Drawn once per size on a canvas behind the desktop icons.
 */
const stainedGlass = (() => {
    // the four tile colours of the Stained Glass mark, plus the in-between hues
    const STOPS = [
        [0.00, [196, 46, 142]],   // magenta
        [0.22, [123, 47, 190]],   // purple
        [0.42, [176, 30, 72]],    // ruby
        [0.58, [232, 162, 0]],    // amber
        [0.76, [18, 150, 150]],   // turquoise
        [1.00, [24, 72, 150]],    // blue
    ];
    let canvas = null, seed = 7;

    const rand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };

    function hue(t) {
        t = Math.max(0, Math.min(1, t));
        for (let i = 1; i < STOPS.length; i++) {
            if (t <= STOPS[i][0]) {
                const [t0, a] = STOPS[i - 1], [t1, b] = STOPS[i];
                const k = (t - t0) / (t1 - t0);
                return a.map((v, j) => Math.round(v + (b[j] - v) * k));
            }
        }
        return STOPS[STOPS.length - 1][1];
    }

    // the cell of seed i: the screen rectangle clipped by every bisector
    function cell(pts, i, w, h) {
        let poly = [[-20, -20], [w + 20, -20], [w + 20, h + 20], [-20, h + 20]];
        const [px, py] = pts[i];
        for (let j = 0; j < pts.length && poly.length; j++) {
            if (j === i) continue;
            const [qx, qy] = pts[j];
            const nx = qx - px, ny = qy - py;
            if (nx * nx + ny * ny > 90000) continue;          // too far to matter
            const c = (qx * qx + qy * qy - px * px - py * py) / 2;
            const inside = p => p[0] * nx + p[1] * ny <= c;
            const out = [];
            for (let k = 0; k < poly.length; k++) {
                const a = poly[k], b = poly[(k + 1) % poly.length];
                const ia = inside(a), ib = inside(b);
                if (ia) out.push(a);
                if (ia !== ib) {
                    const da = a[0] * nx + a[1] * ny - c, db = b[0] * nx + b[1] * ny - c;
                    const t = da / (da - db);
                    out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
                }
            }
            poly = out;
        }
        return poly;
    }

    // pull each corner toward the centre, leaving a gap for the lead
    function inset(poly, cx, cy, d) {
        return poly.map(([x, y]) => {
            const dx = cx - x, dy = cy - y, l = Math.hypot(dx, dy) || 1;
            const k = Math.min(d, l * 0.45) / l;
            return [x + dx * k, y + dy * k];
        });
    }

    function draw() {
        if (!canvas) return;
        const host = canvas.parentElement;
        const w = host.clientWidth, h = host.clientHeight, dpr = window.devicePixelRatio || 1;
        canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
        const ctx = canvas.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        // lead
        ctx.fillStyle = '#16121c';
        ctx.fillRect(0, 0, w, h);

        // seeds on a jittered grid: even panes, no slivers
        seed = 7;
        const size = Math.max(70, Math.min(110, Math.sqrt(w * h / 160)));
        const pts = [];
        for (let y = -size / 2; y < h + size; y += size * 0.86) {
            for (let x = -size / 2; x < w + size; x += size) {
                pts.push([x + (rand() - 0.5) * size * 0.9, y + (rand() - 0.5) * size * 0.8]);
            }
        }

        for (let i = 0; i < pts.length; i++) {
            const poly = cell(pts, i, w, h);
            if (poly.length < 3) continue;
            const [cx, cy] = pts[i];
            const g = inset(poly, cx, cy, 2.5);
            // colour by a diagonal sweep plus a little noise per pane
            const t = (cx / w) * 0.45 + (cy / h) * 0.75 - 0.1 + (rand() - 0.5) * 0.18;
            const [r, gg, b] = hue(t);
            const lift = 0.72 + rand() * 0.38;
            const grad = ctx.createRadialGradient(cx - size * 0.2, cy - size * 0.25, 2, cx, cy, size * 0.85);
            grad.addColorStop(0, `rgb(${Math.min(255, r * lift * 1.12 + 12)},${Math.min(255, gg * lift * 1.12 + 12)},${Math.min(255, b * lift * 1.12 + 12)})`);
            grad.addColorStop(1, `rgb(${r * lift * 0.55},${gg * lift * 0.55},${b * lift * 0.55})`);
            ctx.beginPath();
            g.forEach(([x, y], k) => k ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
            ctx.closePath();
            ctx.fillStyle = grad;
            ctx.fill();
            ctx.lineJoin = 'round';
            ctx.lineWidth = 6;
            ctx.strokeStyle = '#16121c';
            ctx.stroke();
        }

        // light coming through: a soft glow and a darker edge
        const glow = ctx.createRadialGradient(w * 0.6, h * 0.3, 0, w * 0.6, h * 0.3, Math.max(w, h) * 0.8);
        glow.addColorStop(0, 'rgba(255,255,255,0.04)');
        glow.addColorStop(1, 'rgba(0,0,0,0.35)');
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, w, h);
    }

    function show(on) {
        if (on && !canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'glass-wallpaper';
            canvas.setAttribute('aria-hidden', 'true');
            document.getElementById('desktop').prepend(canvas);
            draw();
        } else if (!on && canvas) {
            canvas.remove();
            canvas = null;
        }
    }

    // redraw whenever the desktop changes size (window resize, late layout)
    let timer = null, lastW = 0, lastH = 0;
    const later = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            const host = document.getElementById('desktop');
            if (!host || (host.clientWidth === lastW && host.clientHeight === lastH)) return;
            lastW = host.clientWidth; lastH = host.clientHeight;
            draw();
        }, 120);
    };
    window.addEventListener('resize', later);
    if (typeof ResizeObserver !== 'undefined') {
        document.addEventListener('DOMContentLoaded', () => new ResizeObserver(later).observe(document.getElementById('desktop')));
    }

    return { show, draw };
})();
