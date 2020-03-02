import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js';
import {App} from './comps/Home/index.js'
const renderNode = document.getElementById('home')

render(
  html`<${App} page="All" />`,
  renderNode
);
