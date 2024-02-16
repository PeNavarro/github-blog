import { Header } from '../../components/Header/index.tsx'
import { IssuesList } from '../../components/IssuesList/index.tsx'
import {ProfileCard} from '../../components/ProfileCard/index.tsx'

export function Home(){
      return(
            <>
                  <Header />
                  <ProfileCard />
                  <IssuesList />
            </>
      )
}