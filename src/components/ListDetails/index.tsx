import { Container, Detail, Number, Title } from "./styles";

type Props = {
    created: number;
    done: number;
}

export function ListDetails({ created, done }: Props) {
    return (
        <Container>
            <Detail>
                <Title type="PRIMARY">Criadas</Title>
                <Number>{created}</Number>
            </Detail>
            <Detail>
                <Title type="SECONDARY">Concluídas</Title>
                <Number>{done}</Number>
            </Detail>
        </Container>

    )
}