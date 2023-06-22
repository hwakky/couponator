import React from "react";
import { useForm, useWatch } from "react-hook-form";


function Child({ control }) {
  const firstName = useWatch({
    control,
    name: "firstName",
  });

  return <p>Watch: {firstName}</p>;
}

export default function Home() {
    const { register, control } = useForm({
        firstName: "test"
      });
    
      return (
        <form>
          <input className="bg-red-300"{...register("firstName")} />
          <Child control={control} />
        </form>
      );
}
