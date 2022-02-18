export const $ = (element) => {
    const selector = document.querySelectorAll(element);
    return selector.length === 1 ? selector[0] : selector
}