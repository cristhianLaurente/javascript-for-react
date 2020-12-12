import { createElement } from './react/index.js'

// devolverá estilos interpolados
function buildStyles(strings, dynamicValues, props) {
    let style = strings.slice() // haciendo copia del string
    dynamicValues.forEach((value, index) => {
        style[index] += value(props)
    })
    console.log(style.join(''))
    return style.join('')
}

function createStyledApi(htmlTag) {
    return (strings, ...dynamicValues) => {
        return (props, content) => {
            const style = buildStyles(strings, dynamicValues, props)
            // if (htmlTag === "img") return `
            //     <${htmlTag} style="${styles}" ${content} />
            // `
            return createElement(htmlTag, {
                ...props,
                style,
            } ,content)
    
            // `
            //     <${htmlTag} style="${styles}">${content}</${htmlTag}>
            // `
        }
    } 
}

const tags = ["h1","h2","h3","p","div","img","footer","header","article"];

function createObjectStyled(tags) {
    return tags.reduce((acc, tag) => {
        // acc -> valor inicial {}
        let attr = tag
        let newObj = { ...acc }
        newObj[attr] = createStyledApi(tag)
        return newObj
    },{});
} 

const styled = createObjectStyled(tags);

export default styled