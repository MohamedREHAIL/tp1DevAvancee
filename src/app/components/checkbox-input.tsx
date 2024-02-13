"use client"


import {useId ,useState,useCallback} from "react";
import {Label} from "@/app/components/text-input";


export type CheckboxInputProps = {


    checked?:boolean;

    onChange?: (value?: string) => void;

    label: string;

};

export type CheckboxInputList={

    option?:any;
    CheckedTab?: any;

}


export  function CheckboxInput({checked , onChange,label }:CheckboxInputProps){

    const [value,setValue]=useState<boolean>(checked ?? false)

    const handleChange  = useCallback((e)=>{
        setValue(e.target.checked)

        if(onChange){
            onChange(e.target.checked)
        }


    },[onChange]);


    const id = useId()

        return(<>
                <Label label={label} id={id} required={false}></Label>
                <input type={"checkbox"}  onChange={handleChange}  checked={value} />

            </>

            )




}

export function CheckboxListInput ( {option,CheckedTab}:CheckboxInputList){


    const handleCheck = (event) => {
        var updatedList = [CheckedTab];
        if (event.target.checked) {
            updatedList = [...CheckedTab, event.target.value];
            console.log(CheckedTab)

        } else {
            updatedList.splice(CheckedTab.indexOf(event.target.value), 1);
        }

        CheckedTab.push(updatedList)

    };

    return(<>
    {option.map((item, index) => (
        <div key={index}>
            <input value={item} type="checkbox" onChange={handleCheck} />
            <span >{item}</span>
        </div>
    ))}
        </>
)


}