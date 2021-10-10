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

  var tl = useRef();
  var tl2 = useRef();

  // ScrollTrigger.defaults({ scroller: ".container" });
  
  // wait until DOM has been rendered
  // image 1

    
  useEffect(() => {

    // image 1
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
      y: "66.5vh",
      x: "39vw",
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
      y: "72.8vh",
      x: "10vw"
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
      y: "59.6vh",
      x: "56vw"
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
      y: "68.5vh",
      x: "10vw"
    })

    tl.current = gsap.fromTo(boardHeaderRef.current, { y: -200, autoAlpha: 0},{
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

  });

  useEffect(() => {

    // Mochi header
    tl2.current = gsap.fromTo("#mochi-bear-header", { y: -200, autoAlpha: 0},{
      scrollTrigger: {
        trigger: "#mochi-bear-header",
        toggleActions: "restart pause reverse pause",
        start: "bottom center",
        end: "+=600 center",
        scrub: true,
      },
      y: 0,
      autoAlpha: 1,
    })

    // Mochi on tracks
    tl2.current = gsap.fromTo("#mochi-on-tracks", { xPercent: -100, yPercent: -80}, {
      scrollTrigger: {
        trigger: "#mochi-bear-header",
        toggleActions: "restart pause reverse pause",
        start: "top center",
        end: "1000% bottom",
        scrub: true,
        duration: 3
      },
      xPercent: 100,
      yPercent: 100,
    
    })

    // Mochi header go
    tl2.current = gsap.fromTo("#mochi-bear-header", { y: 0, autoAlpha: 0},{
      scrollTrigger: {
        trigger: "#mochi-bear-header",
        toggleActions: "restart pause reverse pause",
        start: "center center",
        end: "+=600 center",
        scrub: true,
      },
      y: -200,
      autoAlpha: 1,
    })

    // Mochi section 2 head
    tl2.current = gsap.fromTo("#mochi-second-section", { scale: 0.3, autoAlpha:0, yPercent: 100}, {
      scrollTrigger: {
        trigger: "#mochi-bear-header",
        toggleActions: "restart pause reverse pause",
        start: "center+=100 center",
        scrub: true,
      },
      scale: 1.0,
      yPercent: -100,
      autoAlpha: 1,
    })

    // Mochi stars image
    tl2.current = gsap.fromTo("#mochi-stars", { scale: 0, autoAlpha:0, yPercent: 100}, {
      scrollTrigger: {
        trigger: "#mochi-bear-header-2",
        toggleActions: "restart pause reverse pause",
        start: "top center",
        scrub: true,
      },
      scale: 1.0,
      yPercent: 0,
      autoAlpha: 1,
    })

    // Bottom text
    tl2.current = gsap.fromTo("#mochi-second-section", { scale: 0.3, autoAlpha:0, yPercent: 100}, {
      scrollTrigger: {
        trigger: "#mochi-bear-header-2",
        toggleActions: "restart pause reverse pause",
        start: "center center",
        scrub: true,
        duration: 3,
      },
      ease: "bounce",
      scale: 1.0,
      yPercent: -100,
      autoAlpha: 1,
    })
  })

  return (
    <div className="App">
     
      <section id="cards">
        <header id="blocks-header">
         <h2>It starts with simple <span>wooden blocks</span></h2>,
        </header>

        <div className="mochi-image">
          <img id="image1" ref={image1} className="board-item" src='/Function_image_1.png' alt="" />
          <img id="image2" ref={image2} className="board-item" src='/Function_image_2.png' alt=""/>
        </div>

        <div className="mochi-image">
          <img id="image3" ref={image3} className="board-item" src='/Function_image_3.png' alt="" />
          <img id="image4" ref={image4} className="board-item" src='/Function_image_4.png' alt=""/>
        </div>

        <header id="board-header" ref={boardHeaderRef} >
          <h2><span>Put the block on the board.</span><br />You have written your first program</h2>
        </header>
        
        <div id="board-container" >
          <div className="board-overlay" ref={boardRef}></div>
          <img className="mochi-board board-item"  ref={boardRef} src='/Programming_board_image.png' alt=""/> 
        </div>
      </section>

      <section id="mochi-bear">
        <header>
          <h2 id="mochi-bear-header">Watch Mochi Bear execute the function in his Rover robot</h2> 
        </header>
        <img id="mochi-on-tracks" src='/Mochi_with_tracks.png' alt="" />

        <div id="mochi-second-section"> 
          <header>
            <h2 id="mochi-bear-header-2">Think it's too simple? You can write more programs with Mochi than there are stars in the Universe</h2>,
          </header>

          <img id="mochi-stars" src='/stars.png' alt="" />

          <h4>Don't be upset if your little one doesn't come to dinner</h4>
         </div>
      </section>

    </div>
  );
}
  
  export default App;
  