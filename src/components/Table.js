import create from '../services/create.js';
import Component from '../services/component.js';

export default class Table extends Component {
  render() {
    this.component = create('div', { classes: ['table'], attributes: [['data-table', true]] }, '', [
      create('div', { classes: ['btn'], attributes: [['data-btn-table', true]] }, '', [
        create('i', { classes: ['fas', 'fa-expand-arrows-alt'] })
      ])
    ]);
  }
}