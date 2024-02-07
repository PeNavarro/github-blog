import { Header } from '../../components/Header/index.tsx'
import { PostGrid } from '../../components/PostGrid/index.tsx'
import {ProfileCard} from '../../components/ProfileCard/index.tsx'
import { SearchBar } from '../../components/SearchBar/index.tsx'

export function Home(){
      return(
            <>
                  <Header />
                  <ProfileCard />
                  <SearchBar />
                  <PostGrid />
            </>
      )
}