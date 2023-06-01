import { Button as ContainerButton } from "./styles"

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    isBack: boolean;
}

const Button: React.FC<Props> = ({ children, ...props}) => {

    return (

        <ContainerButton {...props}>{children}</ContainerButton>

    )
}

export default Button