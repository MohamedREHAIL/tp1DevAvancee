"use client"
import {TextInput} from "@/app/components/text-input";
import {useCallback, useState} from "react";
import {CheckboxInput, CheckboxListInput} from "@/app/components/checkbox-input";
import {handle} from "mdast-util-to-markdown/lib/handle";
import PasswordInput from "@/app/components/password-input";


export default  function Exo1(){

const [affichage , setAffichage]=useState("")
const tab =["option1","option2","option3"]
let checkedTab: never[] =[]


    return(<div>
            <div>
                <TextInput label={"Défaut"} required={false}  placeholder={"Défaut..."} onChange={console.log}></TextInput>
            </div>

            <div>
                <TextInput label={"Requis"} required={true}  placeholder={"Requis..."} onChange={console.log}></TextInput>
            </div>

            <div>
                <TextInput label={"Valeur Par Défaut"} required={false} initialValue={"Ma valeur"}  placeholder={"Valeur Par Défaut..."} onChange={console.log}></TextInput>

            </div>

            <div>
                <TextInput label={"Requis"} required={true}  placeholder={"Requis..."} onChange={setAffichage}></TextInput>
                <p>{affichage}</p>
            </div>

            <div>

                <CheckboxInput label={"oui"}   onChange={console.log} checked={true} />
            </div>

            <div>
                <CheckboxListInput option={tab} CheckedTab={checkedTab}></CheckboxListInput>


            </div>

            <div>
                <PasswordInput label={"mod de passe"} onChange={console.log} required={true} isHidden={true} placeholder={"mot de passe "} />

            </div>






        </div>

    )


}