import React from 'react';
import { MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";

const projectsIcon =(props)=>{
        return(
            <MDBNavItem className="flex-lg-fill bd-highlight col-example">
                  <MDBNavLink className={props.activeItem==="3"?"indigo-text ":"white-text"} to="/projects" exact active={props.activeItem==="3"} onClick={props.toggle("3")}>
                    <MDBIcon fab icon="github"  size="lg" /> 
                    <br />
                    Projects
                  </MDBNavLink>  
            </MDBNavItem>
        )
}
export default projectsIcon