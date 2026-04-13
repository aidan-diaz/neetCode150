//Write a function that checks if given inventory array has ingredients for a given recipe (recipe array)

//input arr of strs (inventory), and input arr of strs (recipe)
//see if items in inventory can make a recipe
//if we have the right items, return true
//if inventory is missing an item in the recipe, return false

//count the amount each item in the recipe, as well as the inventory
//compare the count of each item
//if we have enough to make the recipe return true
//if not, return false

const recipe1 = ["flour", "egg", "chocolate_chips", "brown_sugar"]
const recipe2 = ["flour", "egg", "chocolate_chips", "brown_sugar", "egg", "egg"]
const recipe3 = []


const inventory1 = ["tomatoes", "bananas","brown_sugar", "egg", "chocolate_chips", "flour"]
const inventory2 = ["flour", "egg", "chocolate_chips", "brown_sugar", "egg"]

const inventory3 = ["flour", "egg", "chocolate_chips", "brown_sugar", "egg", "egg", "egg", "egg", "egg"]



function checkRecipe(inventory, recipe) {
    const inventoryMap = {}
    const recipeMap = {}

    if(!recipe) return true

    for(const ing of inventory) {
        if(!inventoryMap[ing]) {
            inventoryMap[ing] = 1
        }else {
            inventoryMap[ing]++
        }
    }

    for(const ing of recipe) {
        if(!recipeMap[ing]) {
            recipeMap[ing] = 1
        }else {
            recipeMap[ing]++
        }
    }

    for(const key in recipeMap) {
        if(recipeMap[key] > inventoryMap[key]) {
            return false
        }
    }
    return true
}


console.log(checkRecipe(inventory1, recipe1), true)
console.log(checkRecipe(inventory2, recipe2), false)
console.log(checkRecipe(inventory3, recipe3), true)