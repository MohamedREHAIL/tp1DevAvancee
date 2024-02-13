"use client"
import {TextInput} from "@/app/components/text-input";
import PasswordInput from "@/app/components/password-input";
import {FormEventHandler, useState} from "react";


export default function Exo2(){

    const [formInput,setFormInput]=useState({})

    const handleSubmit:  FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault()
        console.log(
            ((e.target as HTMLFormElement).elements.namedItem('prenom') as HTMLInputElement)?.value)

        const data={
           firstName : ((e.target as HTMLFormElement).elements.namedItem('prenom') as HTMLInputElement)?.value,
           lastName:((e.target as HTMLFormElement).elements.namedItem('nom') as HTMLInputElement)?.value,
            email: ((e.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement)?.value,
            password : ((e.target as HTMLFormElement).elements.namedItem('password') as HTMLInputElement)?.value
        }
        console.log(data)


        setFormInput({
            firstName : ((e.target as HTMLFormElement).elements.namedItem('prenom') as HTMLInputElement)?.value,
            lastName:((e.target as HTMLFormElement).elements.namedItem('nom') as HTMLInputElement)?.value,
            email: ((e.target as HTMLFormElement).elements.namedItem('email') as HTMLInputElement)?.value,
            password : ((e.target as HTMLFormElement).elements.namedItem('password') as HTMLInputElement)?.value
        })
        console.log("er",formInput)

    }
    return(<>

        <form onSubmit={handleSubmit}>
            <div>
                <TextInput name={"prenom"} label={"Prénom"} placeholder={"...prenom"} onChange={console.log} ></TextInput>
                <TextInput name={"nom"} label={"Nom"} placeholder={"...nom"} onChange={console.log} ></TextInput>
            </div>
            <div>
                <TextInput name={"email"} label={"Adresse email"} placeholder={"...Adreese email"} onChange={console.log}/>
            </div>

            <PasswordInput name={"password"} label={"Mot de passe"} onChange={console.log} isHidden={true}></PasswordInput>

            <button type={"submit"}>M'inscrire</button>
        </form>



            <>
           <p> Prénom: {formInput.firstName}</p>
           <p> Nom : {formInput.lastName}</p>
            <p>email :{formInput.email}</p>
            <p>password: {formInput.password}</p>
            </>




        </>)



}