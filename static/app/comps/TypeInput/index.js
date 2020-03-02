import {html} from '../../tools.js'

export const Home = (children) => {
  return html`
    <div class="home-wrapper">
      ${children && children()}
    </div>
  `
}
