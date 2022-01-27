import instance from "./config";

export const getAll = () => {
    const url = `/posts`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/posts`;
    return instance.post(url, post);
    // t/so thứ 1 là đường dẫn, t/so t2 là data cần đẩy lên API
    // sdung method post để đưa data lên api
}
export const remove = (id) => {
    // nhận tso id, truyền id vào đường dẫn api
    const url = `/posts/${id}`;
    return instance.delete(url);
    // sdung method delete để xóa element trong api
}
export const update = (post) => {
    // nhận tso post,
    const url = `/posts/${post.id}`;
    // bài post theo id
    return instance.put(url, post);
    // sdung method put để gửi post theo id lên api
}