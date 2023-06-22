import { useForm, useWatch } from 'react-hook-form';

function Child({ control, checkboxNames }) {
  const select = useWatch({
    control,
    name: checkboxNames, // Pass an array of checkbox names
  });

  return <p>Watch: {select}</p>;
}

export default function SelectColumn({ children }) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  function onSubmit(data) {
    console.log(data); // Access the form data here
  }

  return (
    <div className="w-[500px] rounded-md border border-[2px] border-[#000000] p-2">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <span>
          <input {...register('checkboxA')} type="checkbox" value="A" />
          Checkbox 1
        </span>
        <span>
          <input {...register('checkboxB')} type="checkbox" value="B" />
          Checkbox 2
        </span>
        <span>
          <input {...register('checkboxC')} type="checkbox" value="C" />
          Checkbox 3
        </span>
        {/* Pass the array of checkbox names to the Child component */}
        <Child control={control} checkboxNames={['checkboxA', 'checkboxB', 'checkboxC']} />
      </form>
    </div>
  );
}
