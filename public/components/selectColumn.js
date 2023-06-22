import { useForm, useWatch } from "react-hook-form";
import Test from "../components/test";

function Child({ control, checkboxNames }) {
  const selectedValues = checkboxNames.filter(name => {
    const value = useWatch({
      control,
      name,
    });
    return value;
  });

  return (
    <div className="flex flex-row">
      {selectedValues.map((name) => (
        <div key={name} className="px-2 py-1 border border-[#F37020] border-[2px] rounded-[14px] mr-1">
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}

export default function SelectColumn({ children }) {
  //   const { register, handleSubmit, errors } = useForm();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  function onSubmit() {
    console.log(data); // Access the form data here
  }
  //  const value = watch()
  //  const value = watch(['checkboxA'])
  const value = watch();
  // useWatch()
  console.log(value);

  return (
    <div>
      <div className="w-[500px] rounded-md border border-[2px] border-[#000000] p-2">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <span>
            <input
              {...register("name_surname")}
              type="checkbox"
              value="name_surname"
            />
            <span className="pl-2">name_surname</span>
          </span>
          <span>
            <input {...register("phone_no")} type="checkbox" value="phone_no" />
            <span className="pl-2">phone_no</span>
          </span>
          <span>
            <input {...register("email")} type="checkbox" value="email" />
            <span className="pl-2">email</span>
          </span>
          <span>
            <input
              {...register("coupon_code")}
              type="checkbox"
              value="coupon_code"
            />
            <span className="pl-2">coupon_code</span>
          </span>
          {/* Pass the array of checkbox names to the Child component */}
        </form>
      </div>
      <div className="bg-[#D9D9D9] h-[1px] mt-[10px] w-[700px]"></div>
      <div className="text-[24px] mt-1">Columns Selected</div>
      <Child
        control={control}
        checkboxNames={["name_surname", "phone_no", "email", "coupon_code"]}
      />
    </div>
  );
}
