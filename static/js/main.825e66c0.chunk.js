(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{47:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},53:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=(a(52),a(53),a(54),a(55),a(8)),s=a(5),i=a(9),m=a(10),u=a(11),d=a(44),p=a(93),h=a(94),E=a(99),f=a(95),v=a(96),g=a(18),y=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),o=a[0],c=a[1],l=function(){c(!o)},s=function(){o&&l()};return document.getElementsByClassName("nav-link").onClick=function(e){e.preventDefault()},r.a.createElement(p.a,{id:"navbarr",light:!0,expand:"md",fixed:"top",style:{margin:"0",backgroundColor:"rgba(251, 175, 65, 0.8)"}},r.a.createElement(h.a,{onClick:l}),r.a.createElement(E.a,{isOpen:o,navbar:!0},r.a.createElement(f.a,{className:"mr-auto",navbar:!0},r.a.createElement(v.a,{className:"NavItemStyle"},r.a.createElement(g.Link,{className:"navbar-font",onClick:s,activeClass:"active",to:"homecomponent",spy:!0,smooth:!0,duration:500,style:{cursor:"pointer",color:"#642c8f"}},"Home")),r.a.createElement(v.a,{className:"NavItemStyle"},r.a.createElement(g.Link,{className:"navbar-font",onClick:s,activeClass:"active",to:"aboutcomponent",spy:!0,smooth:!0,duration:500,style:{cursor:"pointer",color:"#642c8f"}},"About")),r.a.createElement(v.a,{className:"NavItemStyle"},r.a.createElement(g.Link,{className:"navbar-font",onClick:s,activeClass:"active",to:"faqcomponent",spy:!0,smooth:!0,duration:500,style:{cursor:"pointer",color:"#642c8f"}},"FAQ")),r.a.createElement(v.a,{className:"NavItemStyle"},r.a.createElement(g.Link,{className:"navbar-font",onClick:s,activeClass:"active",to:"sponsorshipcomponent",spy:!0,smooth:!0,duration:500,style:{cursor:"pointer",color:"#642c8f"}},"Sponsorship")))))},b=a(98),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex",style:{overflow:"auto",minHeight:"100vh"}},r.a.createElement("img",{src:"./../assets/logo.png",alt:"Logo",className:"logo2"}),r.a.createElement("h1",null,"SF Hacks"),r.a.createElement("p",{className:"place"},"San Francisco State University",r.a.createElement("br",null)," San Francisco, California"),r.a.createElement("p",{className:"date"},"March 28 - 29",r.a.createElement("sup",null,"th"),", 2020"),r.a.createElement("p",{className:"place"},"Application deadline: Feb 21",r.a.createElement("sup",null,"st")," 2020"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4",style:{marginTop:"10px",whiteSpace:"nowrap"}},r.a.createElement("form",{action:"https://sfhacks2019.typeform.com/to/QU2IEE"},r.a.createElement(b.a,{variant:"contained",type:"submit",value:"Send",style:{background:"#c1aad2"}},"Participant"))),r.a.createElement("div",{className:"col-sm-4",style:{marginTop:"10px"}},r.a.createElement("form",{action:"https://sfhacks2019.typeform.com/to/C8yzNp"},r.a.createElement(b.a,{variant:"contained",type:"submit",value:"Send",style:{background:"#c1aad2"}},"Mentors"))),r.a.createElement("div",{className:"col-sm-4",style:{marginTop:"10px"}},r.a.createElement("form",{action:"https://sfhacks2019.typeform.com/to/FD63DK"},r.a.createElement(b.a,{variant:"contained",type:"submit",value:"Send",style:{background:"#c1aad2"}},"Volunteers"))))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){window.innerWidth<=500&&a.setState({abouttext:"SF Hacks is San Francisco's largest collegiate hackathon, where over 500 collegiate engineers, designers and developers are given the opportunity to create, learn and experiment, and turn cutting-edge ideas into reality."})},a.state={abouttext:" SF Hacks is an entirely student run, student driven hackathon that\n  hosts over 500 of California\u2019s most talented collegiate engineers,\n  designers, and developers in a 24-hour hackathon. At SF Hacks,\n  students are given the oppurtunity to create, learn, and\n  experiment. Students are encouraged to create websites, mobile\n  apps, games, and more. This is where we will turn cutting-edge\n  ideas into reality."},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"team-image-bg body-color col "},r.a.createElement("div",{className:"flex",style:{padding:"0.5vw",height:"100vh",minHeight:"400px"}},r.a.createElement("article",{className:"about"},r.a.createElement("h2",{className:"h2"}," Who Are We?"),r.a.createElement("div",{className:"aboutp"},this.state.abouttext))))}}]),t}(n.Component),k=a(100),O=a(97),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-12 col-m-6 col-sm-6",style:{marginBottom:"5vh"}},r.a.createElement(k.a,{style:{backgroundColor:"rgba(253,253,253,0.2)"}},r.a.createElement(O.a,null,r.a.createElement("div",{className:"ques"},this.props.question),r.a.createElement("div",{className:"faqtext"},this.props.text))))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row align-items-center",style:{marginTop:"30px",overflow:"auto",minHeight:"100vh",justifyContent:"center",alignContent:"center"}},r.a.createElement("div",{style:{marginBottom:"20px",marginTop:"20px"}},r.a.createElement("h1",{className:"h1",style:{textAlign:"center"}},"FAQ")),r.a.createElement("div",{style:{justifyContent:"center",alignContent:"center",padding:"25px",margin:"25px"}},r.a.createElement("div",{className:"row"},r.a.createElement(S,{question:"WHAT IS A HACKATHON",text:"A hackathon is where you come to learn and bring your creative ideas to life. Hundreds of hackers from across the world will gather and build something they're passionate about."}),r.a.createElement(S,{question:"WHO CAN ATTEND",text:"We care about diversity, accessibility, and believe our differences make us better as a whole. Whether you\u2019re a STEM major or not we want you to be here! Be prepared to learn, brainstorm, and build amazing software/hardware."}),r.a.createElement(S,{question:"HOW MUCH DOES IT COST",text:"SF Hacks is free for all admitted participants. We\u2019ll have WiFi, food, workshops, and awesome swag during the entire 24 hours you\u2019ll be with us."}),r.a.createElement(S,{question:"WHAT IF I DON'T HAVE A TEAM",text:"Hackathons are all about teamwork! If you don\u2019t have a teammate, we\u2019ll hold a team-formation workshop where you can meet your new best friend. Four people per team is the limit."}),r.a.createElement(S,{question:"WHAT IS MAJOR LEAGUE HACKING",text:"Major League Hacking (MLH) is the official student hackathon league. SF Hacks is an official MLH Member Event, so that means we follow the MLH Code Of Conduct."}),r.a.createElement(S,{question:" WILL THERE BE ANY TRAVEL REIMBURSEMENT FOR LONG DISTANCE ATTENDEES?",text:"Unfortunately we will not be offering any travel reimbursement for SF Hacks 2020."}))))}}]),t}(n.Component),x=a(43),C=a(21),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-12 align-self-center",style:{overflow:"auto",marginTop:"20px"}},r.a.createElement("div",{className:"flex",style:{paddingTop:"5px",paddingBottom:"10px",minHeight:"100vh"}},r.a.createElement("div",{style:{marginBottom:"20px",marginTop:"20px"}},r.a.createElement("h1",{className:"h1",style:{textAlign:"center"}},"2019 SPONSORS")),r.a.createElement("div",{style:{objectFit:"contain"}},r.a.createElement("img",{className:"sponsors",src:"./../assets/Sponsors.png",alt:"2019 SPONSORS"})),r.a.createElement("form",{action:"mailto:sfhacksteam@gmail.com",method:"GET"},r.a.createElement(b.a,{variant:"contained",type:"submit",value:"Send",style:{background:"#c1aad2"}},"Interested in sponsoring?",r.a.createElement(C.a,{className:"icon-margin footericons",icon:x.a,size:"lg"})))))}}]),t}(n.Component),H=a(28),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"row align-items-center",style:{margin:"5px",padding:"10px",minHeight:"150px",height:"auto",marginBottom:"0"}},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"row align-items-center ",style:{padding:"0"}},r.a.createElement(g.Link,{activeClass:"active",to:"homecomponent",spy:!0,smooth:!0,duration:500,style:{cursor:"pointer",width:"15%",minWidth:"50px"}},r.a.createElement("img",{src:"./../assets/logo.png",alt:"Logo",className:"logofooter"}))),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement(g.Link,{className:"sfhackstext",activeClass:"active",to:"homecomponent",spy:!0,smooth:!0,duration:500,style:{cursor:"pointer"}},"SF Hacks")),r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("a",{href:"https://facebook.com/sfhacks"},r.a.createElement(C.a,{className:"icon-margin footericons",icon:H.a,size:"lg"})),r.a.createElement("a",{href:"https://twitter.com/SF_hacks"},r.a.createElement(C.a,{className:"icon-margin footericons",icon:H.c,size:"lg"})),r.a.createElement("a",{href:"https://instagram.com/sf.hacks",id:"insta"},r.a.createElement(C.a,{className:"icon-margin footericons",icon:H.b,size:"lg"})))),r.a.createElement("div",{className:"col-9 align-self-center",style:{textAlign:"center"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-9 align-self-center"},"San Francisco State University",r.a.createElement("br",null)," 1600 Holloway Avenue, ",r.a.createElement("br",null),"San Francisco, CA 94132"),r.a.createElement("div",{className:"col-sm-3 align-self-center"},r.a.createElement("span",{style:{fontWeight:"700",fontSize:"19px"}},"Contact us"),r.a.createElement("br",null),"Feel free to reach out to us at"," ",r.a.createElement("a",{href:"mailto:sfhacksteam@gmail.com",style:{color:"#642c8f"}},"sfhacksteam@gmail.com")," ","for any further questions or quarries")))))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"body-color"},r.a.createElement(y,null),r.a.createElement("div",{className:"row"},r.a.createElement("a",{href:"/#",id:"homecomponent"},null),r.a.createElement(N,null)),r.a.createElement("div",{className:"row"},r.a.createElement("a",{href:"/#",id:"aboutcomponent"},null),r.a.createElement(w,null)),r.a.createElement("div",{className:"row"},r.a.createElement("a",{href:"/#",id:"faqcomponent"},null),r.a.createElement(j,null)),r.a.createElement("div",{className:"row align-items-start"},r.a.createElement("a",{href:"/#",id:"sponsorshipcomponent"},null),r.a.createElement(A,null)),r.a.createElement(T,null))}}]),t}(n.Component);var L=function(){return r.a.createElement("div",{style:{overflow:"hidden"}},r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.825e66c0.chunk.js.map