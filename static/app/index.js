import {
  ReactDOM,
} from "https://unpkg.com/es-react";
import {Home} from './comps/Home/index.js'
import {html} from './tools.js'

const renderNode = document.getElementById('home')

ReactDOM.render(
  Home(html`
    <h1>lol</h1>
  `),
  renderNode
);
