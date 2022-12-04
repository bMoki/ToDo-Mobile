import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { PlusCircle } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
    width: 52px;
    height: 52px;

    background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};

    border-radius: 6px;
    justify-content: center;
    align-items: center;

`
export const Icon = styled(PlusCircle).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.GRAY_100
}))``