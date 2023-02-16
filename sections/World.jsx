'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute bottom-[40%] left-[21%] w-[170px] h-[110px] p-[6px] rounded-xl bg-[#5D6680]">
          <img src="theUpsideDown.png" alt="people" className="w-full h-full  rounded-xl " />
          <div  className="relative flex flex-row justify-between bottom-[30px] scale-95">
            <div className="relative flex flex-row">
              <img src="/Ellipse 39.png" alt="people" className="w-[20px] h-[20px] z-[10]" />

              <img src="/Ellipse 40.png" alt="people" className="w-[20px] h-[20px] z-[5] left-[-10px]" />

              <img src="Ellipse 41.png" alt="people" className="w-[20px] h-[20px] z-[0] left-[-20px]" />
            </div>
            <p className="text-[12px] text-white"> + 264 has joined</p>
          </div>

        </div>




      </motion.div>
    </motion.div>
  </section>
);

export default World;
