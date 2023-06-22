import React from "react";
import { useForm, useWatch } from "react-hook-form";


function Child({ control }) {
  const firstName = useWatch({
    control,
    name: "firstName",
  });

  return <p>Watch: {firstName}</p>;
}

export default function Dynamic() {
  const { register, control } = useForm({
    firstName: "test"
  });

  return (
    <form>
      <input {...register("firstName")} />
      <Child control={control} />
    </form>
  );
}