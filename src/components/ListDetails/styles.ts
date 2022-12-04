import styled, { css } from "styled-components/native";

export type TitleStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: TitleStyleProps;
}

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px;
    margin-bottom: 20px;
`

export const Detail = styled.View`
    flex-direction: row;
`

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.MD};
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${type === 'PRIMARY' ? theme.COLORS.BLUE : theme.COLORS.PURPLE};
    `}
    margin-right: 8px;
`

export const Number = styled.Text`
     ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM};
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_200};
        background-color: ${theme.COLORS.GRAY_400};
    `}
    padding: 2px 8px;
    border-radius: 999px;
`