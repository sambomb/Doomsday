import Doomsday from './Doomsday.js';

window.Doomsday = Doomsday;

Hooks.once('init', async () => {
  await game.settings.register('doomsday', 'progress', {
    name: 'progress',
    scope: 'world',
    config: false,
    type: Number,
    default: 0,
    range: {
      min: 0,
      max: 100,
      step: 1
    },
    onChange: value => {
      $('#doomsday [name=progress]').val(value);
    }
  });
});

Hooks.once('ready', () => {
  window.doomsday = new Doomsday().render(true);
  console.log('Doomsday | Ready');
});
