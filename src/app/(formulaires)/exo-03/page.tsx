"use client"
import {TextInput} from "@/app/components/text-input";
import PasswordInput from "@/app/components/password-input";
import {useForm, zodResolver} from "@mantine/form";
import {schema} from "yaml/dist/schema/core/schema";
import { z } from 'zod';
import {useZodI18n} from "../../../../tp-kit/components";


/*export type FormData={
    prenom:string;
    nom:string;
    email:string
    password:string
}*/

const schema = z.object({
    prenom : z.string(),
    nom: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
});
type FormData = z.infer<typeof schema>;


export default function Exo3 (){

    const form = useForm<FormData>({

        initialValues: {
            prenom:'eee',
            nom: 'fff',
            email: 'gggg@gmail.com',
            password: '21222222221',
        },
        validate: zodResolver(schema),
    });

    console.log(form.getInputProps)
    console.log(form.errors)


    return(<>

        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <div>
                <TextInput  label={"Prénom"} values={form.getInputProps('prenom').value} onChange={form.getInputProps('prenom').onChange}  error={form.errors.prenom} ></TextInput>
                <TextInput  label={"Nom"} values={form.getInputProps('nom').value}  onChange={form.getInputProps('nom').onChange} error={form.errors.nom} ></TextInput>
            </div>
            <div>
                <TextInput  label={"Adresse email"} values={form.getInputProps('email').value} onChange={form.getInputProps('email').onChange} error={form.errors.email}/>
            </div>

            <PasswordInput  label={"Mot de passe"} values={form.getInputProps('mot de passe ').value} onChange={form.getInputProps('password').onChange} error={form.errors.password}></PasswordInput>

            <button type={"submit"}>M'inscrire</button>
        </form>







    </>)


}