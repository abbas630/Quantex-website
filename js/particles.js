/*
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('hero-constellation');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    
    const isMobile = window.innerWidth < 768;

    const config = {
        particleCount: isMobile ? 20 : 100,
        connectionDistance: isMobile ? 80 : 140,
        mouseDistance: 200,
        baseSpeed: 0.3,
        color: '255, 255, 255' 
    };

    let mouse = { x: null, y: null };

    if (!isMobile) {
        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });
    }

    function setCanvasDimensions() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        config.particleCount = window.innerWidth < 768 ? 20 : 100;
        initParticles();
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.directionX = (Math.random() * 2) - 1;
            this.directionY = (Math.random() * 2) - 1;
            this.size = (Math.random() * 2) + 0.5;
        }

        update() {
            if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
            this.x += this.directionX * config.baseSpeed;
            this.y += this.directionY * config.baseSpeed;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${config.color}, 0.4)`;
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < config.particleCount; i++) {
            particlesArray.push(new Particle());
        }
    }

    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let dx = particlesArray[a].x - particlesArray[b].x;
                let dy = particlesArray[a].y - particlesArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.connectionDistance) {
                    opacityValue = 1 - (distance / config.connectionDistance);
                    ctx.strokeStyle = `rgba(${config.color}, ${opacityValue * 0.2})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
            
            if (!isMobile && mouse.x != null) {
                let dxMouse = particlesArray[a].x - mouse.x;
                let dyMouse = particlesArray[a].y - mouse.y;
                let distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
                
                if (distanceMouse < config.mouseDistance) {
                    ctx.strokeStyle = `rgba(41, 151, 255, ${0.2 * (1 - distanceMouse/config.mouseDistance)})`; 
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        connect();
    }

    window.addEventListener('resize', () => { setCanvasDimensions(); });
    setCanvasDimensions();
    animate();
});
*/
