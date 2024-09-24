import http from "./config"
import { BannersRequest } from "../interfaces"

export const banners:BannersRequest = {
    get_banners: () => http.get("/admin/api/banner")
}