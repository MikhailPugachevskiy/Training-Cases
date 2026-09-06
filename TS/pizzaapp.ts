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
 * Task 6: using literal types and unions, update the Order status so that
 * it can only ever be "ordered" or "completed"
 */

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

/**
 * Task 5: Fix the TS warnings about orderQueue!
 */
let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []

/**
 * Task 2: teach TS that the pizzaObj is supposed to be a Pizza type.
 * Then like before, look through the code to see if there are any new
 * TS warnings to deal with (😉), and fix those issues
 */

function addNewPizza(pizzaObj: Pizza): void {
    menu.push(pizzaObj)
}

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

/**
 * Task 3: Teach TS what data type should be used for the 
 * orderId in the completeOrder function. Then check for any
 * additional warnings TS comes up with and fix those.
 */

/**
 * Task 6: Fix the warning below by handling the "sad path" scenario!
 */

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`Order ${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)


