import { Heading, Img } from 'components'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
   <>
     <Helmet>
        <title>Blog_Web_App</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[95px] bg-white-A700">
        <header className="flex flex-row justify-between items-center w-full p-6 bg-white-A700">
          <div className="flex flex-row justify-between items-center w-[65%] ml-[139px]">
            <Img src="images/img_group_150.svg" alt="image" className="h-6" />
            <div className="flex flex-row justify-between items-center w-[52%] md:w-3/5 lg:w-2/5">
              <div className="flex flex-col items-center justify-start w-[13%] gap-0.5">
                <Heading as="h6" className="!text-indigo-900_01 tracking-[0.12px] text-center">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </Heading>
              </div>

              <Heading as="h6" className="!text-indigo-200_01 tracking-[0.12px] text-center">
                <Link to="/blogdetails" style={{ textDecoration: "none" }}>
                  BlogDetails
                </Link>
              </Heading>

              <Heading as="h6" className="!text-indigo-200_01 tracking-[0.12px] text-center">
                <Link to="/bloggerdetails" style={{  textDecoration: "none" }}>
                  BloggerDetails
                </Link>
              </Heading>

              <Heading as="h6" className="!text-indigo-200_01 tracking-[0.12px] text-center">
                <Link to="/contactus" style={{ textDecoration: "none" }}>
                  ContactUs
                </Link>
              </Heading>
            </div>
          </div>
          <Img src="images/img_search.svg" alt="search_one" className="h-[30px] w-[30px] mr-[139px]" />
        </header>
        </div>
   </>
   
  )
}

export default NavBar
