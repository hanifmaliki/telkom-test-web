import Paper from '@mui/material/Paper';
import styled from '@emotion/styled'

export const OuterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-block: 10px;
`

export const InnerContainer = styled(Paper)`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    background-color: #265fc5;
    gap: 10px;
`

export const Title = styled.div`
    width: 100%;
    background-color: #1128ded9;
    color: white;
    text-align: center;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    font-weight: bold;
`

export const Desc = styled.div`
    width: 100%;
    text-align: center;
    border-top: 1px solid #b8b8b8;
    border-bottom: 2px solid #b8b8b8;
    color: #403f3f;
    padding-block: 9px;
    font-weight: bold;
`