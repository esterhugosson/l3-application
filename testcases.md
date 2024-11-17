# Test Report for Recipe Manager Application (Manual Testing)

## 1. Introduction
This test report documents the results of manual tests conducted for the **Recipe Manager** application. The application allows users to add, view, search, delete, and clear all recipes. The tests cover the core functionalities and ensure that the system behaves as expected.

## 2. Test Objective
To verify that the Recipe Manager application meets the functional and non-functional requirements. Specifically, the tests focus on ensuring that users can:
- Add a recipe with title, link, and optional notes.
- View all saved recipes.
- Search and filter recipes.
- Delete individual recipes and clear all recipes.

## 3. Test Setup
- **Test Environment**: The application was tested on Google Chrome, version 116.0.5845.96, with JavaScript enabled.
- **Storage**: The application uses `localStorage` to store recipes.
- **Test Data**: Various recipes with titles, links, and notes were added for testing.

## 4. Test Cases

### 4.1. Add Recipe Test
**Objective**: Ensure the user can add a recipe with a title, link, and optional notes.

- **Test Steps**:
  1. Click the "Add Recipe" button.
  2. Enter a valid title (e.g., "Chocolate Cake").
  3. Enter a valid link (e.g., "http://example.com/chocolate-cake").
  4. Optionally enter some notes (e.g., "Delicious dessert").
  5. Click "Save Recipe."
  
- **Expected Outcome**:
  - The new recipe appears in the recipe list with the title, link, and notes displayed correctly.
  - The recipe is saved in `localStorage`.

- **Actual Outcome**:
  - **Pass**: The recipe was added successfully, and the list updated accordingly.

### 4.2. Add Recipe with Missing Title/Link
**Objective**: Ensure the system prevents the addition of recipes without a title or link.

- **Test Steps**:
  1. Click the "Add Recipe" button.
  2. Leave the title field empty.
  3. Enter a valid link (e.g., "http://example.com").
  4. Click "Save Recipe."

- **Expected Outcome**:
  - An error message appears stating "Title is required."

- **Actual Outcome**:
  - **Pass**: The error message was displayed correctly.

- **Test Steps**:
  1. Click the "Add Recipe" button.
  2. Enter a valid title (e.g., "Banana Bread").
  3. Leave the link field empty.
  4. Click "Save Recipe."

- **Expected Outcome**:
  - An error message appears stating "Link is required."

- **Actual Outcome**:
  - **Pass**: The error message was displayed correctly.

### 4.3. View Recipes Test
**Objective**: Ensure the user can view the list of saved recipes.

- **Test Steps**:
  1. Add a few recipes (at least 3).
  2. Refresh the page.
  3. View the list of recipes.
  
- **Expected Outcome**:
  - All added recipes are displayed with their title, link, and notes.

- **Actual Outcome**:
  - **Pass**: All recipes were correctly displayed.

### 4.4. Search and Filter Recipes Test
**Objective**: Ensure the user can search for recipes by title or notes.

- **Test Steps**:
  1. Add multiple recipes with varying titles and notes.
  2. Use the search bar to filter recipes by a keyword (e.g., "Cake").
  3. Verify that only recipes with "Cake" in the title or notes are shown.
  4. Clear the search filter.

- **Expected Outcome**:
  - The recipe list is filtered correctly based on the search term.
  - The "Clear Search" button resets the search results.

- **Actual Outcome**:
  - **Pass**: The filter worked as expected, and the list reset after clearing the search.

### 4.5. Delete Recipe Test
**Objective**: Ensure the user can delete a specific recipe.

- **Test Steps**:
  1. Add a recipe.
  2. Click the delete button next to the recipe.
  
- **Expected Outcome**:
  - The recipe is removed from the list and `localStorage`.

- **Actual Outcome**:
  - **Pass**: The recipe was successfully deleted.

### 4.6. Clear All Recipes Test
**Objective**: Ensure the user can delete all saved recipes at once.

- **Test Steps**:
  1. Add multiple recipes.
  2. Click the "Clear All Recipes" button.
  
- **Expected Outcome**:
  - All recipes are removed from the list and `localStorage`.
  - A confirmation message appears stating that all recipes have been deleted.

- **Actual Outcome**:
  - **Pass**: All recipes were deleted, and the confirmation message appeared.

## 5. Edge Cases

### 5.1. Add Recipe with Invalid Link
**Objective**: Ensure the system handles invalid URLs correctly.

- **Test Steps**:
  1. Add a recipe with a title (e.g., "Invalid Recipe").
  2. Enter an invalid URL (e.g., "htp://invalid-url").
  3. Click "Save Recipe."
  
- **Expected Outcome**:
  - The system should either reject the invalid URL or handle it gracefully.

- **Actual Outcome**:
  - **Pass**: The application did not accept the invalid URL and displayed an error message.

### 5.2. Handle Full `localStorage`
**Objective**: Ensure the system handles cases where `localStorage` is full.

- **Test Steps**:
  1. Fill `localStorage` to its maximum capacity.
  2. Try adding a new recipe.

- **Expected Outcome**:
  - The application should display an error message indicating that `localStorage` is full.

- **Actual Outcome**:
  - **Pass**: The application correctly displayed an error message when attempting to add a new recipe.

## 6. Summary of Test Results

| Test Case                           | Expected Outcome                                      | Actual Outcome | Pass/Fail |
|-------------------------------------|------------------------------------------------------|----------------|-----------|
| Add Recipe                          | Recipe is added and saved correctly                    | Pass           | Pass      |
| Add Recipe with Missing Title/Link  | Error message displayed                                | Pass           | Pass      |
| View Recipes                        | Recipes are displayed correctly                        | Pass           | Pass      |
| Search and Filter Recipes           | Recipes are filtered correctly                         | Pass           | Pass      |
| Delete Recipe                       | Recipe is deleted from the list and `localStorage`     | Pass           | Pass      |
| Clear All Recipes                   | All recipes are removed and confirmation appears      | Pass           | Pass      |
| Add Recipe with Invalid Link        | Invalid link is rejected or handled                   | Pass           | Pass      |
| Handle Full `localStorage`          | Error message displayed when `localStorage` is full    | Pass           | Pass      |

## 7. Conclusion
The manual tests for the Recipe Manager application have been successfully executed. All core functionalities, including adding, viewing, searching, deleting, and clearing recipes, are working as expected. The application also handles edge cases such as invalid links and full `localStorage` gracefully.

The application is ready for further development or deployment with no critical issues found during testing.

