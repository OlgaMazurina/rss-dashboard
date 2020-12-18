import create from '../services/create.js';
import Component from '../services/component.js';

export default class CountryBlock extends Component {
  render() {
    this.component = create('div', { classes: ['country'], attributes: [['data-country', true]] }, '', [
      create('div', { classes: ['btn'], attributes: [['data-btn-country', true]] }, '', [
        create('i', { classes: ['fas', 'fa-expand-arrows-alt'] })
      ])
    ]);
  }
}