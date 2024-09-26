import React from 'react'
import Button from '@atlaskit/primitives/pressable'
import styled from 'styled-components'

const ButtonStyle = styled(Button)`
    margin-top: 5px;
    text-align: left;
`
    ;
export default function Todo({ todo }) {
    return (
        <ButtonStyle shouldFitContainer>
            {todo.name}
        </ButtonStyle>
    )
}
