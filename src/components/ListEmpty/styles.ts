import styled, { css } from "styled-components/native";

export const Container = styled.View`
    //flex: 1;
    
    align-items: center;
    justify-content: center;
    border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};
    border-top-width: 1px;
    padding: 48px 0;
`
export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD};
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_300};
    `}
    margin-top: 16px;
`
export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_300};
    `}
`