import { ProfileCardContainer, ProfileStats } from "./styles";
import github from '../../assets/github.svg'
import building from '../../assets/building.svg'
import followers from '../../assets/followers.svg'
import externalLink from '../../assets/external-link.svg'
import { useEffect, useState } from "react";

interface ProfileInfos{
      avatar_url: string,
      name: string,
      html_url: string,
      bio: string,
      login: string,
      company: string,
      followers: number,
}

export function ProfileCard(){

      const [profileInfo, setProfileInfo] = useState<ProfileInfos>()

      async function getUserInfo(){
            const response = await fetch('https://api.github.com/users/PeNavarro')
            .then(response => {
                  return response.json()
            })
            .catch(error => {
                  console.log(error)
            })

            setProfileInfo(response)
      }

      useEffect(() => {
            getUserInfo();
      }, [])

      return(
            <ProfileCardContainer>
                  <div>
                        <img src={profileInfo?.avatar_url} alt="" className="profileImage"/>
                  </div>
                  <div className="info">
                        <div className="title">
                              <h1>{profileInfo?.name}</h1>
                              <a href={profileInfo?.html_url} target="_blank">
                                    github
                                    <img src={externalLink} alt="" />
                              </a>
                        </div>
                        <p>{profileInfo?.bio}</p>

                        <ProfileStats>
                              <div>
                                    <img src={github} alt="" />
                                    <span>{profileInfo?.login}</span>
                              </div>
                              <div>
                                    <img src={building} alt="" />
                                    <span>{profileInfo?.company}</span>
                              </div>
                              <div>
                                    <img src={followers} alt="" />
                                    <span>{profileInfo?.followers} seguidores</span>
                              </div>
                        </ProfileStats>
                  </div>

            </ProfileCardContainer>
      )
}