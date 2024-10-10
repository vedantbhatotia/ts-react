import { useState } from "react";
export interface xys {
  name: string;
  age: number;
  isMarried: boolean;
}
enum Countries{
  Brazil = "BR",
  USA = "US",
  Canada = "CA",
  Germany = "DE",
  France = "FR",
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
//   fz
  return (
    <>
      {isShowInfo && (
        <>
          <div>"hello"</div>
          <p>Name: {props.name}</p>
          <p>Age: {props.age}</p>
          <p>Married: {props.isMarried ? "true" : "false"}</p>
          <p>Country:{Countries.Brazil}</p>
        </>
      )}
      <button onClick={ToggleInfo}>Toggle Info</button>
      <p>{props.name}Bio:{personBio === null?"No Bio Available":personBio}</p>
      <input type="text" onChange={handleChange}></input>
    </>
  );
};
