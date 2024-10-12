import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// import z from 'zod';
// const UserSchema = z.object({
//   name:z.string(),
//   age:z.number(),
//   email:z.string().email()
// })
// type User = z.infer<typeof UserSchema>;
// const user:User = {
//   name:"Vedant",
//   age:12,
//   email:"vedant@gmail.com"
// }
// const user1 = UserSchema.parse(user);
// console.log("hwllo"+user1);