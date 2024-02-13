"use client"
import {
    JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useCallback,
    useId,
    useState
} from "react";


export type TextInputProps = {

    initialValue?: string;

    placeholder?: string;

    onChange?: (value?: string) => void;

    label: string;

    required?: boolean;

    name?:string;
    values?:string;
    error?:string;


};

export type label={
    label: string ,
     id: string,
    required?:boolean

}


export function Label({label , id,required}:label){

   return(
       <>
           <label className={"mr-6 text-2xl" } htmlFor={id}>{required?label+"*":label}</label>
       </>

       )


}


export  function TextInput({initialValue,placeholder,onChange,label,required,name,values,error}:TextInputProps){

    const [value,setValue]=useState("")

    const handleChange  = useCallback((e)=>{
        setValue(e.target.value)

        if (onChange){

            onChange(e.target.value)
        }
    },[onChange]);


    const id = useId()



return(<>
<Label  label={label} id={id} required={required} />
<input  type={"text"} name={name} placeholder={placeholder}  value={values} onChange={handleChange} id={id} required={required} />
    <p>{error}</p>



</>)

}