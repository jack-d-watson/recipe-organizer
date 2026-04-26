####Basic structure

This is a way to organize, add, import, and edit recipes. 

## import a recipe

This should allow you to select a url, enter a block of text or upload a file. This will parse that data and save it locally as json (for now). This should also include any meta data that we'd use to categorize and display this recipe. This metadata should include an approximate cost to make the recipe, if known. This should include what category this meal is in, cuisine, etc. 

This should also include a source. This can be a website, text, text upload, etc.

## list all recipes

On our landing page, we should a have a list of all content. I would prefer a split-view layout, with a list of recipes on the left, and it opening up a preview panel on the right when you click one. The recipes in the list should display the metadata and tags, as well as the name. This right panel can simply exist as a blank panel right now, becuase that's upcoming.

## display a recipe

When you drill down from the display list, it'll open on the right hand side and you should be able to see the details of the recipe we've saved in the import step. This should include all metadata, all recipe steps, all ingredients, etc. This is just the display. Delete, edit, and additional formatting steps can come later. 


## when importing a recipe, display the ingredient list before the step

We should have all the ingridients from our import, but we want them to appear before the step we're about to start. Split them out from the big list and put them here. 

## when importing a recipe, strip out random bullshit

No life stories will exist in this recipe importer. We do want to identify any important instructions, as those are common, but we want to kill anything that sounds like bullshit. I have no idea how this is done. Maybe look for keywords like "childhood" or "countryside"

## scale recipes

I want to be able to scale recipes. Halve them, double them, multiply them by 1.33. This should scale all ingredients, nuitrition facts, etc. 

## include meaningful nuitrition data

There exists a national database of nuitritional information for raw ingredients. https://fdc.nal.usda.gov/
Pull data form here on what nuitrients exist in the food, if they aren't in the import. This should scale with the recipe and should include portions in ounces and grams. 

## edit a recipe

Sometimes you find you can fix a recipe's problems by changing the amount of salt or whatever. This should be doable, BUT we want to note what was changed and when. Version control these recipes, b.

## user functionality

We should be able to add a new user. Recipes they upload should be under their name. Edits they make should be under their name. This also allows further functionality, which is the rating system.

## recipe rating

I want three metrics. 1. Taste. Obvious. 2. Nuitritional value. 3. Ease of creation/complexity.
A person's rating's should be attached to their name. Doing this with some kind of library that manages comments is probably not a bad idea.

## add photos

I want to be able to import photos of this recipe or individual steps AND be able to take and add photos from my camera roll. This doesn't need to be easy, as I don't expect this to be a common feature

## give me a recipe

This feature is simple. You don't know what you want but you know you want to make a healthy dinner? You have noodles and cheese but you're too tired to care what you make with them? This should allow you to select a couple tags or other metrics and recieve a random recipe along those lines. 

## search feature

Search by tags, cuisine, uploader, ingredients, ratings, etc. 

## user favorites

We have recipes we like and reuse often. 

## planning mode

Select a few recipes, then can you label how many servings you need and can get a list of ingredients to purchase. This should be text initially

## home assistant integration

Integrate this into home assistant. We want to be able to export the result of planning mode or from a single recipe. There also may be a future where I can figure out how to manage our home inventory, idk. 


 
