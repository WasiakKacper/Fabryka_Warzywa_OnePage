import { motion } from "motion/react";
import { itemVariants, backgroundVariants, listVariants } from "./Vartiants";

type MenuProps = {
  state: boolean;
};

type ListItemProps = {
  name: string;
};

const ListItem: React.FC<ListItemProps> = ({ name }) => {
  return (
    <motion.li
      variants={itemVariants}
      whileTap={{ scale: 0.95 }}
      className="relative w-fit cursor-pointer py-1 
        before:content-[''] before:absolute before:left-0 before:bottom-0 
        before:h-1 before:w-0 before:bg-white 
        before:transition-all before:duration-300 hover:before:w-full"
    >
      {name}
    </motion.li>
  );
};

const Menu: React.FC<MenuProps> = ({ state }) => {
  return (
    <motion.section
      variants={backgroundVariants}
      initial={false}
      animate={state ? "open" : "closed"}
      className="fixed top-0 left-0 w-full h-full bg-gray-300/20 backdrop-blur-xs text-white lg:hidden"
    >
      <motion.ul
        variants={listVariants}
        initial={false}
        animate={state ? "open" : "closed"}
        className={`flex flex-col justify-center *:cursor-pointer w-full h-full text-3xl font-bold p-10 lg:hidden gap-5 z-40`}
      >
        {["HOME", "O NAS", "OFERTA", "KONTAKT"].map((item) => (
          <ListItem key={item} name={item} />
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default Menu;
