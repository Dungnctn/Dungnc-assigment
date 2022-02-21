import instance from "./config";

export const getAll = () => {
    const url = `/categoryProducts`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/categoryProducts/${id}`;
    return instance.get(url);
}
export const add = (post) => {
    const url = `/categoryProducts`;
    return instance.post(url, post);
    // t/so thứ 1 là đường dẫn, t/so t2 là data cần đẩy lên API
    // sdung method post để đưa data lên api
}
export const update = (post) => {
    const url = `/categoryProducts/${post.id}`;
    // bài post theo id
    return instance.put(url, post);
    // sdung method put để gửi post theo id lên api
}
export const remove = (id) => {
    const url = `/categoryProducts/${id}`;
    return instance.delete(url)
}

export const getCate = (id) =>{
    const url = `/categoryProducts/${id}?_embed=products`;
    return instance.get(url);
}