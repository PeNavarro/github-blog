import styled from "styled-components";

export const PostGridContainer = styled.div`
    max-width: 864px;
    margin: 48px auto 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    .card{
        padding: 32px;
        border-radius: 10px;
        background-color: ${props => props.theme['base-post']};
        height: 260px;
        grid-column: span 1;

        header{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 16px;
            
            h3{
                font-size: 20px;
                font-weight: 700;
                color: ${props => props.theme['base-title']};
            }

            p{
                font-size: 14px;
                flex-shrink: 0;
                color: ${props => props.theme['base-span']};
            }
        }

        .content{
            font-size: 16px;
            color: ${props => props.theme['base-text']};
            margin-top: 20px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }
    }
`