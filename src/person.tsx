import { useState } from "react";
export interface xys {
  name: string;
  age: number;
  isMarried: boolean;
}
export const Person = (props: xys) => {
  const [isShowInfo, setShowInfo] = useState<boolean>(false);
  const [personBio,setPersonBio] = useState<string|null>(null);
  function ToggleInfo() {
    setShowInfo(!isShowInfo);
  }
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setPersonBio(e.target.value);
  }
//   function handleSubmit(e:React.FormEvent<HTMLFormElement>){
//     e.preventDefault();
//     console.log(personBio);
//   }
  return (
    <>
      {isShowInfo && (
        <>
          <div>"hello"</div>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>Married: {props.isMarried ? "true" : "false"}</p>
        </>
      )}
      <button onClick={ToggleInfo}>Toggle Info</button>
      <p>{props.name}Bio:{personBio === null?"No Bio Available":personBio}</p>
      <input type="text" onChange={handleChange}></input>
    </>
  );
};
