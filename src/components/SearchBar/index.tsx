import { useEffect, useState } from "react";
import { SearchBarContainer } from "./styles";
import { useForm } from "react-hook-form";

export function SearchBar(){
    const { register } = useForm()
    const [searchTerm, setSearchTerm] = useState()

    console.log(searchTerm)

    async function getIssues(){
        const response = await fetch('https://api.github.com/search/issues?q=Boas%20práticas%20repo:rocketseat-education/reactjs-github-blog-challenge')
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })

        console.log(response)
    }

    useEffect(() => {
        // getIssues();
    }, [searchTerm])

    return(
        <SearchBarContainer>
            <div className="header">
                <h2>Publicações</h2>
                <p>6 publicações</p>
            </div>

            <form action="">
                <input 
                    type="text"
                    id="search" 
                    placeholder="Buscar conteúdo"
                    {...register('search', {
                        onChange: (e) => setSearchTerm(e.target.value)
                    })}
                />
            </form>
        </SearchBarContainer>
    )
}