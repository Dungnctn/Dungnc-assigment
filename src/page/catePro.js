import { getAll } from "../api/category";

const Category = {
    async render() {
            const {data} = await getAll()
        return /*html*/ `
        <ul role="list" class="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200">
        <a href="/#/">Tất cả</a>
            ${data.map(item => /*html*/`
            <li>
                <a href="/catePro/${item.id}">
                    ${item.name}
                </a>
                </li>
            `).join("")}

        </ul>
        
        `;
    }
}
export default Category