import React, { useState, useEffect, createContext } from 'react'
import mockUser from './mockData/mockUser'
import mockRepos from './mockData/mockRepos'
import mockFollowers from './mockData/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

const GithubContext = createContext()

//Provider,Consumer

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser)
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)
  //request loading
  const [requests, setRequests] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  //error
  const [error, setError] = useState({
    show: false,
    msg: '',
  })

  //Check rate
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        // console.log(data)
        let {
          rate: { remaining },
        } = data

        setRequests(remaining)
        if (remaining === 0) {
          //throw an error
          toggleError(true, 'Sorry! You are exceeded your hourly rate limit')
        }
      })
      .catch((err) => console.log(err))
  }

  const searchGithubUser = async (user) => {
    // console.log(user)
    setIsLoading(true)
    //Toggle Error
    toggleError()
    //Set Loading

    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    )
    console.log('this', response)
    //Promise settled make request same time but get response synchronously
    if (response) {
      setGithubUser(response.data)
      const { login, followers_url } = response.data

      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((results) => {
          console.log('settled', results)
          const [repos, followers] = results
          console.log(repos)
          const status = 'fulfilled'
          if (repos.status === status) {
            setRepos(repos.value.data)
          }
          if (followers.status === status) {
            setFollowers(followers.value.data)
          }
        })
        .catch((err) => console.log(err))
    } else {
      toggleError(true, 'there is no user with that user name')
    }
    checkRequests()
    setIsLoading(false)
  }

  function toggleError(show = false, msg = '') {
    setError({ show, msg })
  }

  useEffect(() => {
    checkRequests()
  }, [requests, githubUser])

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export { GithubProvider, GithubContext }
