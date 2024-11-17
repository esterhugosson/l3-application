/**
 * The recepie-form web component module.
 *
 * @author Ester Hugosson <eh225bx@student.lnu.se>
 * @version 1.1.0
 */

import { StorageWrapper } from "../storageWrapper/storageWrapper.js"

const SUCCESS_MESSAGE_DISPLAY_DURATION = 3000

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

    .success-message {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    margin-top: 10px;
    text-align: center;
    display: none; 
    }
    </style>

    <h2> Add a recipe:</h2>

    <form id="recipeForm">
        <input type="text" id="recipeTitle" placeholder="Recipe Title" required>
        <input type="url" id="recipeLink" placeholder="Recipe URL" required>
        <button type="submit">Add Recipe</button>
    </form>

    <div class="success-message" id="successMessage">Recipe added successfully!</div>

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
            this.successMessage = this.shadowRoot.querySelector('#successMessage')

            this.wrapper = new StorageWrapper()
        }

        connectedCallback() {
            this.form.addEventListener('submit', (event) => this.onSubmitRecipeForm(event))
        }

        disconnectedCallback() {
            this.form.removeEventListener('submit', this.onSubmitRecipeForm)
        }

        onSubmitRecipeForm(event) {
            event.preventDefault()

            const title = this.titleInput.value
            const link = this.linkInput.value

            this.saveRecepieInStorage(title, link)

            this.form.reset()

            this.showSuccessMessageForDuration()
            
        }

        saveRecepieInStorage(title, value) {

            try {
                const key = `recipe_${title}`

                this.wrapper.storeData(key, value)

            } catch (error) {
                console.error('Failed to save recipe:', error)
                alert('Error: Could not save the recipe.')
            }
            
            
        }

        showSuccessMessageForDuration() {

            this.showSuccessMessage()

            setTimeout(() => {
                this.hideSuccessMessage()
                window.location.reload()
            }, SUCCESS_MESSAGE_DISPLAY_DURATION)

        }

        showSuccessMessage() {
            this.successMessage.style.display = 'block'
            this.form.style.display = 'none'
        }
    
        hideSuccessMessage() {
            this.successMessage.style.display = 'none'
            this.form.style.display = 'block'
        }

    }
)