// ----------- Auth --------------

export interface AuthRequest {
    login: (data: any) => any
    activate: (data: any) => any
    get_token: (data: any) => any
    get_info: () => any
}

export interface AuthStore {
    data: any[]
    isLoading: boolean
    sign_in: (data: any) => any
    activation: (data: any) => any
}

// ----------- Banners -----------

export interface BannersRequest {
    get_banners: () => any
}

export interface BannerStore {
    banners: any[]
    isLoading: boolean
    getData: () => any
}

// ----------- Branchs -----------

export interface BranchsRequest {
    get_branchs: () => any
}

export interface BranchStore {
    branches: any[]
    isLoading: boolean
    getBranchs: () => any
}

// ----------- Products -----------

export interface ProductsRequest {
    get_products_by_id: (id:any) => any
}

export interface ProductStore {
    products: any[]
    isLoading: boolean
    getProductsById: (id:string) => any
}