import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    function onSubmit(e: React.FormEvent){
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <form className="w-full flex flex-col gap-4" onSubmit={onSubmit}>
            <Input type="email" required legend="E-mail" placeholder="seu@emai.com" onChange={e => setEmail(e.target.value)}/>
            <Input type="password" required legend="Senha" placeholder="123456" onChange={e => setPassword(e.target.value)}/>

            <Button isLoading={isLoading} type="submit">Entrar</Button>

            <a 
                href="/signup" 
                className="text-sm font-semibold text-gray-100 mt-10 mb-4
                text-center hover:text-green-800 transition ease-linear"
            >
                Criar conta
            </a>
        </form>
    )
}