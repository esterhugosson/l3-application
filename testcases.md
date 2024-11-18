# Manual Test Cases for Recipe Manager Application

### Pre-conditions:
- The application is running.

## Test Case 1: Add Recipe - Valid Inputs

### Steps:
1. Click on the "Add Recipe" button.
2. Enter a valid title (e.g., "Chocolate Cake") in the "Title" input field.
3. Enter a valid recipe URL (https://example.com/chocolate-cake") in the "URL" input field.
4. Click on the "Add recepie" button.

### Expected Results:
- The recipe is saved in the storage.
- A confirmation message is shown (e.g., "Recipe added successfully").
- The new recipe appears in the list of saved recipes with its title and link.
- **Outcome**: ✅ 

## Test Case 2: Add Recipe - Missing Title

### Steps:
1. Click on the "Add Recipe" button.
2. Leave the "Title" input field empty.
3. Enter a valid recipe URL ("https://example.com/chocolate-cake") in the "URL" input field.
4. Click on the "Add recepie" button.

### Expected Results:
- The recipe is not saved.
- An error message appears, notifying the user that the title is required (e.g., "Title is required").
- **Outcome**: ✅ 

---

## Test Case 3: Add Recipe - Missing Link

### Steps:
1. Click on the "Add Recipe" button.
2. Enter a valid title (e.g., "Chocolate Cake") in the "Title" input field.
3. Leave the "URL" input field empty.
4. Click on the "Add recipe button.

### Expected Results:
- The recipe is not saved.
- An error message appears, notifying the user that the link is required (e.g., "URL is required").
- **Outcome**: ✅ 

---

## Test Case 4: View Recipes - No Recipes Stored

### Steps:
1. Open the application.

### Expected Results:
- The application displays a message ("No recipes saved yet").
- **Outcome**: ✅ 

---

## Test Case 5: View Recipes - Display Stored Recipes

### Pre-conditions:
- The application is running and at least one recipe is stored in `localStorage`.

### Steps:
1. Open the application.

### Expected Results:
- All saved recipes are displayed with their title and url.
- The list should show the correct recipe title and url.
- **Outcome**: ✅ 

---

## Test Case 6: Delete Recipe - Single Recipe Deletion

### Pre-conditions:
- The application is running and at least one recipe is stored in `localStorage`.

### Steps:
1. Open the application.
2. Click the delete button next to one of the stored recipes.

### Expected Results:
- The selected recipe is removed from the list.
- The recipe is deleted from `localStorage`.
- **Outcome**: ✅ 

---

## Test Case 7: Clear All Recipes

### Test Objective:
Ensure that the user can clear all recipes from the list.

### Pre-conditions:
- The application is running and multiple recipes are stored in `localStorage`.

### Steps:
1. Open the application.
2. Click the "Delete All Recipes" button.

### Expected Results:
- All recipes are removed from the list.
- All recipes are deleted from `localStorage`.
- **Outcome**: ✅ 

---

## Test Case 8: Data Persistence After Refresh

### Test Objective:
Ensure that the recipes persist after refreshing the page or reopening the browser.

### Pre-conditions:
- At least one recipe is saved in `localStorage`.

### Steps:
1. Add a recipe ( "Chocolate Cake" with a valid url).
2. Refresh the page or close and reopen the browser.

### Expected Results:
- The added recipe should persist and appear in the list after the page reloads.
- **Outcome**: ✅ 
  
---

### Conclusion of first try
- Summary of test results: 
  - Passed: 8/8 
  - Failed: 0

