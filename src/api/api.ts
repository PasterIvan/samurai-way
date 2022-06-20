import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '8eae8561-af9d-4770-a309-d90c99aab1ce'}
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getUserProfile(userId: number) {
        return instance.get(
            `profile/` + userId)
            .then(response => response.data
            )
    },
    unfollow(id: number){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(response => response.data
            )
    },
    follow(id: number){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(response => response.data
            )
    }

}
export const authAPI = {
    getMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}