import http from "./config"
import { ProductsRequest } from "../interfaces"

export const products: ProductsRequest = {
    get_products_by_id: (id) => http.get(`/services/mobile/api/product-by-branch/${id}`)
}