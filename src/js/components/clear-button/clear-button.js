/**
 * The clear-button web component module.
 *
 * @author Ester Hugosson <eh225bx@student.lnu.se>
 * @version 1.1.0
 */

import { StorageWrapper } from "../storageWrapper/storageWrapper.js"
// Define a template
const template = document.createElement('template')
template.innerHTML = `

    <style>

    button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    }

    </style>


    <form id="deleteAllRecpies">
        <button type="submit" >Delete all recepies</button>
    </form>

`
customElements.define('clear-button',

    class extends HTMLElement {

        constructor() {
            super()

            this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))

            this.wrapper = new StorageWrapper()
        }

        connectedCallback() {
            this.shadowRoot.querySelector('#deleteAllRecpies').addEventListener('submit', (event) => {
                event.preventDefault()
                this.deleteAllRecipes()
                window.location.reload()
            })
            
        }

        deleteAllRecipes() {
            try{
                this.wrapper.clearAllStorage()
            } catch(e) {
                console.error('Failed to delete all recipes:', error)
                alert('Error: Failed to delete all recipe.')
            }
            
        }
    }
)