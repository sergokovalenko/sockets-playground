import Player from "../Entities/Player";
import Entity from "../Entities/Entity";

const animation = (context: CanvasRenderingContext2D, entites: Entity[]): void => {
  entites.forEach(entity => {
    context.fillStyle = entity.color;
    context.fillRect(entity.x, entity.y, entity.width, entity.height);
  });
};

window.onload = () => {
  const canvas = document.getElementById('gameField') as HTMLCanvasElement;
  const context = canvas.getContext('2d');
  const player: Player = new Player(0, 0, 20, 20, '#ff0000');
  const background: Entity = new Entity(0, 0, 1000, 1000, '#000000');
  const rafCb = () => {
    animation(context, [background, player]);

    requestAnimationFrame(rafCb);
  };

  window.addEventListener('keypress', (event) => {
    if (event.key === 'w') {
      player.moveUp();
    }

    if (event.key === 's') {
      player.moveDown();
    }

    if (event.key === 'd') {
      player.moveRight();
    }

    if (event.key === 'a') {
      player.moveLeft();
    }
  });

  requestAnimationFrame(rafCb);
};
