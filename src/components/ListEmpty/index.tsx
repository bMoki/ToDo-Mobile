import { Image } from "react-native";
import { Container, Subtitle, Title } from "./styles";
import ClipboardImg from "@assets/Clipboard.png";

export function ListEmpty() {
    return (
        <Container>
            <Image source={ClipboardImg} />
            <Title>Você ainda não tem tarefas cadastradas</Title>
            <Subtitle>Crie tarefas e organize seus itens a fazer</Subtitle>
        </Container>
    )
}