import React from 'react';
import { MDBCardBody, MDBCard, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import '../../../Components/Style.css';
import First from './first';
import Second from './second';
import Third from './third'

export default class projects extends React.Component{
    state={
        collapseID: ""
    }

    toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    render(){
        const scrollContainerStyle = { maxHeight: "80vh" };
        return(            
            <MDBContainer >
                <MDBCard className="card-image forProject" >
                    <MDBCardBody className="rgba-black-strong py-5 px-4 border border-white scrollbar scrollbar-secondary" style={scrollContainerStyle}>
                        <MDBRow className="d-flex justify-content-center ">
                            <MDBCol md="10" xl="8">
                                <MDBContainer>
                                    <First collapseID={this.state.collapseID} toggleCollapse={this.toggleCollapse}/>
                                    <Second collapseID={this.state.collapseID} toggleCollapse={this.toggleCollapse}/>
                                    <Third collapseID={this.state.collapseID} toggleCollapse={this.toggleCollapse}/>
                                </MDBContainer>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        )
    }
}