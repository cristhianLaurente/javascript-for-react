function component(strings, ...dynamicValues) {

    return function (props) {
        // usamos slice() para hacer un copy en memoria y poder mutarlo más adelante
        let newContent = strings.slice()
        dynamicValues.forEach((value, index) => {
            newContent[index] += props[value]
        })
        return newContent.join("")
    }
}

export {
    component
}