import { Container } from "./styles";
import logoImg from '@assets/Logo.png';
import { Image } from "react-native";

export function Header() {
    return (
        <Container>
            <Image source={logoImg} />
        </Container>
    )
}