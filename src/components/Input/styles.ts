import styled, { css } from "styled-components";
import { TextInput } from 'react-native'

export const Container = styled(TextInput)`
    flex: 1;
    min-height: 54px;
    max-height: 54px;
    border-radius: 6px;
    padding: 16px;
    margin-right: 4px;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_500};
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_100};
        border: 1px solid ${theme.COLORS.GRAY_700};
    `}


`