import { useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // store a reference to items
  const boardRef = useRef();
  const boardHeaderRef = useRef();

  var tl = useRef();
  
  // wait until DOM has been rendered
    
  useEffect(() => {

    // image 1
    tl.current = gsap.fromTo("#image1", { scale: 2.5 }, {
      scrollTrigger: {
        trigger: boardHeaderRef.current,
        endTrigger: boardRef.current,
        toggleActions: "restart complete reverse complete",
        // start: "top center",
        end: "35% center",
        scrub: 2,
      },
      scale: 1.0,
      y: "46.8vh",
      x: "24.6vw",
    })
 

    // image 2
    tl.current = gsap.fromTo("#image2", { scale: 2.5 }, {
      scrollTrigger: {
        trigger: boardHeaderRef.current,
        endTrigger: boardRef.current,
        toggleActions: "restart complete reverse complete",
        // start: "top center",
        end: "35% center",
        scrub: 2,
      },
      scale: 1.0,
      y: "53.8vh",
      x: "25vw"
    })


    // image 3
    tl.current = gsap.fromTo("#image3", { scale: 2.5 }, {
      scrollTrigger: {
        trigger: boardHeaderRef.current,
        endTrigger: boardRef.current,
        toggleActions: "restart complete reverse complete",
        // start: "top center",
        end: "35% center",
        scrub: 2,
      },
      scale: 1.0,
      y: "55vh",
      x: "42vw"
    })


    //image 4
    tl.current = gsap.fromTo("#image4", { scale: 2.5 }, {
      scrollTrigger: {
        trigger: boardHeaderRef.current,
        endTrigger: boardRef.current,
        toggleActions: "restart complete reverse complete",
        // start: "top center",
        end: "35% center",
        scrub: 2,
      },
      scale: 1.0,
      y: "64.5vh",
      x: "24vw"
    })

    tl.current = gsap.fromTo(boardHeaderRef.current, {y: -200, autoAlpha: 0},{
      scrollTrigger: {
        trigger: ".mochi-board",
        toggleActions: "restart complete reverse complete",
        start: "15% center",
        end: "35% center",
        scrub: 2,
      },
     y: 0,
      autoAlpha: 1
    })

    // // zoom
    // tl.current = gsap.from(boardRef.current, {
    //   scrollTrigger: {
    //     trigger: boardRef.current,
    //     toggleActions: "restart complete reverse complete",
    //     start: "bottom bottom",
    //     // end: "+=220 center",
    //     pin: true,
    //     scrub: 3,
    //   },
    //   duration: 4,
    //   scale: 1.2
    // })

    // // Hide header
    // tl.current = gsap.fromTo(boardHeaderRef.current, {y: -200, autoAlpha: 0}, {
    //   scrollTrigger: {
    //     trigger: boardRef.current,
    //     toggleActions: "restart complete reverse complete",
    //     start: "bottom bottom",
    //     end: "+=220 center",
    //     pin: true,
    //     scrub: 2,
    //     markers: true
    //   },
    //   css: { display: "block"},
    //   y: 0,
    //   autoAlpha: 1
    // })

    // // Show next header
    // tl.current = gsap.fromTo(boardRef.current, { scale: 1},{
    //   scrollTrigger: {
    //     trigger: boardRef.current,
    //     toggleActions: "restart complete reverse complete",
    //     start: "bottom bottom",
    //     end: "+=220 center",
    //     pin: true,
    //     scrub: 2,
    //   },
    //   scale: 1.3
    // })

    // Mochi header
    tl.current = gsap.fromTo("#mochi-bear-header", { y: -200, autoAlpha: 0},{
      scrollTrigger: {
        trigger: "#mochi-bear-header",
        toggleActions: "restart pause reverse pause",
        // start: "bottom center",
        // end: "+=600 center",
        scrub: 1,
      },
      y: 0,
      autoAlpha: 1,
    })

    // Mochi on tracks
    tl.current = gsap.fromTo("#mochi-on-tracks", { xPercent: -95, yPercent: -70}, {
      scrollTrigger: {
        trigger: "#mochi-on-tracks",
        toggleActions: "restart pause reverse pause",
        start: "top 10%",
        scrub: 2,
      },
      xPercent: 100,
      yPercent: 100,
    })

    // Mochi header go
    tl.current = gsap.fromTo("#mochi-bear-header", { y: 0, autoAlpha: 1},{
      scrollTrigger: {
        trigger: "#mochi-bear-header",
        toggleActions: "restart pause reverse pause",
        start: "top 15%",
        end: "+=300 center",
        scrub: true,
      },
      y: -200,
      autoAlpha: 0,
    })

    // Mochi section 2
    tl.current = gsap.fromTo("#mochi-second-section", { scale: 0.3, autoAlpha:0, yPercent: 100}, {
      scrollTrigger: {
        trigger: "#mochi-bear-header",
        toggleActions: "restart pause reverse pause",
        // start: "center+=100 center",
        scrub: 1,
      },
      scale: 1.0,
      yPercent: -100,
      autoAlpha: 1,
    })

    // Mochi stars image
    tl.current = gsap.fromTo("#mochi-stars", { scale: 0, autoAlpha:0, yPercent: 100}, {
      scrollTrigger: {
        trigger: "#mochi-bear-header-2",
        toggleActions: "restart pause reverse pause",
        start: "top center",
        scrub: 1,
        markers: true,
      },
      scale: 1.0,
      yPercent: 0,
      autoAlpha: 1,
    })
  })

  return (
    <div className="App">
      <section>
        <header id="blocks-header">
          <h2>Please <span>scroll</span></h2>
        </header>
      </section>
      <section id="cards">
        <header id="blocks-header">
         <h2>It starts with simple <span>wooden blocks</span></h2>
        </header>

        <div className="mochi-image">
          <img id="image1" className="board-item" src='/Function_image_1.png' alt="" />
          <img id="image2" className="board-item" src='/Function_image_2.png' alt=""/>
        </div>

        <div className="mochi-image">
          <img id="image3" className="board-item" src='/Function_image_3.png' alt="" />
          <img id="image4" className="board-item" src='/Function_image_4.png' alt=""/>
        </div>

        <header id="board-header" ref={boardHeaderRef} >
          <h2><span>Put the block on the board.</span><br />You have written your first program</h2>
        </header>

         <header id="please-go" >
          <h2>Press <span>"Please Go"</span> and..</h2>
        </header>
        
        <div id="board-container" >
          <div id="board-overlay" ref={boardRef}></div>
          {/* <div id="board-circle" ref={boardRef}></div> */}
          <img className="mochi-board board-item"  ref={boardRef} src='/Programming_board_image.png' alt=""/> 
        </div>
      </section>

      <section id="mochi-bear">
        <header>
          <h2 id="mochi-bear-header">Watch Mochi Bear execute the function in his Rover robot</h2> 
        </header>
        <img id="mochi-on-tracks" src='/Mochi_with_tracks.png' alt="" />

        <div id="mochi-second-section"> 
         
            <h2 id="mochi-bear-header-2">Think it's too simple? You can write more programs with Mochi than there are stars in the Universe</h2>,
          

          <img id="mochi-stars" src='/stars.png' alt="" />

          <h4>Don't be upset if your little one doesn't come to dinner</h4>
        </div>
      </section>

    </div>
  );
}
  
  export default App;
  