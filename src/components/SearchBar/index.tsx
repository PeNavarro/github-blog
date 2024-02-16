import { SearchBarContainer } from "./styles";
import { useForm } from "react-hook-form";

interface SearchBarProps{
    setSearchTerm: (props: string) => void
}

export function SearchBar({setSearchTerm}: SearchBarProps){
    const { register } = useForm()
    
    function handleSearchTerm(inputSearchTerm: string){
        setSearchTerm(inputSearchTerm)
    }

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
                        onChange: (e) => handleSearchTerm(e.target.value)
                    })}
                />
            </form>
        </SearchBarContainer>
    )
}