export interface ShoppingCartDetail {   
    productId: number,
    categoryId: number,
    fee: number,
    count: number,   
}

export interface ShoppingCart {
    items: ShoppingCartDetail[];
}