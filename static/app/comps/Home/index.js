import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import { Converter } from '../Converter/index.js'

export class App extends Component {
  addTodo() {
    const { todos = [] } = this.state;
    this.setState({ todos: todos.concat(`Item ${todos.length}`) });
  }
  render({ page }, { todos = [] }) {
    return html`
      <div class="home-wrapper">
        <ul>
          ${todos.map(todo => html`
            <li>${todo}</li>
          `)}
        </ul>
        <button onClick=${() => this.addTodo()}>Add Todo</button>
        <${Converter} property="mass" fromUnit="paperclip" toUnit="troy ounce">converter content<//>
        <${Converter} property="length" fromUnit="football field" toUnit="football field">converter content<//>
      </div>
    `;
  }
}
