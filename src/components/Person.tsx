import { IPerson } from "../types/types";

export const Person = (props: IPerson) => {
  return (
    <div>
      <p>{props.firstName}</p>
      <p>{props.age}</p>
      <p>{props.isMarried === true ? "Married" : "not yet"} </p>
    </div>
  );
};
