import { html, Component } from 'https://unpkg.com/htm/preact/standalone.module.js';
import convert from './convert.js';

export class Converter extends Component {
  converterTemplate ({ property, fromUnit, toUnit }) {
    return ({ target }) => {
      const { converted } = this.state;
      const { value } = target
      const qty = Number(value)

      this.setState({ converted: convert({ property, qty, fromUnit, toUnit }) })
    }
  }

  render (props, { converted = 0 }) {
    return html`
      <section class="big-converter">
        <div>
          <input
            class="convert-input"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            onInput="${this.converterTemplate(props)}"
          /> ${props.fromUnit}s in ${props.toUnit}s:
        </div>
        <div>${converted}</div>
        <div>${props.children}</div>
      </section>
    `
  }
}
