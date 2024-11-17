/**
 * The saved recepies web component module.
 *
 * @author Ester Hugosson <eh225bx@student.lnu.se>
 * @version 1.1.0
 */

// Define a template
const template = document.createElement('template')
template.innerHTML = `

<style>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
} </style>

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