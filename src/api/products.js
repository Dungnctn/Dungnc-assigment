import instance from "./config";

export const getAll = () => {
    const url = `/product`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/product/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/product`;
    return instance.post(url, post);
    // t/so thứ 1 là đường dẫn, t/so t2 là data cần đẩy lên API
    // sdung method post để đưa data lên api
}
export const update = (post) => {
    const url = `/product/${post.id}`;
    // bài post theo id
    return instance.put(url, post);
    // sdung method put để gửi post theo id lên api
}
export const remove = (id) => {
    const url = `/product/${id}`;
    return instance.delete(url)
}
