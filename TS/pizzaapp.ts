//Pizza App

export { }

/**
 * Task 1: Create a Pizza object type. It should include a `name`
 * and a `price` property.
 */

type Pizza = {
    id: number
    name: string
    price: number
}

/**
 * Task 4: Add an Order type. It should have `id`, `pizza`, and `status` properties.
 * Look through the code if you need a reminder as to what data types those should be.
 */

/**
 * Task 7: using literal types and unions, update the Order status so that
 * it can only ever be "ordered" or "completed"
 */

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

/**
 * Task 5: Fix the TS warnings about orderQueue!
 */

const orderQueue: Order[] = []

/**
 * Task 2: teach TS that the pizzaObj is supposed to be a Pizza type.
 * Then like before, look through the code to see if there are any new
 * TS warnings to deal with (😉), and fix those issues
 */

/**
 * Task 12 part 1.5: Try to move the logic for adding an ID to the pizza objects 
 * inside the addNewPizza function, so that we can call addNewPizza with no id, and
 * the function will handle that part for us.
 * 
 * NOTE: you will run into TS warnings that we'll address soon, but the code should
 * still run.
 */

/**
 * Task 13:
 * Fix the addNewPizza function using the Omit utility type. This might
 * require more than just changing the "Pizza" typed `pizzaObj` parameter
 * Return the new pizza object (with the id added) from the function.
 */

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}


/*
 * Task 10: add explicit return types to the rest of our functions
 */

/**
 * Task 12 part 1: Make it so we can use a global variable to track the nextPizzaId
 * and use the same trick we use with `nextOrderId++` when you're calling addNewPizza.
 * Update the menu items to use this as well so we don't have to manually enter ids 1-4
 * like we're currently doing
 */



addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })



function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}


/* Task 14: add types our generic `addToArray` function. It should work
* for adding new pizzas to the `menu` and adding new orders to the `orderQueue`
*/

function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}


//Task 15: what should be passed in as the generic type on line 53?


// example usage:
addToArray<Pizza>(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" })

console.log(menu)
console.log(orderQueue)

/**
 * Task 3: Teach TS what data type should be used for the 
 * orderId in the completeOrder function. Then check for any
 * additional warnings TS comes up with and fix those.
 */

/**
 * Task 6: Fix the warning below by handling the "sad path" scenario!
 */

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`Order ${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}


/* Task 8: create a new utility function called getPizzaDetail. It will take
* a parameter called `identifier`, but there's a twist: we want this identifier
* to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
* OR to be the number ID of the pizza (e.g. 2).
* 
* Don't worry about the code inside the function yet, just create the function
* signature, making sure to teach TS that the `identifier` parameter is allowed
* to either be a string or a number.
*/

/**
 * Task 11 (part 1): add a return type to the getPizzaDetail function.
 * 
 * NOTE: you're very likely going to get a big TS warning once you do this 😅
 * Don't fret, we'll address this warning next!
 */

/**
 * Task 11 (part 2): explicitly type the return value of this function
 * to tell TypeScript it could either be a Pizza object or undefined
 * as the return value.
 */

export function getPizzaDetail(identifier: string | number): Pizza | undefined {

    /* Task 9: write the code to check if the parameter is a string
    * or a number, and use the menu.find() method accordingly
    */
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter 'identifier' must be either a string or a number")
    }
}



// placeOrder("Chicken Bacon Ranch")
// placeOrder("Pepperoni")
// completeOrder(1)
// placeOrder("Anchovy")
// placeOrder("Veggie")
// completeOrder(2)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)




