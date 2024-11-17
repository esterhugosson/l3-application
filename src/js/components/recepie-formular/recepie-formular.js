/**
 * The recepie-form web component module.
 *
 * @author Ester Hugosson <eh225bx@student.lnu.se>
 * @version 1.1.0
 */

// Define a template
const template = document.createElement('template')
template.innerHTML = `

    <form id="recipeForm">
        <input type="text" id="recipeTitle" placeholder="Recipe Title" required>
        <input type="url" id="recipeLink" placeholder="Recipe URL" required>
        <textarea id="recipeNotes" placeholder="Notes (optional)"></textarea>
        <button type="submit">Add Recipe</button>
    </form>

`
customElements.define('recepie-formular', 

    class extends HTMLElement {

        constructor() {
            super()

            this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
        }






    }
)