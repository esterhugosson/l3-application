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
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    button {
        padding: 5px 10px;
        background-color: #f44336;
        color: white;
        border: none;
        cursor: pointer;
        border-radius: 4px;
    }
    button:hover {
        background-color: #e53935;
    }

    .recipe-item {
        margin-bottom: 15px;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        background-color: #f9f9f9;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .recipe-link {
        color: #007bff;
        text-decoration: none;
        font-size: 14px;
        margin-right: 10px;
    }

    .recipe-link:hover {
        text-decoration: underline;
    }

    .delete-button {
        background-color: #f44336;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 5px;
        font-size: 14px;
    }

    .delete-button:hover {
        background-color: #d32f2f;
    }

    .delete-button:focus {
        outline: none;
    }
    </style>



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
            this.renderRecipeList()
        }

        renderRecipeList() {

            this.clearList()

            const keys = Object.keys(localStorage)

            this.displayRecipes(keys)

        }

        clearList() {
            this.list.innerHTML = ''
        }

        displayRecipes(keys) {

            keys.forEach(key => {

                const recipe = this.wrapper.retrieveData(key)
                if (recipe) {
                    this.createListItem(key, recipe)
                }
            })

        }

        createListItem(key, recipe) {

            const li = document.createElement('li')

            const recipeContent = document.createElement('div')
            recipeContent.innerHTML = `
            <strong>${key}</strong><br>
            <a href="${recipe}" target="_blank" class="recipe-link">${recipe}</a>
            `

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', () => this.deleteRecipe(key))


            li.appendChild(recipeContent)
            li.appendChild(deleteButton)
            this.list.appendChild(li)

        }

        deleteRecipe(key) {
            this.wrapper.removeData(key)
            this.renderRecipeList()
        }


    }
)