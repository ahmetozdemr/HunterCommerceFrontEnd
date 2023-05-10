export interface Product {
    productId: number;
    productName: string;
    supplierID: number;
    categoryId: number;
    quantityPerUnit: number;
    unitPrice: number;
    unitsInStock: number;
    unitsOnOrder: number;
    reorderLevel: number;
    discontinued: boolean;
}