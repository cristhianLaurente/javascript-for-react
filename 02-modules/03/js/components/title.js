import styled from "../styled-components/index.js";
import { component as Component } from "../react/index.js"
const TitleStyled = styled.h3`
    color: orange;
    font-family: system-ui;
    font-size: 50px;
    line-height: 100vh
    text-shadow: 2px 2px 0 black;
`

const props = {
    firstName: "Cristhian",
    lastName: "Laurente"
}

const TitleContent = Component`Hola ${"firstName"} ${"lastName"}`(props)

export default TitleStyled(TitleContent)