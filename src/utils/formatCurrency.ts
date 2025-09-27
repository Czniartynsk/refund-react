export function formatCurrency(value: number){
    const currency = Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    })

    console.log(currency)
    return currency.format(value).replace("R$", "")
}