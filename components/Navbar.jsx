'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPadding} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className={`${styles.innerWidth} mx-auto flex justify-between`}>
          <img src="/search.png"
            alt="search"
            className=" w-[24px] h-[24px] object-contain"
            />
          <h2 className="text-[24px] font-extrabold leading-[30px] text-white">METAVERSUS</h2>
          <img
            src="/menu.png"
            alt="hamBurger Menu"
            className="w-[24px] h-[24px] object-contain "
             />
        </div>
  </motion.nav>
);

export default Navbar;