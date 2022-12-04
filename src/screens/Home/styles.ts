import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    backgroundColor: ${({ theme }) => theme.COLORS.GRAY_600};
    
`

export const Content = styled.View`
    padding: 0 24px;
    margin-top: -27px ;
`

export const Form = styled.View`
    width: 100%;
    flex-direction: row;
    gap: 10px;
`