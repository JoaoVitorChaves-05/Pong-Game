class Ball {
    constructor(x, y, width, height, velocity) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
        this.velocity = velocity;
        this.direction = { x: null, y: null };
        this.ctx = null;
    }

    setContext(ctx) {
        this.ctx = ctx;
    }

    render() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(
            this.position.x + this.velocity * this.direction.x, 
            this.position.y + this.velocity * this.direction.y, 
            this.width, 
            this.height
        );
    }

    start() {
        const angle = Math.floor(Math.random() * 361);
        this.velocity = 3;
        this.direction.x = Math.cos(angle * (Math.PI/180));
        this.direction.y = Math.sin(angle * (Math.PI/180));
        this.position.x += this.velocity * this.direction.x;
        this.position.y += this.velocity * this.direction.y;

        document.querySelector("#message").innerHTML = "";
        document.querySelector("#message").style.marginTop = "10px";
        document.querySelector("#message").style.marginBottom = "10px";
        document.querySelector("#message").style.paddingTop = "13.5px";
        document.querySelector("#message").style.paddingBottom = "13.5px";

    }

    hitOnTop() {
        return this.position.y < 0;
    }

    hitOnBottom() {
        return this.position.y > this.ctx.canvas.height - 10;
    }

    hitOnLeft() {
        return this.position.x < 0;
    }

    hitOnRight() {
        return this.position.x > this.ctx.canvas.width - 10;
    }

    updatePosition() {
        if (this.hitOnRight()) {
            this.position.x = this.ctx.canvas.width - 10;
            this.direction.x = -this.direction.x;//(-1/this.direction.x);
            
        } else if (this.hitOnLeft()) {
            this.position.x = 0;
            this.direction.x = -this.direction.x;//(-1/this.direction.x);
            
        } else {
            this.position.x += this.velocity * this.direction.x;
        }

        if (this.hitOnBottom()) {
            this.position.y = this.ctx.canvas.height - 10;
            this.direction.y = -this.direction.y;//(-1/this.direction.y);
            
        } else if (this.hitOnTop()) {
            this.position.y = 0;
            this.direction.y = -this.direction.y;//(-1/this.direction.y);
            
        } else {
            this.position.y += this.velocity * this.direction.y;
        }
    }
}

export default Ball;