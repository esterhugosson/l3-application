/**
 * The recepie-manager web component module.
 *
 * @author Ester Hugosson <eh225bx@student.lnu.se>
 * @version 1.1.0
 */

import '../recepie-formular/index.js'
import '../saved-recepies/index.js'
import '../clear-button/index.js'

// Define a template
const template = document.createElement('template')
template.innerHTML = `

    <h1> My recipe manager </h1>

    <saved-recepies> </saved-recepies>

    <clear-button> </clear-button>

    <recepie-formular> </recepie-formular>

`

customElements.define('recepie-manager', 

    class extends HTMLElement {

        constructor() {
            super()

            this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
        }

    }
)