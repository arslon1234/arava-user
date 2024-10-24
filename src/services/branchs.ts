import http from "./config"
import { BranchsRequest } from "../interfaces"

export const branches:BranchsRequest = {
    get_branchs: () => http.get("/services/admin/api/branch-pageList")
}