(this.webpackJsonpsamarspace=this.webpackJsonpsamarspace||[]).push([[0],{12:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/logo.47dfb17d.png"},44:function(e,t,a){e.exports=a.p+"static/media/2.eebb162b.png"},46:function(e,t,a){e.exports=a.p+"static/media/Resume.741086aa.pdf"},47:function(e,t,a){e.exports=a.p+"static/media/moviefun.fc6ba4c3.gif"},48:function(e,t,a){e.exports=a.p+"static/media/slider.0fc50a2a.gif"},49:function(e,t,a){e.exports=a.p+"static/media/colorSlider.2b77ae8a.gif"},50:function(e,t,a){e.exports=a.p+"static/media/planner.cb9ebd18.gif"},51:function(e,t,a){e.exports=a.p+"static/media/p1.ec6446b5.png"},52:function(e,t,a){e.exports=a.p+"static/media/p2.9ae9b2fb.png"},53:function(e,t,a){e.exports=a.p+"static/media/p3.c823f2d7.png"},54:function(e,t,a){e.exports=a(85)},62:function(e,t,a){},63:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(19),c=a.n(r),s=(a(59),a(60),a(61),a(62),a(4)),o=a(5),i=a(7),m=a(6),u=a(8),d=(a(63),a(17)),h=a(20),p=a(2),E=a(43),b=a.n(E),f=(a(12),function(e){return n.a.createElement(d.b,{to:"/",exact:!0,onClick:e.toggle("")},n.a.createElement("img",{src:b.a,alt:"samar's spcae",className:"img-fluid mx-auto d-block forLogo forSpin"}))}),g=[{activeItem:"1",to:"/about",icon:"user-circle",name:"About"},{activeItem:"2",to:"/cv",icon:"book-reader",name:"CV"},{activeItem:"3",to:"/projects",icon:"code-branch",name:"Projects"},{activeItem:"4",to:"/contact",icon:"address-book",name:"Contact"}],v=function(e){var t=g.map((function(t){return n.a.createElement(p.x,{className:"flex-lg-fill bd-highlight col-example"},n.a.createElement(p.y,{className:e.activeItem===t.activeItem?"indigo-text ":"white-text ",to:t.to,exact:!0,active:e.activeItem===t.activeItem,onClick:e.toggle(t.activeItem)},n.a.createElement(p.o,{icon:t.icon,size:"lg",className:"forSpin"}),n.a.createElement("br",null),t.name))}));return n.a.createElement(n.a.Fragment,null,t)},y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={activeItem:""},a.toggle=function(e){return function(){a.state.activeItem!==e&&a.setState({activeItem:e})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){switch(this.props.location.pathname){case"/about":this.setState({activeItem:"1"});break;case"/cv":this.setState({activeItem:"2"});break;case"/projects":this.setState({activeItem:"3"});break;case"/contact":this.setState({activeItem:"4"});break;default:this.setState({activeItem:""})}}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return n.a.createElement("div",{className:"classic-tabs"},n.a.createElement(f,{activeItem:this.state.activeItem,toggle:this.toggle}),n.a.createElement(p.n,null,n.a.createElement(p.c,{className:"text-center"},n.a.createElement(p.f,{className:"purple-gradient border border-white"},n.a.createElement(p.w,{classicTabs:!0,className:"d-flex flex-nowrap bd-highlight justify-content-center"},n.a.createElement(v,{activeItem:this.state.activeItem,toggle:this.toggle}))))))}}]),t}(n.a.Component),x=Object(h.e)(y),N=a(44),k=a.n(N),w=[{name:"Java Script - Superior level",project:"Project done using Java Script:",link:"https://github.com/samaromm/js-github-project.git",desc:"Fetch users info from Github",icon:"js"},{name:"React - Superior level",project:"Project done using React:",link:"github.com/samaromm/page-of-youth",desc:"A planner",icon:"react"},{name:"Java - Good level",project:"Project done using Java:",link:"https://github.com/samaromm/Ticket-Reservation.git",desc:"Ticket Reservation System",icon:"java"},{name:"NestJS - Beginner level",project:"Project done using NestJS:",link:"gitlab.com/devcamp2020/bookmark-be",desc:"Bookmark-BE",icon:"node-js"}],j=function(){var e=w.map((function(e){return n.a.createElement(p.z,{placement:"top",popover:!0,clickable:!0,id:"popper1"},n.a.createElement(p.b,{tag:"a",gradient:"purple",className:"buttonRound",style:{padding:"7px 9px"}},n.a.createElement(p.o,{fab:!0,icon:e.icon,className:"forSpin",size:"3x"})),n.a.createElement("div",null,n.a.createElement(p.B,null,e.name),n.a.createElement(p.A,null,e.project,n.a.createElement("a",{href:e.link,target:"blank"},e.desc))))}));return n.a.createElement(p.C,{className:"d-flex justify-content-center mb-3"},n.a.createElement(p.l,null,e))},C=function(){return n.a.createElement(p.n,null,n.a.createElement(p.c,{className:"text-center text-white forAbout forCards"},n.a.createElement(p.d,{className:" rgba-black-strong  border border-white scrollbar scrollbar-secondary",style:{maxHeight:"90vh"}},n.a.createElement(p.C,null,n.a.createElement(p.l,null,n.a.createElement("h5",{style:{color:"#B273E1"},className:"border border-secondary p-3 w-responsive mt-4 mx-auto"},"Software Engineer,",n.a.createElement("br",null),"Junior Front End Developer"),n.a.createElement("br",null),n.a.createElement("p",{className:" text-left w-responsive mx-auto mb-3"},"I'm Samar, Software Engineer. ",n.a.createElement("br",null),"Good knowledge of"," ",n.a.createElement("span",{style:{color:"#f06ec9"}},"OOP, Java, JavaScript "),n.a.createElement("span",{style:{color:"#f06ec9"}},"React framework, Axios, and a beginner NestJS learner.")," ",n.a.createElement("br",null),"Have a front-end development certificate from"," ",n.a.createElement("a",{href:"https://flatironschool.com/",target:"blank"},"Flatiron School."),n.a.createElement("br",null),"Front-End Junior Developer in the turkish company E-Bursum."),n.a.createElement("div",{className:"animated slideInRight"},n.a.createElement(j,null)),n.a.createElement("img",{src:k.a,alt:"astronaut",className:"img-fluid float-left",style:{width:"100px"}}),n.a.createElement("p",{className:" lead mb-3 text-left"},"I always try to gain knowledge in different software areas as I can, and don't limit myself to what I'm confident at; because programming field is like"," ",n.a.createElement("strong",null,"the space:",n.a.createElement("span",{style:{color:"#f06ec9"}}," ","huge, full of secrets, fascinating, has no end, and will always make you curious."))))))))},S=a(45),O=a(23),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).changeHandler=function(e){a.setState(Object(S.a)({},e.target.name,{value:e.target.value,valid:!!e.target.value}))},a.submitForm=a.submitForm.bind(Object(O.a)(a)),a.state={status:"",email:{value:"",valid:!1},message:{value:"",valid:!1}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.status;return n.a.createElement("div",{className:"text-left md-form d-flex flex-column"},n.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/xqklbjae",method:"POST"},n.a.createElement(p.q,{type:"email",name:"email",label:"Your email",value:this.state.email.value,className:this.state.email.valid?"form-control is-valid":"form-control is-invalid",onChange:this.changeHandler}),n.a.createElement(p.q,{type:"textarea",name:"message",outline:!0,label:"Your message",value:this.state.message.value,className:this.state.message.valid?"form-control is-valid":"form-control is-invalid",onChange:this.changeHandler}),"SUCCESS"===e?n.a.createElement("p",null,"Thanks! Message received"):n.a.createElement("button",{className:" btn btn-secondary"},"Send"),"ERROR"===e&&n.a.createElement("p",null,"Sorry.. There was an error. Make sure to fill all the fields")))}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,l=new FormData(a),n=new XMLHttpRequest;n.open(a.method,a.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status&&t.state.email.valid&&t.state.message.valid?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},n.send(l)}}]),t}(n.a.Component),R=function(){return n.a.createElement("ul",{className:"list-unstyled mb-0"},n.a.createElement("li",null,n.a.createElement(p.o,{fab:!0,icon:"github-square",size:"2x",className:"purple-text"}),n.a.createElement("br",null),n.a.createElement("a",{href:"https://github.com/samaromm",target:"blank"},"Github")),n.a.createElement("li",null,n.a.createElement(p.o,{icon:"phone",size:"2x",className:"purple-text mt-2"}),n.a.createElement("p",null,"+90 505 052 9560")),n.a.createElement("li",null,n.a.createElement(p.o,{icon:"envelope",size:"2x",className:"purple-text mt-2"}),n.a.createElement("p",null,"samaromm98@gmail.com")),n.a.createElement("li",null,n.a.createElement(p.o,{fab:!0,icon:"linkedin",size:"2x",className:"purple-text mt-2"}),n.a.createElement("br",null),n.a.createElement("a",{href:"https://www.linkedin.com/in/samaromm/",target:"blank"},"Linkedin")))},D=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(p.n,null,n.a.createElement(p.c,{className:"text-center "},n.a.createElement(p.d,{className:"border border-white scrollbar scrollbar-secondary forCards",style:{maxHeight:"90vh"}},n.a.createElement("h2",{className:"h1-responsive font-weight-bold text-center text-secondary "},"Contact me"),n.a.createElement(p.C,null,n.a.createElement(p.l,{md:"9",className:"md-0 mb-5"},n.a.createElement(I,null)),n.a.createElement(p.l,{md:"3",className:"text-center"},n.a.createElement(R,null))))))}}]),t}(n.a.Component),J=function(){return n.a.createElement("ul",{className:"text-left",style:{listStyle:"none"}},n.a.createElement("li",null,n.a.createElement("h3",{className:"text-secondary"},"\xdcsk\xfcdar \xdcniversitesi"),n.a.createElement("h5",null,"2017 - 2021"),n.a.createElement("p",null," Software engineering degree from \xdcsk\xfcdar University",n.a.createElement("br",null),"GPA: 3.91/4",n.a.createElement("br",null))),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h3",{className:"text-secondary"},"Re:Coded Bootcamp"),n.a.createElement("h5",null,"2019 - 2020"),n.a.createElement("p",null,"Front End Web Development (HTML, CSS, JavaScript, React)",n.a.createElement("br",null),"5 month intense web development program run by Re:Coded with Flatiron School's curriculum.")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h3",{className:"text-secondary"},"Talentvar Bootcamp "),n.a.createElement("h5",null,"2020"),n.a.createElement("p",null," Back End Web Development (Mongodb, NodeJS)",n.a.createElement("br",null),"2 months backend development program.",n.a.createElement("br",null)," Learn by directly working on the main project.")))},H=function(){return n.a.createElement("ul",{className:"text-left",style:{listStyle:"none"}},n.a.createElement("li",null,n.a.createElement("h4",{className:"text-danger"},"E-Bursum"),n.a.createElement("h5",null,"8/2020 - present"),n.a.createElement("p",null,"Junior Developer",n.a.createElement("br",null),"Re-built the front-end side of the company\u2019s website using HTML, PHP for front-end, Sass, and Java Script without frameworks.",n.a.createElement("br",null),"The pages I built have been integrated, sent to production, and are fully working now. and received positive reactions from the clients",n.a.createElement("br",null)," ",n.a.createElement("br",null),"Currently working on a huge website for the company with a lot of options like forms and dashboards using React, and Axios. Expected to go live this year")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h4",{className:"text-danger"},"Re:Coded Labs"),n.a.createElement("h5",null,"12/2019 - 5/2020"),n.a.createElement("p",null," ","Junior Developer Intern",n.a.createElement("br",null),"Worked with teams, and in pairs to build the front-end side of various projects.",n.a.createElement("br",null),"Contributed to the teams with my knowledge of Algorithms and general programming.")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h4",{className:"text-danger"},"\xdcsk\xfcdar University - Teaching assistant"),n.a.createElement("h5",null,"2020 - 2/2020 \u2013 4/2020"),n.a.createElement("p",null,"Works as a teaching assistant in my university to help explain algorithms for younger students."),n.a.createElement("ul",null,n.a.createElement("h4",{className:"text-primary"},"Courses:"),n.a.createElement("li",null,n.a.createElement("h5",{className:"text-secondary"},"Software Constructions:"),n.a.createElement("p",null," ","(Writing Java codes of the data structures \u2013Heaps, Trees, Linked Lists, Stacks, etc...)")),n.a.createElement("li",null,n.a.createElement("h5",{className:"text-secondary"},"Object Oriented Programming 2:"),n.a.createElement("p",null," (OOP in C++)")),n.a.createElement("li",null,n.a.createElement("h5",{className:"text-secondary"},"Java I for 1st year students:"),n.a.createElement("p",null," (java basics)")))),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h4",{className:"text-danger"},"Al Wafa Rehabilitation Center - Helper Volunteer"),n.a.createElement("h5",null,"2016 \u2013 Riyadh"),n.a.createElement("p",null,"Helped disabled and Autistic students.")))},z=function(){return n.a.createElement("ul",{className:"text-left",style:{listStyle:"none"}},n.a.createElement("li",null,n.a.createElement("h3",{className:"text-secondary"},"HTML, CSS, JS, React framework, and Axios"),n.a.createElement("p",null,"Good knowledge, have done different projects, able to create websites from scratch, or use libraries and open source.")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h3",{className:"text-secondary"},"Java"),n.a.createElement("p",null,"Years of studying, confident enough, used it to learn android studio basics, very good knowledge of OOP in Java, able to create large scale systems.")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h3",{className:"text-secondary"},"Sass "),n.a.createElement("p",null,"Moderate knowledge, used in internship.")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h3",{className:"text-secondary"},"Photoshop"),n.a.createElement("p",null,"Moderate knowledge, able to use it for editing and designing UI for websites and applications.")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h3",{className:"text-secondary"},"NodeJs, Sequelize, SQL, NestJS and mongodb"),n.a.createElement("p",null,"Beginner")))},P=function(){return n.a.createElement("ul",{className:"text-left",style:{listStyle:"none"}},n.a.createElement("li",null,n.a.createElement("h3",{className:"text-secondary"},"Web Development certificate from Flatiron School"),n.a.createElement("h5",null,"2020"),n.a.createElement("p",null,"Enrolled at 5 months long web development bootcamp (Re:Coded), where we learn front-end as well as developer soft skills. Completing the bootcamp successfully guarantees a certified from from Flatiron School")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h3",{className:"text-secondary"},"TOEFL"),n.a.createElement("h5",null,"2017"),n.a.createElement("p",null,"Test of English as a foreign language.")))},T=function(){return n.a.createElement("ul",{className:"text-left",style:{listStyle:"none"}},n.a.createElement("li",null,n.a.createElement("h5",{className:"text-secondary"},n.a.createElement(p.o,{icon:"file-signature"})," Samar Omar")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h5",{className:"text-secondary"},n.a.createElement(p.o,{icon:"venus"})," Female")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h5",{className:"text-secondary"},n.a.createElement(p.o,{icon:"birthday-cake"})," 29/8/1998")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h5",{className:"text-secondary"},n.a.createElement(p.o,{icon:"map-marker-alt"})," Istanbul")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h5",{className:"text-secondary"},n.a.createElement(p.o,{icon:"language"})," Native Language: Arabic")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h5",{className:"text-secondary"},n.a.createElement(p.o,{icon:"chalkboard-teacher"})," Advanced: English")),n.a.createElement("hr",null),n.a.createElement("li",null,n.a.createElement("h5",{className:"text-secondary"},n.a.createElement(p.o,{icon:"robot"})," Current Interests: Back-End development")))},F=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(p.s,{isOpen:this.props.modal,toggle:this.props.close,size:"lg",centered:!0},n.a.createElement(p.v,null,this.props.id),n.a.createElement(p.t,null,"Education"===this.props.id&&n.a.createElement(J,null),"Experience"===this.props.id&&n.a.createElement(H,null),"Skills"===this.props.id&&n.a.createElement(z,null),"Certifications"===this.props.id&&n.a.createElement(P,null),"General Information"===this.props.id&&n.a.createElement(T,null)),n.a.createElement(p.u,null,n.a.createElement(p.b,{color:"secondary",onClick:this.props.close},"Close")))}}]),t}(l.Component),A=a(46),B=a.n(A),L=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).close=function(){e.setState({modal:!e.state.modal,id:""})},e.open=function(t){e.setState({modal:!e.state.modal,id:t.target.id})},e.state={modal:!1,id:""},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=[{id:"General Information",name:"General Info"},{id:"Education",name:"Education"},{id:"Certifications",name:"Certificate"},{id:"Skills",name:"Skills"},{id:"Experience",name:"Experience"}].map((function(t){return n.a.createElement(p.b,{onClick:e.open,id:t.id,className:"p-0 bd-highlight border cvButtons forSpin",gradient:"blue"},t.name)}));return n.a.createElement(p.n,{style:{height:"100%"}},n.a.createElement(p.C,{className:"d-flex align-items-center bd-highlight mb-3 \r justify-content-center animated slideInRight",style:{height:"100%"}},n.a.createElement(p.l,null,t,n.a.createElement("a",{href:B.a,rel:"noopener noreferrer",style:{color:"white"},target:"blank",variant:"outline-info"},n.a.createElement(p.b,{className:"p-0 bd-highlight border cvButtons forSpin",gradient:"blue"},"pdf Copy")))),n.a.createElement(F,{id:this.state.id,modal:this.state.modal,close:this.close}))}}]),t}(l.Component),M=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(p.n,null,n.a.createElement(p.c,{className:"text-center forCv ",style:{backgroundColor:"#354187"}},n.a.createElement(p.d,{className:" border border-white scrollbar scrollbar-secondary rgba-white-light",style:{maxHeight:"90vh"}},n.a.createElement(L,null))))}}]),t}(n.a.Component),G=a(47),W=a.n(G),q=a(48),U=a.n(q),Y=function(e){return n.a.createElement(p.m,{id:"collapse1",isOpen:e.collapseID},n.a.createElement(p.d,{className:"rgba-white-light white-text z-depth-1"},n.a.createElement("div",{className:"mb-0"},n.a.createElement(p.C,{className:"d-flex justify-content-center mb-3"},n.a.createElement(p.l,null,n.a.createElement("img",{src:W.a,alt:"screenrecord of the website",className:"figure-img img-fluid mx-auto d-block z-depth-1  "}),n.a.createElement("figcaption",{className:"figure-caption black-text text-center",style:{backgroundColor:"#fff"}},n.a.createElement("a",{href:"https://github.com/samaromm/moviefun",className:"mr-4",target:"blank"},"Github"),n.a.createElement("a",{href:"https://mervegumuskaya.github.io/moviefun/index.html",target:"blank"},"gh pages")))),n.a.createElement("div",{className:"border mb-3 p-2 border-dark",style:{backgroundColor:"rgba(68,63,168,0.5)"}},n.a.createElement("h6",{className:"text-center "},"Group Project, HTML/CSS/Bootstrap",n.a.createElement("br",null),"Website for criticizing movies")),n.a.createElement("p",{className:"border p-3 border-dark ",style:{backgroundColor:"rgba(68,63,168,0.5)"}},"The idea was a platform for people to criticize movies and give their honest opinions, but without using java script so it only foucsed on the design and applying what we have learned after 1 month of html-css-bootstrap course."),n.a.createElement("hr",null),n.a.createElement("div",null,n.a.createElement("p",null,"One of the main points of the website is its' responsiveness.",n.a.createElement("br",null),"Example is how the movie cards changes to slider in smaller screens."),n.a.createElement(p.C,{className:"d-flex justify-content-center mb-3"},n.a.createElement(p.l,{md:"4"},n.a.createElement("img",{src:U.a,alt:"screenshot of the slider",className:"figure-img img-fluid z-depth-1 d-block mx-auto"})))))))},V=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"mb-3"},n.a.createElement(p.E,{hover:!0,onClick:this.props.toggleCollapse("collapse1"),className:" border border-dark forHover p-0 z-depth-1"},n.a.createElement(p.g,{style:{color:"#fff",fontWeight:"bold",margin:"0 auto"}},"Movie Critics"),n.a.createElement(p.r,{className:"flex-center",overlay:"white-strong"})),n.a.createElement(Y,{collapseID:this.props.collapseID}))}}]),t}(n.a.Component),X=a(49),Q=a.n(X),K=function(e){return n.a.createElement(p.m,{id:"collapse2",isOpen:e.collapseID},n.a.createElement(p.d,{className:"rgba-white-light white-text z-depth-1"},n.a.createElement("div",{className:"mb-0"},n.a.createElement(p.C,{className:"d-flex justify-content-center mb-3"},n.a.createElement(p.l,null,n.a.createElement("img",{src:Q.a,width:"300px",alt:"screenrecord",className:"figure-img img-fluid mx-auto d-block z-depth-1  "}),n.a.createElement("figcaption",{className:"figure-caption black-text text-center",style:{backgroundColor:"#fff"}},n.a.createElement("a",{href:"https://github.com/samaromm/color-slider.git",className:"mr-4",target:"blank"},"Github"),n.a.createElement("a",{href:"https://samaromm.github.io/color-slider/index.html",target:"blank"},"gh pages")))),n.a.createElement("div",{className:"border mb-3 p-2 ",style:{backgroundColor:"rgba(252,181,212,0.5)"}},n.a.createElement("h6",{className:"text-center "},"individual Project, HTML/CSS/Javascript",n.a.createElement("br",null),"Script for Changing colors of different parts of any website.")),n.a.createElement("p",{className:"border p-3 ",style:{backgroundColor:"rgba(252,181,212,0.5)"}},"The idea is providing a tool for the users to change the colors of different parts of the website as they please Using rgb range.",n.a.createElement("br",null),"There were a lot of times when I had to browse websites that their colors hurt my eyes or too difficult for me to see since I can't see the dark things well! this tool can help in such situations."),n.a.createElement("hr",null),n.a.createElement("p",{className:"black-text text-center",style:{backgroundColor:"#fff"}},"It was done with pure Java Script, the point was the script itself and not the design."))))},Z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"mb-3"},n.a.createElement(p.E,{hover:!0,onClick:this.props.toggleCollapse("collapse2"),className:" border border-dark forHover p-0 z-depth-1"},n.a.createElement(p.g,{style:{color:"#fff",fontWeight:"bold",margin:"0 auto"}},"Colors Slider"),n.a.createElement(p.r,{className:"flex-center",overlay:"white-strong"})),n.a.createElement(K,{collapseID:this.props.collapseID}))}}]),t}(n.a.Component),$=a(50),_=a.n($),ee=function(e){return n.a.createElement(p.m,{id:"collapse3",isOpen:e.collapseID},n.a.createElement(p.d,{className:"rgba-white-light white-text z-depth-1"},n.a.createElement("div",{className:"mb-0"},n.a.createElement(p.C,{className:"d-flex justify-content-center mb-3"},n.a.createElement(p.l,null,n.a.createElement("img",{src:_.a,width:"300px",alt:"screenrecord",className:"figure-img img-fluid mx-auto d-block z-depth-1  "}),n.a.createElement("figcaption",{className:"figure-caption black-text text-center",style:{backgroundColor:"#fff"}},n.a.createElement("a",{href:"github.com/samaromm/page-of-youth",className:"mr-4",target:"blank"},"Github"),n.a.createElement("a",{href:"page-of-youth.web.app",target:"blank"},"Demo")))),n.a.createElement("div",{className:"border mb-3 p-2 ",style:{backgroundColor:"rgba(88,183,115,0.5)"}},n.a.createElement("h6",{className:"text-center "},"Individual Project, React and Firebase",n.a.createElement("br",null),"A planner website where you can save your schedule for each day and enter a diary/note.")),n.a.createElement("p",{className:"border p-3 ",style:{backgroundColor:"rgba(88,183,115,0.5)"}},"Sign up to the website, confirm your email, and add tasks to each day. Click on the task to edit/ delete, and cick on your profile to edit/delete."),n.a.createElement("hr",null),n.a.createElement("p",{className:"black-text text-center",style:{backgroundColor:"#fff"}},"This application is done using firebase for auth and database, React for Front-End, and React Big Calendar"))))},te=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"mb-4"},n.a.createElement(p.E,{hover:!0,onClick:this.props.toggleCollapse("collapse3"),className:" border border-dark forHover p-0 z-depth-1"},n.a.createElement(p.g,{style:{color:"#fff",fontWeight:"bold",margin:"0 auto"}},"Page of Youth"),n.a.createElement(p.r,{className:"flex-center",overlay:"white-strong"})),n.a.createElement(ee,{collapseID:this.props.collapseID}))}}]),t}(n.a.Component),ae=a(51),le=a.n(ae),ne=a(52),re=a.n(ne),ce=a(53),se=a.n(ce),oe=function(){return n.a.createElement(p.n,null,n.a.createElement(p.h,{activeItem:1,length:3,showControls:!0,showIndicators:!0,className:"z-depth-1"},n.a.createElement(p.j,null,n.a.createElement(p.k,{itemId:"1"},n.a.createElement(p.E,null,n.a.createElement("img",{className:"d-block w-100",src:le.a,alt:"First slide"}),n.a.createElement(p.r,{overlay:"black-light"})),n.a.createElement(p.i,null,n.a.createElement("h3",{className:"h3-responsive"},"Preview"))),n.a.createElement(p.k,{itemId:"2"},n.a.createElement(p.E,null,n.a.createElement("img",{className:"d-block w-100",src:re.a,alt:"Second slide"}),n.a.createElement(p.r,{overlay:"black-strong"})),n.a.createElement(p.i,null,n.a.createElement("h3",{className:"h3-responsive"},"Preview"))),n.a.createElement(p.k,{itemId:"3"},n.a.createElement(p.E,null,n.a.createElement("img",{className:"d-block w-100",src:se.a,alt:"Third slide"}),n.a.createElement(p.r,{overlay:"black-slight"})),n.a.createElement(p.i,null,n.a.createElement("h3",{className:"h3-responsive"},"Preview"))))))},ie=function(e){function t(){var e,a;Object(s.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={collapseID:""},a.toggleCollapse=function(e){return function(){return a.setState((function(t){return{collapseID:t.collapseID!==e?e:""}}))}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement(p.n,null,n.a.createElement(p.c,{className:"card-image forProject"},n.a.createElement(p.d,{className:"py-4 px-4 border border-white scrollbar scrollbar-secondary",style:{maxHeight:"90vh"}},n.a.createElement(p.C,{className:"d-flex justify-content-center mb-3 "},n.a.createElement(p.l,{md:"5",sm:"4",className:"animated bounceInDown"},n.a.createElement(oe,null))),n.a.createElement(p.C,{className:"d-flex justify-content-center animated slideInRight"},n.a.createElement(p.l,{md:"10",xl:"8"},n.a.createElement(p.n,null,n.a.createElement(V,{collapseID:this.state.collapseID,toggleCollapse:this.toggleCollapse}),n.a.createElement(Z,{collapseID:this.state.collapseID,toggleCollapse:this.toggleCollapse}),n.a.createElement(te,{collapseID:this.state.collapseID,toggleCollapse:this.toggleCollapse})))))))}}]),t}(n.a.Component),me=function(e){return n.a.createElement(p.n,{className:"d-flex flex-column "},n.a.createElement(p.c,{className:"card-image forHome "},n.a.createElement("div",{className:" justify-content-center text-white text-center d-flex align-items-center py-5 px-4 rounded"},n.a.createElement("div",null,n.a.createElement("h6",{className:"purple-text "},n.a.createElement("strong",null," Spaceflight "),n.a.createElement(p.o,{icon:"fas fa-space-shuttle"})),n.a.createElement("h3",{className:"py-3 font-weight-bold"},n.a.createElement("strong",null,"Samar's Space")),n.a.createElement("p",{className:"pb-3"},"Want to join an adventure to my space?")))))},ue=function(){return n.a.createElement(p.n,{className:"footer-copyright text-center pb-5"},n.a.createElement(p.c,{className:"purple-gradient"},n.a.createElement(p.e,{className:"border border-white text-white"},"Made with ",n.a.createElement(p.o,{icon:"heart",className:"heart"}))))},de=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"bg"},n.a.createElement(d.a,{basename:"/"},n.a.createElement(x,null),n.a.createElement(h.a,{path:"/",exact:!0,component:me}),n.a.createElement(h.a,{path:"/about",exact:!0,component:C}),n.a.createElement(h.a,{path:"/contact",exact:!0,component:D}),n.a.createElement(h.a,{path:"/cv",exact:!0,component:M}),n.a.createElement(h.a,{path:"/projects",exact:!0,component:ie}),n.a.createElement(ue,null)))}}]),t}(n.a.Component);c.a.render(n.a.createElement(de,null),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.11f5e8b3.chunk.js.map