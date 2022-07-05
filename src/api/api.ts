import axios from "axios";

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
    uniqueUrlName?: string | null
}
export type PostType = {
    id: string
    message: string
    likes: number
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}
type getUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    followed: boolean
}
export type getProfileResponseType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string

    }
}
type getAuthMeResponseType = {
    id: number
    email: string
    login: string
}
type getStatusResponseType = string
type updateStatusResponseType = {
    resultCode: number
    messages: string[],
    data: object
}
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '49e19b54-12f4-44c4-af64-14bf246effef'}
})

export const userAPI = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },

    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    getMe() {
        return instance.get<ResponseType<getAuthMeResponseType>>(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<getProfileResponseType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get<getStatusResponseType>(`/profile/status/${userId}`)
    },
    updateStatus (status:string) {
        return instance.put<updateStatusResponseType>(`/profile/status`, {status})
    }
}