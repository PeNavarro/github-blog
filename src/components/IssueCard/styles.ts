import styled from "styled-components";

export const CardContainer = styled.div`
      padding: 32px;
      border-radius: 10px;
      background-color: ${props => props.theme['base-post']};
      height: 260px;
      width: 416px;
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
`