import { useEffect, useState } from "react"
import { IssuesListContainer, CardsGrid } from "./styles"
import { SearchBar } from "../SearchBar"
import { IssueCard } from "../IssueCard"

export function IssuesList(){
    const [issues, setIssues] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    console.log(searchTerm)

    async function getIssues(searchTerm: string){
        const endpoint = `https://api.github.com/search/issues?q=${searchTerm}%20repo:rocketseat-education/reactjs-github-blog-challenge`
        const response = await fetch(endpoint)

        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })

        setIssues(response.items)
    }

    useEffect(() => {
        getIssues(searchTerm)
    }, [searchTerm])

    return(
        <IssuesListContainer>
            <SearchBar setSearchTerm={setSearchTerm} />
            <CardsGrid>
                {issues.map((issue, key) => {
                    return(
                        <IssueCard key={key} issue={issue} />
                    )
                })}
            </CardsGrid>
        </IssuesListContainer>
    )
}