import http from "./config"
import { BannersRequest } from "../interfaces"

export const banners:BannersRequest = {
    get_banners: () => http.get("/services/mobile/api/banners")
}