export default class Doomsday extends FormApplication {
  constructor(exampleOption) {
    super();
    this.exampleOption = exampleOption;
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['form'],
      popOut: false,
      closeOnSubmit: false,
      submitOnChange: true,
      template: `/modules/doomsday/templates/doomsday-bar.hbs`,
      id: 'doomsday-bar',
    });
  }

  getData() {
    // Return data to the template
    let progress = game.settings.get('doomsday', 'progress');
    let isGM = game.user.isGM;
    return {
      isGM,
      progress
    };
  }

  activateListeners(html) {
    super.activateListeners(html);
  }

  async _updateObject(event, formData) {
    game.settings.set('doomsday', 'progress', formData.progress);
  }
}