interface IProduct {
    "id": number,
    "name": string,
    "image": string,
    "price": number,
    "discountPrice": number,
    "badges": { type: string; label: string }[],
    "rating": number
    sold:number
}