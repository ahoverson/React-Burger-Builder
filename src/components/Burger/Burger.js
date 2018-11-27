import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

//transformedIngredients works as follows:
//Object.keys(prop.ingredients) creates an array of each ingredient.
//.map(igKey) uses a function to create an array the size of the number found
//with igKey. props.ingredients[igKey] evaluates to the number value of
//props.ingredients. That array has .map() called on it to return one ingredient
//for each element of that array.
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey}/>;
        })
      })
//.reduce takes 2 automatically passed arguments.
//arr is the previous value, el is the current value
      .reduce((arr, el) =>{
          return arr.concat(el)
      }, []);

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
      <div className={classes.Burger}>
          <BurgerIngredient type="bread-top" />
          {transformedIngredients}
          <BurgerIngredient type="bread-bottom" />
      </div>
    );
}

export default burger;
