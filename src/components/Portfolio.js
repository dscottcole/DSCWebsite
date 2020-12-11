import React from "react";
import ProjectCard from "./ProjectCard"
import ProjectCardMobile from "./ProjectCardMobile"

function Portfolio () {

    const isMobile = () => /Mobi|Android/i.test(navigator.userAgent)

    const projects = [
        {name: "Friend In Meow", briefDescription: "A cat adoption and cat breed information application created with a ReduxJS frontend and Rails backend.", youtubeLink: "https://www.youtube.com/embed/nwljO7tNEL4", applicationLink: "https://friendinmeow.herokuapp.com/", combinedGithub: "https://github.com/dscottcole/FriendInMeow", githubFront: null, githubBack: null, longDescription: "A cat adoption and breed information app with an infinite-scrolling cat GIF/picture feed. This app was created with a React-Redux frontend and a Ruby on Rails backend. It features geolocation, scrolling and onClick pagination, lazy loading for the infinite cat feed, mapping through google maps, and Material UI combined with CSS for styling. Validations are handled by ActiveRecord, password management through bcrypt, and JWT Web Tokens for authorizing/authenticating. I used TheCatApi for Breed information and random cat picture generation. Petfinder's API for actual adoptable cats and adoption organization information pertinent to adoptable cats. Google's geocoding & google maps API for locating pets in relation to a user's location after obtaining their respective coordinates."},
        {name: "Shredcountry", briefDescription: "A bicycle retail website created with a ReactJS frontend and Rails backend.", youtubeLink: "https://www.youtube.com/embed/C6wdBdDaDAo", applicationLink: "https://shredcountry.herokuapp.com/", combinedGithub: null, githubFront: "https://github.com/dscottcole/shredcountryFrontEnd", githubBack: "https://github.com/dscottcole/shredcountry_back_end", longDescription: "A bicycle retail website created with a ReactJS frontend and Rails backend. Validations were handled by ActiveRecord, password management through bcrypt, JWT Token authorization/authentication, and data from a seed file. Utilized localStorage combined with component state to create and save current shopping cart. Utilized has_and_belongs_to_many to achieve join table behavior with a reduced number of models. Styling was done with Semantic UI and CSS."},
        {name: "Geo Wars Retro^2", briefDescription: "A single-page Geometry Wars Retro video game remake created with a Javascript frontend and Rails backend. 'WASD' keys to move and mouse click to fire projectiles. Project Partner: Yehong Piao.", youtubeLink: "https://www.youtube.com/embed/d8_MSbqHMVU", applicationLink: "https://geowarsretro.herokuapp.com", combinedGithub: "https://github.com/dscottcole/GeoWars", githubFront: null, githubBack: null, longDescription: "Single-page game modeled after Geometry Wars Retro. Created with a Javascript frontend and Ruby on Rails as an API for the backend. The player object is controlled with the 'WASD' keys and the projectiles are fired with mouse clicks. The projectile trajectory is calculated by using trigonometric functions and the enemies converge based on a player to enemy relative coordinate calculation on the canvas. Respective object X and Y coordinate calculations were used for hit detection and all the animations were created with setTimer functions on a canvas. The dynamic scoreboard was achieved through score and user associations in the backend and DOM manipulation. All styling was done through CSS. Project Partner: Yehong Piao."}
    ]

    const portfolioDesktop = (
        <div className="bodyDiv-portfolio">
            {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
    )

    const portfolioMobileVert = (
        <div className="bodyDiv-portfolio-mobile-vert">
            {projects.map((project, index) => <ProjectCardMobile key={index} project={project} />)}
        </div>
    )

    return (
        <div>
            {isMobile() === false? portfolioDesktop : portfolioMobileVert}
        </div>
    )
}

export default Portfolio;