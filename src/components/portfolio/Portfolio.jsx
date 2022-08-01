import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/amazon1.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Twitter-Clone',
    github: "https://github.com/Michaeljogoh/twitter-clone",
    demo: ""
  },
  {
    id: 2,
    image: IMG2,
    title: 'Amazon Aws S3',
    github: "https://github.com/Michaeljogoh/Aws-s3",
    demo: ""
  },
  {
    id: 3,
    image: IMG3,
    title: 'File-Upload-API',
    github: "https://github.com/Michaeljogoh/file-upload-api",
    demo: "https://documenter.getpostman.com/view/21519072/UzXM1yRi"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tic-Tac-Toe Game',
    github: "https://github.com/Michaeljogoh/React-Tic_tac_toe",
    demo: "https://react-tac-tac-toe.vercel.app/"
  },
  {
    id: 5,
    image: IMG5,
    title: 'Todo-List',
    github: "https://github.com/Michaeljogoh/React-Todo-List",
    demo: "https://react-todo-list-rose.vercel.app/"
  },
  {
    id: 6,
    image: IMG6,
    title: 'Node-Authenication',
    github: "https://github.com/Michaeljogoh/Node-Passport-authentication",
    demo: ""
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt=""/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>    
    </section>
  )
}

export default Portfolio