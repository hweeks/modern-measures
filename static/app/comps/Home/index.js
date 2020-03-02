import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import {Footer} from '../Footer/index.js'
import {Header} from '../Header/index.js'
import {Link} from '../Link/index.js'
import {Converter} from '../Converter/index.js'

export class App extends Component {
  addTodo() {
    const { todos = [] } = this.state;
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }
  render({ page }, { todos = [] }) {
    return html`
      <div class="home-wrapper">
        <${Header}><//>
        <${Converter} property="length" fromUnit="football field" toUnit="beard year">converter content<//>
        <${Converter} property="volume" fromUnit="swimming pool" toUnit="hogshead">converter content<//>
        <${Converter} property="area" fromUnit="football field" toUnit="hectare">converter content<//>
        <${Converter} property="mass" fromUnit="paperclip" toUnit="troy ounce">converter content<//>
        <${Footer}>
          made with 💃🏻 in <${Link} href="https://en.wikipedia.org/wiki/Hudson%27s_Bay_(retailer)">Hudson Bay<//>
        <//>
      </div>
    `;
  }
}
