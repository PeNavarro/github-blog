import styled from "styled-components";

export const SearchBarContainer = styled.div`
    max-width: 864px;
    margin: 0 auto;
    margin-top: 72px;

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h2{
        color: ${props => props.theme['base-subtitle']};
        font-size: 18px;
        font-weight: 700;
    }

    p{
        color: ${props => props.theme['base-span']};
        font-size: 14px;
    }

    input{
        width: 100%;
        padding: 12px 16px; 
        border: none;
        border-radius: 6px;
        margin-top: 12px;

        background-color: ${props => props.theme['base-input']};
        color: ${props => props.theme['base-text']};

        &::placeholder{
            color: ${props => props.theme['base-label']};
        }

        &:focus{
            border: 1px solid ${props => props.theme['blue']};
            outline: none;
        }
    }
`