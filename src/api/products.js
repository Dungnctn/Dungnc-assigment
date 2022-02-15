import instance from "./config";

export const getAll = () => {
    const url = `/products`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/products`;
    return instance.post(url, post);
    // t/so thứ 1 là đường dẫn, t/so t2 là data cần đẩy lên API
    // sdung method post để đưa data lên api
}
export const update = (post) => {
    const url = `/products/${post.id}`;
    // bài post theo id
    return instance.put(url, post);
    // sdung method put để gửi post theo id lên api
}
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}
export const cate = (catePro) => {
    const url = `/products?catePro=${catePro}`;
    return instance.get(url);
}
