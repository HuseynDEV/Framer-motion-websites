
import './App.scss';
import { FaBehance, FaDribbble } from 'react-icons/fa';
import { IoMailOutline, IoChevronForwardCircle, IoStar } from 'react-icons/io5';
import { IconContext } from "react-icons";
import Cart from './component/Cart';
import { motion } from 'framer-motion';

let easeing = [0.6, -0.05, 0.01, 0.99];


const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
}

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6, ease: easeing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing
    }
  }
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1
    }
  }
}

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1
    }
  }
}

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition }
  }
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing
    }
  }
};
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing
    }
  }
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing
    }
  }
};




function App() {
  return (
    <motion.div initial='initial' animate='animate'>
      <motion.header variants={stagger}>
        <motion.div variants={header} className="logo_wrapper" >dev<span>amit</span></motion.div>
        <motion.div variants={stagger} className="menu_container" >
          <motion.span variants={header}>
            <IconContext.Provider value={{ color: "#000", size: "18px", className: "icons_container" }}>
              <div className="icon"><FaBehance /></div>
              <div className="icon"><FaDribbble /></div>
            </IconContext.Provider>
          </motion.span>
          <motion.span variants={header}>
            <IconContext.Provider value={{ color: "#000", size: "18px" }}>
              <div className="icon"><IoMailOutline /></div>
              hello@example.co
            </IconContext.Provider>
          </motion.span>
          <motion.span variants={header} className="menu" >
            <span></span>
            <span></span>
            <span></span>
          </motion.span>
        </motion.div>
      </motion.header>

      <motion.div className="content_wrapper"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .3, ease: easeing }} >
        <div className="left_content_wrapper">

          <motion.h2>
            <motion.span variants={firstName} initial="initial" animate="animate" className='first'>
              <motion.span variants={letter}>D</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>s</motion.span>
              <motion.span variants={letter}>i</motion.span>
              <motion.span variants={letter}>g</motion.span>
              <motion.span variants={letter}>n</motion.span>
              <motion.span variants={letter} className='second'>f</motion.span>
              <motion.span variants={letter}>o</motion.span>
              <motion.span variants={letter}>c</motion.span>
              <motion.span variants={letter}>u</motion.span>
              <motion.span variants={letter}>s</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>d</motion.span>
            </motion.span>

            <motion.span variants={firstName} initial="initial" animate="animate" className='last'>
              <motion.span variants={letter}>S</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>u</motion.span>
              <motion.span variants={letter} >p</motion.span>
              <motion.span variants={letter} className='second'>o</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter} className='second'>s</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>u</motion.span>
            </motion.span>

          </motion.h2>

          <motion.p variants={fadeInUp} >When, while lovely valley teems with vapor around meand <br />meridian sun strikes the upper impenetrable.</motion.p>

          <motion.div className="btn_group"  variants={stagger}>
            <motion.div className="btn btn_primary"  variants={btnGroup}>Hire Me
              <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                <IoChevronForwardCircle />
              </IconContext.Provider>
            </motion.div>
            <motion.div className="btn btn_secondary" variants={btnGroup}  >Live Chat</motion.div>
          </motion.div>
          <motion.div className="review_container"  variants={stagger}>
            <motion.p variants={star} className="total_review" >64+ Reviews</motion.p>
            <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
              <motion.span variants={star} ><IoStar /></motion.span>
              <motion.span variants={star} ><IoStar /></motion.span>
              <motion.span variants={star} ><IoStar /></motion.span>
              <motion.span variants={star} ><IoStar /></motion.span>
              <motion.span variants={star} ><IoStar /></motion.span>

            </IconContext.Provider>
            <p className="more_review" >More then 50+ people taking services.</p>
          </motion.div>
        </div>

        <motion.div className="right_content_wrapper">
          <motion.img initial={{x:200, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.4}} src='https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3ZnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60' alt="bg" initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: 0.8 }} />
        </motion.div>
      </motion.div>

      <Cart />




    </motion.div>
  );
}

export default App;