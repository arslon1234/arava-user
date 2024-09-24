import http from "./config"
import { AuthRequest } from "../interfaces"

export const auth: AuthRequest = {
    login: (data) => http.post("/mobile/api/register-client", data),
    activate: (data) => http.post("/mobile/api/activate-client", data)
}