import { z } from "zod";
// import {Person} from './person';
// import {useState} from 'react';
// function App() {
//   return (
//     // <div>
//     //   <Person name="John" age={25} isMarried={true}/>
//     // </div>
//     <div>
//       hfe
//     </div>
//   )
// }

// export default App
// const CartSchema = z.object({
//   totalPrice:z.number(),
//   items:z.array(z.object({
//     id:z.string(),
//     name:z.string(),
//     price:z.number(),
//     quantity:z.number()
//   }))
// })
const CartSchema = z.array(
  z.object({
    id:z.string(),
    name:z.string(),
    price:z.number(),
    quantity:z.number().positive().int()
  })
)
function App(){
  return(
    <Cart></Cart>
  )
}
export default App;

function Cart(){
  const Cart:unknown = JSON.parse(localStorage.getItem("cart") || "{}");
  const validatedCart = CartSchema.safeParse(Cart);
  if(!validatedCart.success){
    localStorage.removeItem("cart");
    return;
  }else{
    console.log(validatedCart.data);
  }

  return(
    <div>
      Cart
    </div>
  )
}
