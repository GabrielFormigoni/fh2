import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import { team } from "../constants";

const Team = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} bg-black-100 bg-opacity-80 w-full flex flex-col`}
    >
      <span className='hash-span' id="team">
          &nbsp;
      </span>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Quem somos nós?</p>
        <h2 className={styles.sectionHeadText}>Time.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[14px] md:text-[17px] max-w-3xl leading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          reprehenderit, dolorum cumque aliquam quaerat similique repellendus
          laborum assumenda maiores enim odit quisquam, mollitia obcaecati
          voluptate eos ipsam voluptatibus non adipisci. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Fugiat ipsum doloremque vel
          corrupti magnam quaerat earum.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {team.map((item, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="bg-primary max-w-[300px] rounded-md"
          >
            <img
              src={item.image}
              alt="image"
              className="w-[300px] h-fit object-contain rounded-t-md"
            />
            <div className="px-8 pb-10 pt-6">
              <p className="text-white text-[30px] font-semibold">
                {item.name}
              </p>
              <p className="text-secondary mt-6">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Team;
