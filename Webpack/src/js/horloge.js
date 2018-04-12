import format from 'date-fns/format';
import config from '../config/config.json5';

import '../css/horloge.css';

class Horloge {
  /**
   * @constructor
   * @param {HTMLElement} container
   */
  constructor(container) {
    this._container = container;
  }

  _render() {
    const now = new Date();
    this._container.innerText = format(now, config.horloge.format);
  }

  start() {
    this._render(format);
    setInterval(this._render.bind(this), 1000);
  }
}

export { Horloge };
