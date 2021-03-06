import React from "react";
import Image from "next/image";
import BeenhereTwoToneIcon from "@material-ui/icons/BeenhereTwoTone";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useEffect, useState } from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.4,
      DelayNode: 1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Top() {
  const [state, setState] = useState(0);
  const [moving, setmoving] = useState(0);
  const [styleobj, setstyleobj] = useState({});
  const [styleobj1, setstyleobj1] = useState({});
  const [styleobj2, setstyleobj2] = useState({});
  const [styleobj3, setstyleobj3] = useState({});
  const [styleobj4, setstyleobj4] = useState({});
  const [styleobj5, setstyleobj5] = useState({});
  const [styleobj6, setstyleobj6] = useState({});
  const [styleobj7, setstyleobj7] = useState({});
  const [styleobj8, setstyleobj8] = useState({});
  const [styleobj9, setstyleobj9] = useState({});

  useEffect(() => {
    setTimeout(() => {
      if (state < 9) {
        
        if (state == 0) {
          setstyleobj({ background: "black" });
          setstyleobj9({ background: "transparent" });
        }
        if (state == 1) {
          setstyleobj({ background: "transparent" });
          setstyleobj1({ background: "black" });
        }
        if (state == 2) {
          setstyleobj1({ background: "transparent" });
          setstyleobj2({ background: "black" });
        }
        if (state == 3) {
          setstyleobj2({ background: "transparent" });
          setstyleobj3({ background: "black" });
        }
        if (state == 4) {
          setstyleobj3({ background: "transparent" });
          setstyleobj4({ background: "black" });
        }
        if (state == 5) {
          setstyleobj4({ background: "transparent" });
          setstyleobj5({ background: "black" });
        }
        if (state == 6) {
          setstyleobj5({ background: "transparent" });
          setstyleobj6({ background: "black" });
        }
        if (state == 7) {
          setstyleobj6({ background: "transparent" });
          setstyleobj7({ background: "black" });
        }
        if (state == 8) {
          setstyleobj7({ background: "transparent" });
          setstyleobj8({ background: "black" });
        }
        if (state == 9) {
          setstyleobj8({ background: "transparent" });
          setstyleobj9({ background: "black" });
        }
        if (state == 10) {
          setstyleobj9({ background: "transparent" });
          setstyleobj8({ background: "transparent" });
          
        }
        setState(state + 1);
        
        
      } else {
        setState(0); 
      }
    }, 5000);
    setTimeout(() => {
      if (moving < 10) {
        
        setmoving(moving + 1);
      } else {
        setmoving(0);
      }
    }, [1000]);
  }, [state]);

  function right() {
    if (moving > 10) {
      setmoving(0);
    } else {
      setmoving(moving + 1);
    }
  }
  function left() {
    if (moving < 1) {
      setmoving(10);
    } else {
      setmoving(moving - 1);
    }
  }

  return (
    <main className="h-full min-h-screen  w-full ">
      {/* 1st container*/}
      <div className="flex flex-col flex-nowrap pt-20 pb-10 md:flex-row justify-center space-y-10 md:space-y-0 md:justify-around items-center bg-back-about h-3/4">
        <div className="md:flex md:flex-col justify-around text-white  md:w-1/2 w-full space-y-1">
          <motion.div variants={container} initial="hidden" animate="visible">
            <div className="font-bold text-lg md:text-3xl flex justify-center md:justify-start my-10">
              Hi, We are
              <span className="ml-1.5 font-extrabold  text-indigo-600">
                Udyog Asha
              </span>
            </div>
            <span className="px-4 text-justify text-purple-100 flex flex-col text-xs md:text-base md:text-left space-y-1">
              <motion.span variants={item} className="space-x-2">
                <BookmarkIcon fontSize="small" color="primary" />
                <span>
                  ?????????????????? ?????????????????????????????????????????? ?????????????????????????????? ???????????????????????????????????? ?????????????????????.
                </span>
              </motion.span>
              <motion.span variants={item} className="space-x-2">
                <BookmarkIcon fontSize="small" color="primary" />
                <span>
                  ??????????????????????????????????????????????????? ??????????????????????????? ?????????????????????????????? ?????????????????? ??? ?????????????????? ??????????????????
                  ????????????.
                </span>
              </motion.span>
              <motion.span variants={item} className="space-x-2">
                <BookmarkIcon fontSize="small" color="primary" />
                <span>
                  ??????????????????????????????????????? ?????????????????????????????????????????????????????? ????????????????????????????????? ??? ?????????????????????????????????
                  ???????????? ??????????????????
                </span>
              </motion.span>
              <motion.span variants={item} className="space-x-2">
                <BookmarkIcon fontSize="small" color="primary" />
                <span>2025 ?????????????????? 1000 ????????????????????? ???????????????.</span>
              </motion.span>
              <motion.span variants={item} className="space-x-2">
                <BookmarkIcon fontSize="small" color="primary" />
                <span>
                  ????????????????????? ??? ????????? ?????? ?????????????????? ???????????? ?????????????????????????????? ????????????????????? ????????? ???????????? ????????????.
                </span>
              </motion.span>
              <motion.span variants={item} className="space-x-2">
                <BookmarkIcon fontSize="small" color="primary" />
                <span>????????????????????????????????????????????????????????? ???????????????????????? ?????????????????? ???????????? ????????????.</span>
              </motion.span>
              <motion.span variants={item} className="space-x-2">
                <BookmarkIcon fontSize="small" color="primary" />
                <span>???n???????????????????????? ??????????????????????????? ????????? ????????????.</span>
              </motion.span>
              <motion.span variants={item} className="space-x-2">
                <BookmarkIcon fontSize="small" color="primary" />
                <span>
                  ????????????????????????????????? ?????????????????? ???????????? ????????????????????? ????????? ???????????????????????? ????????????????????? ????????????.
                </span>
              </motion.span>
            </span>
          </motion.div>
        </div>
        {/* Swiper  */}
        <span className="hidden md:flex md:flex-col w-1/2 md:w-1/3  scale-150 md:scale-100 bg-indigo-50 filter drop-shadow-lg rounded-md shadow-md contrast-125 mt-10">
          <AnimatePresence>
            {state == 0 && (
              <motion.div className="transform translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 glow-blue-500-lg ">
                <Image
                  src="https://i.postimg.cc/hPRc7j8r/IMG-20180726-171232288.jpg"
                  className="rounded-md  filter  saturate-120 shadow-2xl"
                  width={1350}
                  height={950}
                  layout="responsive"
                ></Image>
              </motion.div>
            )}
            {state == 1 && (
              <motion.div className="transform translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 glow-blue-500-lg">
                <Image
                  src="https://i.postimg.cc/63S6PfvJ/IMG_20190321_175647321_HDR.jpg"
                  className="rounded-md  filter  saturate-120 shadow-2xl"
                  width={1350}
                  height={950}
                  layout="responsive"
                ></Image>
              </motion.div>
            )}
            {state == 2 && (
              <motion.div className="transform translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 glow-blue-500-lg">
                <Image
                  src="https://i.postimg.cc/cCvCvFV6/IMG-20181009-WA0006.jpg"
                  className="rounded-md  filter  saturate-120 shadow-2xl"
                  width={1350}
                  height={950}
                  layout="responsive"
                ></Image>
              </motion.div>
            )}
            {state == 3 && (
              <motion.div className="transform translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 glow-blue-500-lg">
                <Image
                  src="https://i.postimg.cc/CLDDJKQ5/IMG-20190202-WA0016.jpg"
                  className="rounded-md  filter  saturate-120 shadow-2xl"
                  width={1350}
                  height={950}
                  layout="responsive"
                ></Image>
              </motion.div>
            )}
            {state == 4 && (
              <motion.div className="transform translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 glow-blue-500-lg">
                <Image
                  src="https://i.postimg.cc/QNv1p7Sv/IMG-20190226-WA0013.jpg"
                  className="rounded-md  filter  saturate-120 shadow-2xl"
                  width={1350}
                  height={950}
                  layout="responsive"
                ></Image>
              </motion.div>
            )}
            {state == 5 && (
              <motion.div className="transform translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 glow-blue-500-lg">
                <Image
                  src="https://i.postimg.cc/63m5xdyK/IMG-20190214-WA0015.jpg"
                  className="rounded-md  filter  saturate-120 shadow-2xl"
                  width={1350}
                  height={950}
                  layout="responsive"
                ></Image>
              </motion.div>
            )}
            {state == 6 && (
              <motion.div className="transform translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 glow-blue-500-lg">
                <Image
                  src="https://i.postimg.cc/V6prWy9X/IMG-20190701-WA0012.jpg"
                  className="rounded-md  filter  saturate-120 shadow-2xl"
                  width={1350}
                  height={950}
                  layout="responsive"
                ></Image>
              </motion.div>
            )}
            {state == 7 && (
              <motion.div className="transform translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 glow-blue-500-lg">
                <Image
                  src="https://i.postimg.cc/wv8YX0y7/IMG20210314160116.jpg"
                  className="rounded-md  filter  saturate-120 shadow-2xl"
                  width={1350}
                  height={950}
                  layout="responsive"
                ></Image>
              </motion.div>
            )}
            {state == 8 && (
              <motion.div className="transform translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 glow-blue-500-lg">
                <Image
                  src="https://i.postimg.cc/4Nz7VSYh/Screenshot_20200614-210439_2.jpg"
                  className="rounded-md  filter  saturate-120 shadow-2xl"
                  width={1350}
                  height={950}
                  layout="responsive"
                ></Image>
              </motion.div>
            )}
            {state == 9 && (
              <motion.div className="transform translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 glow-blue-500-lg">
                <Image
                  src="https://i.postimg.cc/6qpjnv08/IMG20210619151248.jpg"
                  className="rounded-md  filter  saturate-120 shadow-2xl"
                  width={1350}
                  height={950}
                  layout="responsive"
                ></Image>
              </motion.div>
            )}
          </AnimatePresence>
          <div className=" flex justify-center my-2 space-x-2">
              <div
                className="h-2 w-2 ring-1 ring-black rounded-full"
                style={styleobj}
              ></div>
              <div className="h-2 w-2 ring-1 ring-black rounded-full" style={styleobj1}></div>
              <div className="h-2 w-2 ring-1 ring-black rounded-full" style={styleobj2}></div>
              <div className="h-2 w-2 ring-1 ring-black rounded-full" style={styleobj3}></div>
              <div className="h-2 w-2 ring-1 ring-black rounded-full" style={styleobj4}></div>
              <div className="h-2 w-2 ring-1 ring-black rounded-full" style={styleobj5}></div>
              <div className="h-2 w-2 ring-1 ring-black rounded-full" style={styleobj6}></div>
              <div className="h-2 w-2 ring-1 ring-black rounded-full" style={styleobj7}></div>
              <div className="h-2 w-2 ring-1 ring-black rounded-full" style={styleobj8}></div>
              <div className="h-2 w-2 ring-1 ring-black rounded-full" style={styleobj9}></div>
            </div>
        </span>
       
        {/* 2nd Container */}
      </div>

      <div className="flex flex-col md:hidden justify-center items-center w-full h-full my-20">
        <div className="w-full h-1/4 flex justify-between mt-10">
          <button
            onClick={() => left()}
            className="flex justify-center mt-10 h-9 rounded-full"
          >
            <ChevronLeftIcon
              className=" bg-gray-300 rounded-full"
              fontSize="large"
              color="secondary"
            />
          </button>
          <div className="filter saturate-150 w-full">
            <div className="bg-back-about rounded-t-2xl shadow-2xl bg-opacity-90 px-2 h-full w-full">
              <div className="transform glow-pink-900-2xl -translate-y-10 filter drop-shadow-2xl">
                <AnimatePresence>
                  {moving == 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/6qpjnv08/IMG20210619151248.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={590}
                        height={350}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                  {moving == 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/rptLRvpB/IMG20210619150306.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={190}
                        height={120}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                  {moving == 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/wv8YX0y7/IMG20210314160116.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={190}
                        height={120}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                  {moving == 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/MGZQWmKf/IMG-20190614-WA0021.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={190}
                        height={120}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                  {moving == 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/G3Tsh2rK/IMG-20190613-WA0006.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={190}
                        height={120}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                  {moving == 5 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/G3Tsh2rK/IMG-20190613-WA0006.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={190}
                        height={120}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                  {moving == 6 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/63m5xdyK/IMG-20190214-WA0015.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={190}
                        height={120}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                  {moving == 7 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/CLDDJKQ5/IMG-20190202-WA0016.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={190}
                        height={120}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                  {moving == 8 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/D04fv8XX/IMG-20190115-WA0027.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={190}
                        height={120}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                  {moving == 9 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/6qF3ndXc/IMG-20190107-WA0007.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={190}
                        height={120}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                  {moving == 10 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/cCvCvFV6/IMG-20181009-WA0006.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={190}
                        height={120}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                  {moving == 11 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src="https://i.postimg.cc/63S6PfvJ/IMG_20190321_175647321_HDR.jpg"
                        className="shadow-2xl filter saturate-150 "
                        width={190}
                        height={120}
                        layout="responsive"
                      ></Image>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex justify-center transform -translate-y-6 items-end text-white text-2xl">
                Memories
              </div>
            </div>
            
          </div>
          <button
            onClick={() => right()}
            className="flex shadow-2xl justify-center h-9 mt-10 rounded-full"
          >
            <ChevronRightIcon
              className="bg-gray-300 rounded-full"
              fontSize="large"
              color="secondary"
            />
          </button>
        </div>
      </div>
    </main>
  );
}
