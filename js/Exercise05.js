// Initial recipe data (name and explanation)
const recipes = [
    { name: "Recipe 1", explanation: "Instructions for recipe 1" },
    { name: "Recipe 2", explanation: "Instructions for recipe 2" },
    { name: "Recipe 3", explanation: "Instructions for recipe 3" },
    { name: "Recipe 4", explanation: "Instructions for recipe 4" },
    { name: "Recipe 5", explanation: "Instructions for recipe 5" }
]

// Function to display recipes on the page
const displayRecipes = () => {
    const recipeList = document.getElementById("recipe-list")
    recipeList.innerHTML = ""

    recipes.forEach((recipe, index) => {
        const li = document.createElement("li")
        li.textContent = `${recipe.name}: ${recipe.explanation}`
        recipeList.appendChild(li)
    })
}

// Function to delete a recipe
const deleteRecipe = () =>{
    const recipeNumber = parseInt(document.getElementById("recipe-number").value)

    if (isNaN(recipeNumber) || recipeNumber < 1 || recipeNumber > recipes.length) {
        alert("Invalid recipe number")
        return
    }

    recipes.splice(recipeNumber - 1, 1)
    console.log("a")
    displayRecipes()
}