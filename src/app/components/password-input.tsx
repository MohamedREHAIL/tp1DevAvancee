import {useCallback, useId, useState} from "react";
import {Label} from "@/app/components/text-input";
import { Eye, EyeClosed } from '@phosphor-icons/react/dist/ssr';
import {hidden} from "next/dist/lib/picocolors";
import {is} from "unist-util-is";

export type PasswordInputProps = {

    initialValue?: string;

    placeholder?: string;

    onChange?: (value?: string) => void;

    label: string;

    required?: boolean;

    isHidden?:boolean;
    name?:string;
    values?:string;
    error?:string;




};

export type label={
    label: string ,
    id: string,
    required?:boolean

}
export  default function PasswordInput({placeholder,onChange,error,label,required,isHidden,name,values }:PasswordInputProps){

    const [value,setValue]=useState("")
    const [hid,setHid]=useState(isHidden)


    const handleChange  = useCallback((e)=>{
        setValue(e.target.value)

        if (onChange){

            onChange(e.target.value)
        }
    },[onChange]);


    const handleChangePassword=()=>{
        setHid(!hid)
    }


    const id = useId()



    return(<>
        <div>
        <Label  label={label} id={id} required={required} />

        <input type={hid?"password":"text"} name={name} placeholder={placeholder}  value={values} onChange={handleChange} id={id} required={required} />



        {!hid?<Eye style={{position: 'absolute', right: 20,}} type={"submit"} onClick={handleChangePassword}></Eye>:<EyeClosed style={{position: 'absolute', right: 20,}} type={"submit"} onClick={handleChangePassword}></EyeClosed>}
        </div>
        <p>{error}</p>


    </>)



}