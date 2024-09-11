export type MenuItem = {
    id:number,
    category:string,
    subCategory:string,
    name:string,
    description:string,
    image:string,
    price:number,
}

export type OrderItem = MenuItem & {
    quantity:number
}