// import './App.css';
import './App.scss'
import Chair from './chair.png'
import { motion } from 'framer-motion'


const easing = [0.6, -0.05, 0.01, 0.99]
const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerDirection: 1,
      staggerChildren: 0.2
    }
  }
}


const fadeInUp = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: .3
    }
  }
}


const header = {
  initial: {
    y: -200
  },
  animate: {
    y: 0,
    transition: {
      duration: .2, ...transition
    }
  }
}




const h3 = {
  initial: {
    top: '-20%',
    opacity: 0,
    transition: { duration: 0.05, ease: easing }
  },
  animate: {
    top: '50%',
    opacity: .2,
    transition: {
      delay: 1.2,
      duration: 0.6,
      ease: easing
    }
  }
}


const dots = {
  initial: {
    x: -400
  },
  animate: {
    x: 0,
    transition: {
      duration: .2, ...transition
    }
  }
}



const letter = {
  initial: {
    opacity: 0,
    x: -400
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1, ...transition
    }
  }
}

const chair = {
  initial: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.2, duration: .2, ...transition }
  }
}


const search = {
  initial: {
    opacity: 0,
    x: 100
  },
  animate: {
    opacity: 1,
    x: 0,
    transitio: { delay: 1.3, duration: .2, ...transition }
  }
}


const bottom = {
  initial: {
    opacity: 0,
    x: 160
  },
  animate: {
    opacity: 1,
    x: 0,
    transitio: { delay: 1.3, duration: .2, ...transition },
  }
}


function App() {




  return (
    <motion.div className="container"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "100vh" }}
      transition={{ duration: 1, ease: easing }}>
      <motion.div className="wrapper" >
        <motion.div className="pos_abs top_nav" variants={stagger} initial='initial' animate='animate'>
          <motion.span variants={header} className="logo">DA</motion.span>
          <motion.span variants={header}><i class="fa-solid fa-bars"></i></motion.span>
          <motion.span variants={header}><i class="fa-solid fa-arrow-down"></i></motion.span>
        </motion.div>
        <motion.div className="pos_abs bottom_nav" variants={stagger} initial='initial' animate='animate'>
          <motion.span className='nav_arrow' variants={bottom}>
            <i class="fa-solid fa-left-long"></i>
            <i class="fa-solid fa-right-long"></i>
          </motion.span>
          <motion.span variants={bottom}>
            <i class="fa-brands fa-facebook"></i>
          </motion.span>
          <motion.span variants={bottom}>   <i class="fa-regular fa-user"></i></motion.span>
        </motion.div>
        <motion.div className="content_left" variants={stagger} initial='initial' animate='animate'>
          <motion.h3 variants={h3}  >03</motion.h3 >
          <motion.div className="dots" variants={stagger} initial='initial' animate='animate'>
            <motion.span variants={dots}></motion.span>
            <motion.span variants={dots}></motion.span>
            <motion.span variants={dots} className='active'></motion.span>
            <motion.span variants={dots}></motion.span>
            <motion.span variants={dots}></motion.span>
          </motion.div>
          <motion.h2 variants={stagger}>
            <motion.span variants={letter}>PURE</motion.span>
            <motion.span variants={letter}>COTTON</motion.span>
            <motion.span variants={letter}>CHAIR</motion.span>
          </motion.h2>
          <motion.p variants={fadeInUp}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, exercitationem.</motion.p>
        </motion.div>
        <motion.div className="image_container" variants={stagger} initial='initial' animate='animate' >
          <motion.img variants={chair} src={Chair} alt="" />
          <motion.div className="search" variants={stagger} initial='initial' animate='animate'>
            <motion.i variants={search} class="fa-solid fa-magnifying-glass"></motion.i>
            <motion.span variants={search}>Seach</motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div >
  );
}

export default App;
