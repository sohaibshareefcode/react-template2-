import React from 'react'
import { CgBox } from "react-icons/cg";
import { CgAirplane } from "react-icons/cg";
import { DiApple } from "react-icons/di";
import { DiCodeigniter } from "react-icons/di";
import Propschild from '../Propschild';
function About() {
  return (
    <div>

<div className="parentcard">
        <h1>
          at you service
          <hr
            style={{
              width: "10%",
              margin: "0 auto",
              border: " 3px solid red",
            }}
          />
        </h1>

        <div className="maincard">
          <div className="cardchild">
            <CgAirplane className="icon" />
            <Propschild
              heading="Sturdy Themes"
              name="Lorem ipsum dolor sit amet, consectetur voluptate earum, vel cupiditate"
            />
          </div>
          <div className="cardchild">
            <DiApple className="icon" />
            <Propschild
              heading="Sturdy Themes"
              name="Lorem ipsum dolor sit amet, consectetur voluptate earum, vel cupiditate"
            />
          </div>
          <div className="cardchild">
            <CgBox className="icon" />

            <Propschild
              heading="Sturdy Themes"
              name="Lorem ipsum dolor sit amet, consectetur voluptate"
            />
          </div>
          <div className="cardchild">
            <DiCodeigniter className="icon" />

            <Propschild
              heading="Sturdy Themes"
              name="Lorem ipsum dolor sit amet, consectetur voluptate"
            />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
