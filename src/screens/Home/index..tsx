import { useState, useEffect } from 'react'
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { ListDetails } from "@components/ListDetails";
import { Container, Content, Form } from "./styles";
import { ListEmpty } from '@components/ListEmpty';
import { TaskCard } from '@components/TaskCard';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid';
import { Alert, FlatList } from 'react-native';

export type Task = {
    id: string,
    content: string,
    checked: boolean,
}

export function Home() {


    const [tasks, setTasks] = useState<Task[]>([]);
    const [content, setContent] = useState('');


    function handleCreateTask() {
        const task: Task = {
            id: nanoid(),
            content,
            checked: false
        }

        setTasks(old => [task, ...old]);
        setContent('');
    }

    function handleCheck(id: string) {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.checked = !task.checked;
                return task;
            }
            return task;
        })

        setTasks(updatedTasks);
    }

    function onRemove(id: string) {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    function handleRemove(id: string) {
        Alert.alert(
            'Remover',
            'Deseja remover a tarefa?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => onRemove(id) }

            ]
        )
    }

    return (
        <Container>
            <Header />
            <Content>
                <Form>
                    <Input
                        onChangeText={setContent}
                        value={content}
                    />
                    <Button onPress={handleCreateTask} />
                </Form>
                <ListDetails
                    created={tasks.length}
                    done={tasks.filter(task => task.checked).length}

                />
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TaskCard
                            task={item}
                            onCheck={handleCheck}
                            onRemove={handleRemove}
                        />
                    )}
                    ListEmptyComponent={() => <ListEmpty />}
                    showsVerticalScrollIndicator={false}

                />
            </Content>
        </Container>
    )
}