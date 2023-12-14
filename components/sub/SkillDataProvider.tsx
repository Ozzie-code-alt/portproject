'use client'

import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer'
interface Props{
    src: string
    width: number
    height: number
    index: number
}

export const SkillDataProvider = ({src, width, height, index}: Props) => {
  const {ref, inView} = useInView({ //what this means is that user will only see this once
    triggerOnce: true
  })

const imageVariants = {
  hidden: {opacity:0},
  visible: {opacity:1}
}
const animationDelay = 0.3
  return (
    <motion.div
    ref = {ref}
    initial="hidden"
    variants={imageVariants}
    animate={inView ? "visible" : "hidden" }
    custom={index}
    transition={{delay: index * animationDelay}} // makes the images appear 1 after the other because of  different indexes
    > 
    <Image
    src={src}
    width={width}
    height={height}
    alt='skill IMage'
    />

    </motion.div>
  )
}
