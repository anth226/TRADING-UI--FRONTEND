/* eslint-disable */
// @ts-ignore
import $api from '../http'
const apiPrefix = 'posts'

export default class PostService {
    static async fetchPosts(data: void) {
        return $api.post(`${apiPrefix}`, data )
    }
}
