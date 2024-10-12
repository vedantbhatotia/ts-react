function App(){
  return(
    <Form></Form>
  )
}
export default App;
import {useForm,type FieldValues} from "react-hook-form";
function Form(){
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  async function onSubmit(data:FieldValues){
    console.log(data);
    reset();
  }
  return (
    <form onSubmit = {handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <input
        {...register("email", {
          required: "Email is required",
        })}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      {errors.email && (
        <p>{`${errors.email.message}`}</p>
      )}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 10,
            message: "Password must be at least 10 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded"
      />
      <input
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate:(value)=>{
            if(getValues("password")!== value){
              return "Passwords do not match"
            }
          }
        })}
        type="password"
        placeholder="Confirm password"
        className="px-4 py-2 rounded"
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}