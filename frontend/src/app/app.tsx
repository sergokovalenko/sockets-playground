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

  // TODO: for tests, remove it
  window['player'] = player;

  context.fillStyle = '#000000';
  context.fillRect(0, 0, 1000, 1000);

  requestAnimationFrame(rafCb);
  context.fillStyle = '#ff0000';
  context.fillRect(player.x, player.y, player.width, player.height);
};
