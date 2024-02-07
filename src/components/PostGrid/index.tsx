import { useEffect, useState } from "react"
import { PostGridContainer } from "./styles"
import 'moment/locale/pt-br.js'
import moment from "moment"

interface IssuesProps{
    title: string,
    updated_at: string,
    body: string
}

export function PostGrid(){
    const [issues, setIssues] = useState<IssuesProps[]>([])

    moment.locale('ptBr')

    async function getIssues(){
        const response = await fetch('https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge')
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })

        setIssues(response.items)
    }

    useEffect(() => {
        getIssues();
    }, [])

    return(
        <PostGridContainer>
            {issues.map((issue, key) => {
                return(
                    <div className="card" key={key}>
                        <header>
                            <h3>{issue.title}</h3>
                            <p>{moment(issue.updated_at).fromNow()}</p>
                        </header>

                        <p className="content">{issue.body}</p>
                    </div>
                )
            })}
        </PostGridContainer>
    )
}