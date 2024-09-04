// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

// const boxMain = document.getElementById('div')
//
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(value => {
//         let {carts} = value;
//         for (const cart of carts) {
//
//             const div = document.createElement('div');
//             div.innerText = `id - ${cart.id}`;
//             div.classList.add('box');
//
//             for (const product of cart.products) {
//
//                 const ul = document.createElement('ul');
//                 const liProduct = document.createElement('li');
//                 const liPrice = document.createElement('li');
//                 const img = document.createElement('img');
//                 const boxProduct = document.createElement('div');
//
//                 ul.classList.add('ul');
//                 liProduct.innerText = `Products: ${product.title}`;
//                 liPrice.innerText = `Price: ${product.price}`;
//                 liProduct.classList.add('liProduct');
//                 img.src = product.thumbnail;
//                 boxProduct.classList.add('boxProduct');
//
//                 div.append(boxProduct);
//                 boxProduct.append(ul, img)
//                 ul.appendChild(liProduct);
//                 ul.appendChild(liPrice);
//
//
//             }
//
//             boxMain.appendChild(div);
//
//         }
//     });

//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(value => {
        const recipesHeadBox = document.getElementById('recipes');
        const {recipes} = value;

        for (const recipe of recipes) {

            const boxRecipe = document.createElement('div');
            const h1 = document.createElement('h1');
            const ul = document.createElement('ul');
            const liCaloriesPerServing = document.createElement('li');
            const liCookTimeMinutes = document.createElement('li');
            const liCuisine = document.createElement('li');
            const liDifficulty = document.createElement('li');
            const img = document.createElement('img');
            const buttonIngredients = document.createElement('button');
            const buttonInstructions = document.createElement('button');
            const boxButton = document.createElement('div');
            const boxIngredient = document.createElement('div');
            const boxInstructions = document.createElement('div');

            boxRecipe.classList.add('boxRecipe');
            img.classList.add('imgRecipe');
            boxButton.classList.add('boxButton');

            h1.innerText = recipe.name
            liCaloriesPerServing.innerText = `Calories: ${recipe.caloriesPerServing}`
            liCookTimeMinutes.innerText = `Cook Time Minutes: ${recipe.cookTimeMinutes}`
            liCuisine.innerText = `Cuisine: ${recipe.cuisine}`
            liDifficulty.innerText = `Difficulty: ${recipe.difficulty}`
            img.src = recipe.image
            buttonIngredients.innerText = 'show ingredients'
            buttonInstructions.innerText = 'show instructions'
            boxIngredient.classList.add('boxIngredient');
            boxInstructions.classList.add('boxInstructions');


            boxIngredient.classList.add('position');
            boxInstructions.classList.add('positionInstructions');

            buttonIngredients.addEventListener('click', function () {
                fetch(`https://dummyjson.com/recipes/${recipe.id}`)
                    .then(res => res.json())
                    .then(value1 => {

                        const {ingredients} = value1;
                        boxIngredient.classList.add('position');

                        boxIngredient.classList.toggle('boxIngredient');
                        boxInstructions.classList.remove('positionInstructions');

                        boxIngredient.innerText = '';
                        boxInstructions.innerText = ''
                        for (const ingredient of ingredients) {

                            const liIng = document.createElement('p');
                            liIng.innerText = `${ingredient}`;

                            boxIngredient.append(liIng);
                        }
                    })

            })
            buttonInstructions.addEventListener('click', function () {
                fetch(`https://dummyjson.com/recipes/${recipe.id}`)
                    .then(res => res.json())
                    .then(value1 => {

                        const {instructions} = value1;
                        boxInstructions.classList.add('positionInstructions');


                        boxInstructions.classList.toggle('boxInstructions');
                        boxIngredient.classList.remove('position');

                        boxIngredient.innerText = '';
                        boxInstructions.innerText = ''

                        for (const instruction of instructions) {

                            const liIng = document.createElement('p');
                            liIng.innerText = `${instruction}`;

                            boxInstructions.append(liIng);
                        }
                    })

            })
            recipesHeadBox.appendChild(boxRecipe);
            boxRecipe.append(h1, ul, img, boxButton, boxIngredient);
            boxButton.append(buttonInstructions, buttonIngredients, boxInstructions)
            ul.append(liCaloriesPerServing, liCookTimeMinutes, liCuisine, liDifficulty)
        }
    });