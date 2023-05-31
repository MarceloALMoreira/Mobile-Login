
import React from 'react'
import { H1 } from './styles'


interface TitileProps {
    children: React.ReactNode;
}

const Title: React.FC<TitileProps> = ({ children }) => {
    return (

        <H1>{children}</H1>

    )
}

export default Title