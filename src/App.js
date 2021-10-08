import { useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

  var tl = gsap.timeline();
  
  // wait until DOM has been rendered
  useEffect(() => {
    tl.fromTo(image1.current, {scale: 2.5}, {
      scrollTrigger: {
        trigger: boardHeaderRef.current,
         endTrigger: boardRef.current,
        toggleActions: "restart pause reverse pause",
        start: "top center",
        end: "+=400",
        scrub: true,
      },
      scale: 1.0,
      x: "39vw",
      y: "68.7vh",
      duration: 2,
    })
  });

  useEffect(() => {
    tl.fromTo(image2.current, { scale: 2.5 }, {
       scrollTrigger: {
        trigger: boardHeaderRef.current,
          endTrigger: boardRef.current,
        toggleActions: "restart pause reverse pause",
        start: "top center",
        end: "+=400",
        scrub: true,
      },
      scale: 1.0,
      y: "75.8vh",
      x: "11vw"
     })
  });

  useEffect(() => {
    tl.fromTo(image3.current, { scale: 2.5 }, {
       scrollTrigger: {
        trigger: boardHeaderRef.current,
          endTrigger: boardRef.current,
        toggleActions: "restart pause reverse pause",
        start: "top center",
        end: "+=400",
        scrub: true,
      },
      scale: 1.0,
      y: "61.9vh",
      x: "57vw"
    })
  });

  useEffect(() => {
    tl.fromTo(image4.current,  { scale: 2.5 }, {
      scrollTrigger: {
        trigger: boardHeaderRef.current,
        endTrigger: boardRef.current,
        toggleActions: "restart pause reverse pause",
        start: "top center",
        end: "+=400",
        scrub: true,
      },
      scale: 1.0,
      y: "71.5vh",
      x: "10vw"
    })
  })

  useEffect(() => {
    gsap.fromTo(boardHeaderRef.current, { opacity: 0 }, {
      scrollTrigger: {
        trigger: boardRef.current,
        toggleActions: "restart pause reverse pause",
        start: "top center",
        end: "+=120 center",
        scrub: true,
      },
      opacity: 1,
    })
  })


  // useEffect(() => {
  //   gsap.fromTo("#board", { backgroundSize:'100%', }, {
  //     scrollTrigger: {
  //       trigger: boardHeaderRef.current,
  //       toggleActions: "restart pause reverse pause",
  //       markers: true,
  //       start: "top center",
  //       end: "bottom center",
  //       scrub: true,
  //     },
  //     backgroundSize:'120%',
  //   })
  // })


  return (
    <div className="App">
      <header id="blocks-header">
         <h1>It starts with simple <span>wooden blocks</span></h1>,
      </header>
      <section id="cards">
        <div className="mochi-image">
          <img id="image1" ref={image1} src='/Function_image_1.png' alt="" />
          <img id="image2" ref={image2} src='/Function_image_2.png' alt=""/>
        </div>
        <div className="mochi-image">
          
        </div>
        <div className="mochi-image">
          <img id="image3" ref={image3} src='/Function_image_3.png' alt="" />
          <img id="image4" ref={image4} src='/Function_image_4.png' alt=""/>
        </div>
        <div className="mochi-image">
   
        </div>
      </section>
      <section id="board">
          <header id="board-header" ref={boardHeaderRef} >
            <h1><span>Put the block on the board.</span><br/>You have written your first program</h1>,
          </header>
          <img className="mochi-board" ref={boardRef}  src='/Programming_board_image.png' alt=""/>
      </section>
    </div>
    );
  }
  
  export default App;
  