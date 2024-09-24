// ----------- Auth --------------

export interface AuthRequest {
    login: (data: any) => any
    activate: (data: any) => any
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