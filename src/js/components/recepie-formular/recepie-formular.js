/**
 * The recepie-form web component module.
 *
 * @author Ester Hugosson <eh225bx@student.lnu.se>
 * @version 1.1.0
 */

import { StorageWrapper } from "../storageWrapper/storageWrapper.js"
// Define a template
const template = document.createElement('template')
template.innerHTML = `

    <style>
    {
    margin-bottom: 20px;
    }

    input {
    display: block;
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
    }

    button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    }
    </style>

    <h2> Add a recipe:</h2>

    <form id="recipeForm">
        <input type="text" id="recipeTitle" placeholder="Recipe Title" required>
        <input type="url" id="recipeLink" placeholder="Recipe URL" required>
        <button type="submit">Add Recipe</button>
    </form>

`
customElements.define('recepie-formular',

    class extends HTMLElement {

        constructor() {
            super()

            this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

            this.form = this.shadowRoot.querySelector('#recipeForm')
            this.titleInput = this.shadowRoot.querySelector('#recipeTitle')
            this.linkInput = this.shadowRoot.querySelector('#recipeLink')
            this.noteInput = this.shadowRoot.querySelector('#recipeNotes')

            this.wrapper = new StorageWrapper()
        }

        connectedCallback() {
            this.form.addEventListener('submit', (event) => this.handleRecepieSubmit(event))
        }

        disconnectedCallback() {
            this.form.removeEventListener('submit', this.handleRecepieSubmit)
        }

        handleRecepieSubmit(event) {
            event.preventDefault()

            const title = this.titleInput.value
            const key = `recipe_${title}`
            const link = this.linkInput.value

            this.saveRecepieInStorage(key, link)

            this.form.reset()
            
        }

        saveRecepieInStorage(title, value) {

            try {
                this.wrapper.storeData(title, value)

            } catch (error) {
                console.error('Failed to save recipe:', error)
                alert('Error: Could not save the recipe.')
            }
            
            
        }





    }
)