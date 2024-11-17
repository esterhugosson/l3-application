/**
 * The saved recepies web component module.
 *
 * @author Ester Hugosson <eh225bx@student.lnu.se>
 * @version 1.1.0
 */

// Define a template
const template = document.createElement('template')
template.innerHTML = `

<div class="saved-recepies">

    <h2>Saved Recipes</h2>
    <ul id="recipeList"></ul>

</div>

`

customElements.define('saved-recepies', 

    class extends HTMLElement {

        constructor() {
            super()

            this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
        }






    }
)