import { Task } from "@screens/Home/index.";
import { Button, CheckButton, CheckedIcon, Container, Content, TrashIcon, UncheckedIcon } from "./styles";

type Props = {
    task: Task;
    onCheck: (id: string) => void;
    onRemove: (id: string) => void;
}

export function TaskCard({ task, onCheck, onRemove }: Props) {
    const { checked, content, id } = task;
    return (
        <Container checked={checked}>
            <CheckButton checked={checked} onPress={() => onCheck(id)}>
                {checked ? <CheckedIcon /> : <UncheckedIcon />}
            </CheckButton>

            <Content checked={checked}>
                {content}
            </Content>
            <Button onPress={() => onRemove(id)}>
                <TrashIcon />
            </Button>
        </Container>
    )
}