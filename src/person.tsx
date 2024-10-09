interface xys{
    name:string,
    age:number,
    isMarried:boolean;
}
export const Person = (props:xys) => {
    return <div>
        "hello"
        <p>Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Married:{props.isMarried?"true":"false"}</p>
    </div>
}
