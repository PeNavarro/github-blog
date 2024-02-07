import styled from "styled-components";

export const ProfileCardContainer = styled.div`
      max-width: 864px;
      margin: -90px auto 0;
      padding: 32px 40px;
      border-radius: 10px;

      background-color: ${props => props.theme['base-profile']};

      display: flex;
      gap: 32px;
      color: #fff;

      .profileImage{
            max-width: 148px;
      }

      .info{
            flex: 1;

            .title{
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;      

                  a{
                        color: ${props => props.theme['blue']};
                        text-transform: uppercase;
                        display: flex;
                        gap: 8px;
                        align-items: center;
                        font-size: 12px;
                        font-weight: 700;
                        text-decoration: none;
                        cursor: pointer;
                  }
            }
      }
`

export const ProfileStats = styled.div`
      display: flex;
      gap: 24px;
      margin-top: 24px;

      div{
            display: flex;
            align-items: center;
            gap: 8px;
      }
`