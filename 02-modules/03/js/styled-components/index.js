function createStyledApi(htmlTag) {
    return (styles) => (content) => `
        <${htmlTag} style="${styles}">${content}</${htmlTag}>
    `
}

const tags = ["h1","h2","h3","p","div"];

function createObjectStyled(tags) {
    return tags.reduce((acc, tag) => {
        // acc -> valor inicial {}
        let attr = tag
        let newObj = { ...acc }
        newObj[attr] = createStyledApi(tag)
        return newObj
    },{});
} 

const styledApi = createObjectStyled(tags);

export default styledApi
