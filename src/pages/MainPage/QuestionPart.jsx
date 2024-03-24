import React from 'react'
import qPicture from "../../assets/img/main-page-question-pic.png";
import { Accordion } from './Accordion';

export const QuestionPart = () => {
  return (
    <div className='w-full flex flex-col laptop:flex-row-reverse bg-whiteBg dark:bg-darkThemeAppColor py-20 tablet:py-32 items-center '>
        <div className="w-full laptop:w-2/5 flex justify-start items-center ">
          <img className="laptop:w-4/5" src={qPicture} />
        </div>
        <div className="w-full laptop:w-3/5 flex justify-center">
          <div className="laptop:w-3/4 px-4 laptop:px-12 py-12">
            <div className='mb-10'>
                <h3 className='text-fcGreen font-josefin uppercase text-lg font-bold'>FC ile ilgili</h3>
                <h1 className='text-black dark:text-white text-3xl font-josefin font-bold'>Sıkça Sorulan Sorular</h1>
            </div>
            <Accordion />
          </div>
        </div>
    </div>
  )
}
