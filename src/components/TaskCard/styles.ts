import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Circle, Trash, Check } from 'phosphor-react-native'

export type TaskStyleProps = {
    checked: boolean
}

export const Container = styled.View<TaskStyleProps>`
    width: 100%;
    min-height: 64px;
    max-height: 64px;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding: 12px;
    margin-top: 8px;
    border-radius: 8px;

    ${({ theme, checked }) => css`
        background-color: ${theme.COLORS.GRAY_500};
        font-size: ${theme.FONT_SIZE.MD};
        border: 1px solid ${checked ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_400};
    `}
`

export const Content = styled.Text<TaskStyleProps>`
    flex: 1;
    margin-left: 8px;
    margin-right:8px;
    ${({ theme, checked }) => css`
        color: ${checked ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
        text-decoration: ${checked ? 'line-through' : 'none'};
    `}
`

export const Button = styled(TouchableOpacity)`

`

export const UncheckedIcon = styled(Circle).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.BLUE
}))``

export const CheckedIcon = styled(Check).attrs(({ theme }) => ({
    size: 14,
    color: theme.COLORS.GRAY_100,
    weight: 'bold'
}))``

export const CheckButton = styled(TouchableOpacity) <TaskStyleProps>`
    ${({ theme, checked }) => checked && css`
        background-color: ${theme.COLORS.PURPLE_DARK};
        border-radius: 999px;
        padding: 4px;
    `}
`

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
    size: 20,
    color: theme.COLORS.GRAY_300
}))``


