import create from '../services/create.js';
import Component from '../services/component.js';
// create('', { classes: [''] }, '', [])

export default class Chart extends Component {
  constructor() {
    super();
    this.state = {
      btns: [
        {
          id: 'add',
          label: 'Add'
        },
        {
          id: 'remove',
          label: 'Remove'
        }
      ]
    }
  }
  render() {
    this.component = create('div', { classes: ['chart'], attributes: [['data-chart', true]] }, '', [
      create('canvas', { attributes: [['id', 'chart']] }),
      create('div', null, '', [
        ...this.state.btns.map(({ id, label }) => create('button', { attributes: [['id', id]] }, label)),
        create('input', { attributes: [['type', 'text'], ['placeholder', 'name'], ['id', 'name']] })
      ]),
      create('div', { classes: ['btn'], attributes: [['data-btn-chart', true]] }, '', [
        create('i', { classes: ['fas', 'fa-expand-arrows-alt'] })
      ])
    ])
  }
}