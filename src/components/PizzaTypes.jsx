import React from 'react'
import Card from './Card'

function PizzaTypes() {
  return (
    <div className="container pizza-types" id="pizza-types">
        <h3 className="text-center">Pizza Types</h3>
        <div className="row">
            <div className="col-md-3">
                <Card name="Cheezy" imgSrc="images/pizza-slice.jpg"/>
            </div>
            <div className="col-md-3">
                <Card name="Pepperoni" imgSrc="images/shared-pizza.jpg"/>
            </div>
            <div className="col-md-3">
                <Card name="Vegan" imgSrc="images/pizza-in-pan.jpg"/>
            </div>
            <div className="col-md-3">
                <Card name="Meat Lovers" imgSrc="images/pepper-toppings.jpg"/>
            </div>
        </div>
    </div>
  )
}

export default PizzaTypes