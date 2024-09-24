class GameController {
    constructor(player1, player2, ball) {
        this.player1 = player1;
        this.player2 = player2;
        this.ball = ball;
        this.points = {
            player1: 0,
            player2: 0
        };
    }

    checkColliders() {
        const pointsPlayer1 = [{
            x: this.player1.position.x + 8,
            y: this.player1.position.y
        }, {
            x: this.player1.position.x + 8,
            y: this.player1.position.y + 30
        }];

        const pointsPlayer2 = [{
            x: this.player2.position.x - 8,
            y: this.player2.position.y
        }, {
            x: this.player2.position.x - 8,
            y: this.player2.position.y + 30
        }];

        if ((
            this.ball.position.y >= pointsPlayer1[0].y &&
            this.ball.position.y <= pointsPlayer1[1].y
        ) && (
            this.ball.position.x <= pointsPlayer1[0].x
        )) {
            this.ball.direction.x = -this.ball.direction.x;
        }
        
        if ((
            this.ball.position.y >= pointsPlayer2[0].y &&
            this.ball.position.y <= pointsPlayer2[1].y
        ) && (
            this.ball.position.x >= pointsPlayer2[0].x
        )) {
            this.ball.direction.x = -this.ball.direction.x;
        }
    }

    checkGoal() {
        if (this.ball.hitOnRight()) {
            this.points.player1 += 1;
            this.ball.position.x = this.ball.ctx.canvas.width / 2 - 10;
            this.ball.position.y = this.ball.ctx.canvas.height / 2 - 10;
            this.ball.direction.x = 0;
            this.ball.direction.y = 0;
            document.querySelector("#message").innerHTML = "Press Enter to play";
            document.querySelector("#message").style.marginTop = "10px";
            document.querySelector("#message").style.marginBottom = "10px";
            document.querySelector("#message").style.paddingTop = "0px";
            document.querySelector("#message").style.paddingBottom = "0px";
        } else if (this.ball.hitOnLeft()) {
            this.points.player2 += 1;
            this.ball.position.x = this.ball.ctx.canvas.width / 2 - 10;
            this.ball.position.y = this.ball.ctx.canvas.height / 2 - 10;
            this.ball.direction.x = 0;
            this.ball.direction.y = 0;
            document.querySelector("#message").innerHTML = "Press Enter to play";
            document.querySelector("#message").style.marginTop = "10px";
            document.querySelector("#message").style.marginBottom = "10px";
            document.querySelector("#message").style.paddingTop = "0px";
            document.querySelector("#message").style.paddingBottom = "0px";
        }
    }

    updateGoal() {
        const player1points = document.querySelector("#player1-points");
        const player2points = document.querySelector("#player2-points");

        player1points.innerHTML = this.points.player1;
        player2points.innerHTML = this.points.player2;
    }
}

export default GameController;