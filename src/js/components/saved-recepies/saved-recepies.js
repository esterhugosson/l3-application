/**
 * The saved recepies web component module.
 *
 * @author Ester Hugosson <eh225bx@student.lnu.se>
 * @version 1.1.0
 */

import { StorageWrapper } from "../storageWrapper/storageWrapper.js"
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



    <h2>Saved Recipes</h2>
    <ul id="recipeList"></ul>


`

customElements.define('saved-recepies', 

    class extends HTMLElement {

        constructor() {
            super()

            this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

            this.list = this.shadowRoot.querySelector('#recipeList')
            this.wrapper = new StorageWrapper()
        }

        connectedCallback() {
            this.getRecipeList()
        }

        getRecipeList() {

            this.list.innerHTML = ''

            const keys = Object.keys(localStorage)

            this.displayList(keys)

        }

        displayList(keys) {

            keys.forEach(key => {

                const recipe = this.wrapper.retrieveData(key)
                if (recipe) {
                    // Create a list item for each recipe
                    const li = document.createElement('li')
                    li.innerHTML = `<strong>${key}</strong><br>URL: <a href="${recipe.link}" target="_blank">${recipe.link}</a><br>Notes: ${recipe.note}`
                    this.list.appendChild(li)
                }
            })

        }


    }
)