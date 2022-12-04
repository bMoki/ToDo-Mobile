import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    padding: 71px 0;
`;