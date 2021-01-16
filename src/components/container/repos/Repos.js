import { Card, Col, Row } from 'antd'
import React, { useContext } from 'react'
import Pie3D from '../charts/Pie3D'
import { GithubContext } from '../../../context/context'
import Donut2D from '../charts/Donut2D'
import Column from '../charts/Column.js'
import Bar from '../charts/Bar'
// import ChartComponent from '../charts/ExampleChart'

function Repos() {
  const { repos } = useContext(GithubContext)
  console.log(repos)

  const languages = repos.reduce((total, item) => {
    //Returning each repo in repos list
    // console.log(item)
    const { language, stargazers_count } = item
    // console.log(language)
    if (!language) return total

    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    }

    return total
  }, {})

  // most used languages
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)

  // most stars per language
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars
    })
    .map((item) => {
      return { ...item, value: item.stars }
    })

  //stars-forks
  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item
      total.stars[stargazers_count] = { label: name, value: stargazers_count }

      total.forks[forks] = { label: name, value: forks }
      return total
    },
    {
      stars: {},
      forks: {},
    }
  )

  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()

  return (
    <>
      <Row align='middle' justify='center' gutter={[24, 24]}>
        <Col
          xs={24}
          l={12}
          xl={10}
          style={{
            height: '500px',
            marginTop: '1em',
          }}
        >
          <Pie3D data={mostUsed} />
        </Col>
        <Col
          xs={24}
          l={12}
          xl={10}
          style={{ height: '500px', marginTop: '1em' }}
        >
          <Donut2D data={mostUsed} />
        </Col>
        {/* <ChartComponent data={chartData} /> */}
      </Row>
      <Row align='middle' justify='center' gutter={[24, 24]}>
        <Col
          xs={24}
          l={12}
          xl={10}
          style={{
            height: '500px',
            marginTop: '1em',
          }}
        >
          <Column data={stars} />
        </Col>
        <Col
          xs={24}
          l={12}
          xl={10}
          style={{ height: '500px', marginTop: '1em' }}
        >
          <Bar data={forks} />
        </Col>
        {/* <ChartComponent data={chartData} /> */}
      </Row>
    </>
  )
}

export default Repos
