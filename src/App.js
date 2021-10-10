import { useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // store a reference to items
  const image1 = useRef();
  const image2 = useRef();
  const image3 = useRef();
  const image4 = useRef();
  const boardRef = useRef();
  const boardHeaderRef = useRef();

  var tl = useRef();

  ScrollTrigger.defaults({ scroller: ".container" });
  
  // wait until DOM has been rendered
  // image 1
  useEffect(() => {
    tl.current = gsap.fromTo(image1.current, { scale: 2.5 }, {
      scrollTrigger: {
        trigger: boardHeaderRef.current,
        endTrigger: boardRef.current,
        toggleActions: "restart complete reverse complete",
        start: "top center",
        end: "50% center",
        scrub: true,
      },
      scale: 1.0,
      y: "69.2vh",
      x: "39.9vw",
    })
 

    // image 2

    tl.current = gsap.fromTo(image2.current, { scale: 2.5 }, {
      scrollTrigger: {
        trigger: boardHeaderRef.current,
        endTrigger: boardRef.current,
        toggleActions: "restart complete reverse complete",
        start: "top center",
        end: "50% center",
        scrub: true,
      },
      scale: 1.0,
      y: "75.8vh",
      x: "11vw"
    })


    // image 3

    tl.current = gsap.fromTo(image3.current, { scale: 2.5 }, {
      scrollTrigger: {
        trigger: boardHeaderRef.current,
        endTrigger: boardRef.current,
        toggleActions: "restart complete reverse complete",
        start: "top center",
        end: "50% center",
        scrub: true,
      },
      scale: 1.0,
      y: "61.9vh",
      x: "57vw"
    })


    //image 4

    tl.current = gsap.fromTo(image4.current, { scale: 2.5 }, {
      scrollTrigger: {
        trigger: boardHeaderRef.current,
        endTrigger: boardRef.current,
        toggleActions: "restart complete reverse complete",
        start: "top center",
        end: "50% center",
        scrub: true,
      },
      scale: 1.0,
      y: "71.5vh",
      x: "10vw"
    })
  });

  useEffect(() => {
    gsap.fromTo(boardHeaderRef.current, { y: -200, autoAlpha: 0},{
      scrollTrigger: {
        trigger: boardRef.current,
        toggleActions: "restart complete reverse complete",
        start: "top center",
        end: "+=120 center",
        scrub: true,
      },
     y: 0,
      autoAlpha: 1
    })
  })

  // useEffect(() => {
  //   gsap.to(boardRef.current ,{
  //     scrollTrigger: {
  //       trigger: image4.current,
  //       toggleActions: "restart pause reverse pause",
  //       markers: true,
  //       start: "bottom center",
  //       end: "bottom center",
  //       scrub: true,
  //     },
  //     scale: 1.2,
  //   })
  // })

  // Mochi bear header
  useEffect(() => {
    gsap.fromTo("#mochi-bear-header", { y: -200,autoAlpha: 0},{
      scrollTrigger: {
        trigger: "#mochi-bear img",
        toggleActions: "restart complete reverse complete",
        start: "top center",
        end: "+=120 center",
        scrub: true,
      },
      y: 0,
      autoAlpha: 1,
    })
  })

  // Mochi bear 
  useEffect(() => {
    gsap.fromTo(".mochi-bear", { x: -1430, autoAlpha: 0},{
      scrollTrigger: {
        trigger: "#mochi-bear h1",
        xPercent: -80,
        toggleActions: "restart complete reverse complete",
        start: "top center",
        end: "+=120 center",
        scrub: true,
        pin: true
      },
     x: 0,
      autoAlpha: 1
    })
  })



  return (
    <div className="App container">
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
     
      <section id="cards">
        <header id="blocks-header">
         <h1>It starts with simple <span>wooden blocks</span></h1>,
        </header>

        <div className="mochi-image">
          <img id="image1" ref={image1} className="board-item" src='/Function_image_1.png' alt="" />
          <img id="image2" ref={image2} className="board-item" src='/Function_image_2.png' alt=""/>
        </div>

        <div className="mochi-image">
          <img id="image3" ref={image3} className="board-item" src='/Function_image_3.png' alt="" />
          <img id="image4" ref={image4} className="board-item" src='/Function_image_4.png' alt=""/>
        </div>
      </section>

      <section id="board">
          <header id="board-header" ref={boardHeaderRef} >
            <h1><span>Put the block on the board.</span><br />You have written your first program</h1>,
        </header>
        
        <div id="board-container" >
          <div className="board-overlay" ref={boardRef}></div>
          <img className="mochi-board board-item"  ref={boardRef} src='/Programming_board_image.png' alt=""/> 
        </div>
      </section>

      <section id="mochi-bear">
        <header>
          <h1 id="mochi-bear-header">Watch Mochi Bear execute the function in his Rover robot</h1>,
        </header>
        <img className="mochi-bear" src='/Mochi_with_tracks.png' alt="" />

        <header>
          <h1 id="mochi-bear-header-2">Think it's too simple?You can write more programs with Mochi than there are stars in the Universe</h1>,
        </header>

         <img className="mochi-start" src='/stars.png' alt="" />
      </section>

    </div>
    );
  }
  
  export default App;
  