import React from 'react';
import { MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";

const cvIcon =(props)=>{
        return(
            <MDBNavItem className="flex-lg-fill bd-highlight col-example">
                  <MDBNavLink className={props.activeItem==="2"?"indigo-text":"white-text"} to="/cv" exact active={props.activeItem==="2"} onClick={props.toggle("2")}>
                    <MDBIcon icon="book-reader" size="lg" />
                    <br />
                    CV
                  </MDBNavLink>  
            </MDBNavItem>
        )
}
export default cvIcon