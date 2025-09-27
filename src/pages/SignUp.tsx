import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm ] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent){
        e.preventDefault()

        console.log(name, email, password, passwordConfirm)
    }

    return (
        <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
            <Input type="name" required legend="Nome" placeholder="Seu nome" onChange={e => setName(e.target.value)}/>
            <Input type="email" required legend="E-mail" placeholder="seu@emai.com" onChange={e => setEmail(e.target.value)}/>
            <Input type="password" required legend="Senha" placeholder="123456" onChange={e => setPassword(e.target.value)}/>
            <Input type="passwordConfirm" required legend="Confirmar senha" placeholder="123456" onChange={e => setPasswordConfirm(e.target.value)}/>

            <Button isLoading={isLoading} type="submit">Cadastrar</Button>

            <a 
                href="/" 
                className="text-sm font-semibold text-gray-100 mt-10 mb-4
                text-center hover:text-green-800 transition ease-linear"
            >
                Já tenho uma conta
            </a>
        </form>
    )
}