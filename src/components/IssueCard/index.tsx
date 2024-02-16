import Markdown from 'react-markdown'
import 'moment/dist/locale/pt-br'
import moment from "moment"
import { CardContainer } from './styles'

interface IssueCardProps{
      issue: IssueProps,
      key: number 
}

interface IssueProps{
      title: string,
      updated_at: string,
      body: string
}

export function IssueCard(props: IssueCardProps){
      moment.locale('ptBr')

      return(
            <CardContainer className="card" key={props.key}>
                  <header>
                        <h3>{props.issue.title}</h3>
                        <p>{moment(props.issue.updated_at).fromNow()}</p>
                  </header>

                  <Markdown className="content">
                        {props.issue.body}
                  </Markdown>
            </CardContainer>
      )
}