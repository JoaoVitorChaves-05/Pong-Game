class Player {
    constructor(x, y, width, height) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
        this.ctx = null
    }

    setContext(ctx) {
        this.ctx = ctx;
    }

    render() {
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(
            this.position.x, 
            this.position.y, 
            this.width, 
            this.height
        );
    }

    moveUp() {
        if (this.position.y > 0) {
            this.position.y -= 1;
        }
    }

    moveDown() {
        if (this.position.y + this.height < this.ctx.canvas.height) {
            this.position.y += 1;
        }
    }
}

export default Player;