// const recipe = ["flour", "egg", "chocolate_chips", "brown_sugar", "egg"]
// // const recipe = []
// // const inventory = ["tomatoes", "bananas","brown_sugar", "egg", "chocolate_chips", "paper_towels", "flour"]

// const inventory = ["tomatoes", "bananas", "brown_sugar", "egg", "chocolate_chips", "paper_towels"]

//write a function that checks if given inventory has ingredients for a given recipe
//two input arrs of strs
//return true if inv has ingredients
//false otherwise
//comparing each ingredient in the rec to inv
//if if loop through and ing does not exist return false
//what if list is empty

// function checkForIngredients(recipe, inventory) {

//   if(!inventory) return false


//   for(let i = 0; i < recipe.length; i++) {
//     if(!inventory.includes(recipe[i])) {
//       return false
//     }
//   }
//   return true
// }


function checkForIngredients(recipe, inventory) {

  if(!inventory) return false

  const recipeMap = {}
  const inventoryMap = {}

  for(const ing of recipe) {
    if(!recipeMap[ing]) {
      recipeMap[ing] = 1
    }else {
      recipeMap[ing]++
    }
  }

  for(const ing of inventory) {
    if(!inventoryMap[ing]) {
      inventoryMap[ing] = 1
    }else {
      inventoryMap[ing]++
    }
  }

  console.log("Recipe", recipeMap, "Inventory", inventoryMap)

  for(const key in recipeMap) {

    if(recipeMap[key] > inventoryMap[key]) {
      return false
    }
  }
  return true


}

//map frequencies for inv and recipe
//compare counts of maps

//recipe egg : 3, inventory egg: 6 => true
//recipe egg : 3, inventory egg: 2 => false
//recipe egg : 3, inventory egg: 3 => true

const recipe1 = ["flour", "egg", "chocolate_chips", "brown_sugar", "egg"]
const recipe2 = ["flour", "egg", "chocolate_chips", "brown_sugar", "egg", "egg"]


const inventory1 = ["tomatoes", "bananas","brown_sugar", "egg", "chocolate_chips", "paper_towels", "flour"]
const inventory2 = ["flour", "egg", "chocolate_chips", "brown_sugar", "egg", "egg"]

const inventory3 = ["flour", "egg", "chocolate_chips", "brown_sugar", "egg", "egg", "egg", "egg", "egg"]

console.log(checkForIngredients(recipe1, inventory1), false)
console.log(checkForIngredients(recipe2, inventory2), true)
console.log(checkForIngredients(recipe2, inventory3), true)