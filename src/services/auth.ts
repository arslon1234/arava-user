import http from "./config"
import { AuthRequest } from "../interfaces"

export const auth: AuthRequest = {
    login: (data) => http.post("/services/mobile/api/register-client", data),
    activate: (data) => http.post("/services/mobile/api/activate-client", data),
    get_token: (data) => http.post("/auth/login", data),
    get_info: () => http.get("/services/mobile/api/get-info")
}