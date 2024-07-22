import React, {useState, useEffect} from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import logo from "../../assets/flogo.png";
import { Link } from "react-router-dom";

const Nav = () => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisibleServices, setIsVisibleServices] = useState(false);
  const [isVisibleTechnology, setIsVisibleTechnology] = useState(false);
  const [isVisiblePortfolio, setIsVisiblePortfolio] = useState(false);

  const ItemStyle =
    "border-b-[3px] rounded-none px-[2vw] py-[2vh] hover:bg-gray-100 hover:border-b-[3px] hover:border-gray-500";

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerClick = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const handleLinkClick = () => {
    setIsDrawerVisible(false);
  };
    const [toggle, setToggle] = useState(false);
  return (
    <div className='flex justify-between drawer bg-gray-800 sticky top-0 z-10 font-sans'>
      <div className="flex px-5 items-center">
              <Link to="/">
                <img
                  src={logo}
                  className="z-10 h-16 py-2 ml-2 sm:ml-0 w-32 md:w-32 object-contain "
                  alt=""
                ></img>
              </Link>
            </div>
        <div className='flex justify-end'> 
            <ul className="text-white md:flex hidden list-none flex-row justify-end z-10 items-center my-auto">
                {/* Navbar menu content here
                <Link to="/">
                  <li>
                    <a className="z-10 text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold ">
                      HOME
                    </a>
                  </li>{" "}
                </Link> */}

                <div className="flex justify-between gap-2">
                  <Link to="/ourServices" className=" group">
                    <li
                      onMouseMove={() => setIsVisibleServices(true)}
                      onMouseLeave={() => setIsVisibleServices(false)}
                      onClick={() => setIsVisibleServices(false)}
                      className=""
                    >
                      <a className="text-sm font-medium text-slate-100 rounded-sm tracking-wider hover:font-semibold flex group">
                        SERVICES
                        <span className=" rotate-[270] group-hover:rotate-180 transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </Link>

                  {isVisibleServices && (
                    <li
                      className="absolute bg-blue-100 text-black rounded group flex flex-col top-10"
                      onMouseMove={() => setIsVisibleServices(true)}
                      onMouseLeave={() => setIsVisibleServices(false)}
                    >
                      <Link
                        to="/ourServices/ApplicationDevelopment"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Application Development</a>
                      </Link>
                      <Link
                        to="/ourServices/CloudService"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Cloud Service</a>
                      </Link>
                      <Link
                        to="/ourServices/MaintenanceSupport"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Maintenance & Support</a>
                      </Link>
                      <Link
                        to="/ourServices/DataAnalytics"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Analytics & Business Intelligence</a>
                      </Link>
                      <Link
                        to="/ourServices/DevOps"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>DevOps</a>
                      </Link>
                      <Link
                        to="/ourServices/QualityEngineering"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Quality Engineering</a>
                      </Link>
                    </li>
                  )}
                </div>
                <div className=" group">
                  <Link to="/technology" className=" group">
                    <li
                      onMouseMove={() => setIsVisibleTechnology(true)}
                      onMouseLeave={() => setIsVisibleTechnology(false)}
                      onClick={() => setIsVisibleTechnology(false)}

                      //className="group-hover:border-b-[4px] group-hover:border-[#4e8e9b]"
                    >
                      <a className="py-2 px-7 text-sm font-medium text-slate-100 rounded-sm tracking-wider hover:font-semibold flex group">
                        TECHNOLOGY
                        {/* <span className=" rotate-[270] group-hover:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                      </span> */}
                      </a>
                    </li>
                  </Link>

                  {/* isVisibleTechnology && ( <li className="absolute shadow bg-base-100 rounded-none min-w-64 group"
              onMouseMove={()=> setIsVisibleTechnology(true)}
              onMouseLeave={()=> setIsVisibleTechnology(false)}>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Frontend Development</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Backend Development</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Database</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Cloud</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Artificial intelligence</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Infrastructure Development</a></Link>
              </li>)*/}
                </div>

                {/* <Link to="/technology" className=" relative group">
                  <li>
                    <a
                      className="z-10 flex text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold relative group"
                      onMouseEnter={() => {
                        // setIsVisibleTechnology(true);
                        // setIsVisibleServices(false);
                      }}
                      // onMouseLeave={() => setIsVisibleServices(false)}
                      onClick={() => setIsVisibleTechnology(false)}
                    >
                      TECHNOLOGY
                      <span className=" rotate-[270] group-hover:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                </Link> */}

                <div className="group">
                  <Link to="/portfolio/profile" className=" group">
                    <li
                      className=""
                      onMouseMove={() => setIsVisiblePortfolio(true)}
                      onMouseLeave={() => setIsVisiblePortfolio(false)}
                      onClick={() => setIsVisiblePortfolio(false)}
                    >
                      <a className="py-2 px-7 text-sm font-medium text-slate-100 rounded-sm tracking-wider hover:font-semibold flex group">
                        PORTFOLIO
                        <span className=" rotate-[270] group-hover:rotate-180 transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </Link>

                  {isVisiblePortfolio && (
                    <li
                      className="absolute bg-blue-100 text-black rounded group flex flex-col top-10"
                      onMouseMove={() => setIsVisiblePortfolio(true)}
                      onMouseLeave={() => setIsVisiblePortfolio(false)}
                    >
                      <Link
                        to="/portfolio/profile"
                        className={ItemStyle}
                        onClick={() => setIsVisiblePortfolio(false)}
                      >
                        <a>Our Profile</a>
                      </Link>
                      <Link
                        to="/portfolio/ProcessOverView"
                        className={ItemStyle}
                        onClick={() => setIsVisiblePortfolio(false)}
                      >
                        <a>Process Overview</a>
                      </Link>
                      <Link
                        to="/portfolio/OurAchievement"
                        className={ItemStyle}
                        onClick={() => setIsVisiblePortfolio(false)}
                      >
                        <a>Our Achievement</a>
                      </Link>
                    </li>
                  )}
                </div>

                <Link to="/career">
                  <li>
                    <a className="py-2 px-7 z-10 text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold">
                      CAREER
                    </a>
                  </li>
                </Link>

                <Link to="/contact">
                  <li>
                    <a className=" bg-[#0d9488] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1e40af]">
                      CONTACT
                     
                    </a>
                   
                  </li>
                </Link>
                </ul>
        <div className="flex relative px-5 items-center">
            {toggle ? <AiOutlineClose fontSize={30} className='text-white md:hidden cursor-pointer right-2' onClick={()=> setToggle(false)}/> : <HiMenuAlt4 fontSize={30} className='text-white md:hidden cursor-pointer' onClick={()=> setToggle(true)}/>}
        {toggle && (
            <ul className='z-10 fixed -top-10 right-0 p-10 w-[50vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-around items-end rounded-md blue-glassmorphism text-white animate-slide-in'>
                <li className="text-xl w-full my-2">
                    <AiOutlineClose onClick={()=> setToggle(false)}/>    
                </li>    
                {/* Navbar menu content here
                <Link to="/">
                  <li>
                    <a className="z-10 text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold ">
                      HOME
                    </a>
                  </li>{" "}
                </Link> */}

                <div className="flex justify-between">
                  <Link to="/ourServices" className=" group">
                    <li
                      onMouseMove={() => setIsVisibleServices(true)}
                      onMouseLeave={() => setIsVisibleServices(false)}
                      onClick={() => setIsVisibleServices(false)}
                      className=""
                    >
                      <a className="text-sm font-medium text-slate-100 rounded-sm tracking-wider hover:font-semibold flex group">
                        SERVICES
                        <span className=" rotate-[270] group-hover:rotate-180 transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </Link>

                  {isVisibleServices && (
                    <li
                      className="absolute bg-blue-100 text-black rounded group flex flex-col"
                      onMouseMove={() => setIsVisibleServices(true)}
                      onMouseLeave={() => setIsVisibleServices(false)}
                    >
                      <Link
                        to="/ourServices/ApplicationDevelopment"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Application Development</a>
                      </Link>
                      <Link
                        to="/ourServices/CloudService"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Cloud Service</a>
                      </Link>
                      <Link
                        to="/ourServices/MaintenanceSupport"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Maintenance & Support</a>
                      </Link>
                      <Link
                        to="/ourServices/DataAnalytics"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Analytics & Business Intelligence</a>
                      </Link>
                      <Link
                        to="/ourServices/DevOps"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>DevOps</a>
                      </Link>
                      <Link
                        to="/ourServices/QualityEngineering"
                        className={ItemStyle}
                        onClick={() => setIsVisibleServices(false)}
                      >
                        <a>Quality Engineering</a>
                      </Link>
                    </li>
                  )}
                </div>
                <div className=" group">
                  <Link to="/technology" className=" group">
                    <li
                      onMouseMove={() => setIsVisibleTechnology(true)}
                      onMouseLeave={() => setIsVisibleTechnology(false)}
                      onClick={() => setIsVisibleTechnology(false)}

                      //className="group-hover:border-b-[4px] group-hover:border-[#4e8e9b]"
                    >
                      <a className="text-sm font-medium text-slate-100 rounded-sm tracking-wider hover:font-semibold flex group">
                        TECHNOLOGY
                        {/* <span className=" rotate-[270] group-hover:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                      </span> */}
                      </a>
                    </li>
                  </Link>

                  {/* isVisibleTechnology && ( <li className="absolute shadow bg-base-100 rounded-none min-w-64 group"
              onMouseMove={()=> setIsVisibleTechnology(true)}
              onMouseLeave={()=> setIsVisibleTechnology(false)}>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Frontend Development</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Backend Development</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Database</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Cloud</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Artificial intelligence</a></Link>
                <Link to='/' className={ItemStyle} onClick={() => setIsVisibleTechnology(false)} ><a>Infrastructure Development</a></Link>
              </li>)*/}
                </div>

                {/* <Link to="/technology" className=" relative group">
                  <li>
                    <a
                      className="z-10 flex text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold relative group"
                      onMouseEnter={() => {
                        // setIsVisibleTechnology(true);
                        // setIsVisibleServices(false);
                      }}
                      // onMouseLeave={() => setIsVisibleServices(false)}
                      onClick={() => setIsVisibleTechnology(false)}
                    >
                      TECHNOLOGY
                      <span className=" rotate-[270] group-hover:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                </Link> */}

                <div className="group">
                  <Link to="/portfolio/profile" className=" group">
                    <li
                      className=""
                      onMouseMove={() => setIsVisiblePortfolio(true)}
                      onMouseLeave={() => setIsVisiblePortfolio(false)}
                      onClick={() => setIsVisiblePortfolio(false)}
                    >
                      <a className="text-sm font-medium text-slate-100 rounded-sm tracking-wider hover:font-semibold flex group">
                        PORTFOLIO
                        <span className=" rotate-[270] group-hover:rotate-180 transition-all duration-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      </a>
                    </li>
                  </Link>

                  {isVisiblePortfolio && (
                    <li
                      className="absolute bg-blue-100 text-black rounded group flex flex-col"
                      onMouseMove={() => setIsVisiblePortfolio(true)}
                      onMouseLeave={() => setIsVisiblePortfolio(false)}
                    >
                      <Link
                        to="/portfolio/profile"
                        className={ItemStyle}
                        onClick={() => setIsVisiblePortfolio(false)}
                      >
                        <a>Our Profile</a>
                      </Link>
                      <Link
                        to="/portfolio/ProcessOverView"
                        className={ItemStyle}
                        onClick={() => setIsVisiblePortfolio(false)}
                      >
                        <a>Process Overview</a>
                      </Link>
                      <Link
                        to="/portfolio/OurAchievement"
                        className={ItemStyle}
                        onClick={() => setIsVisiblePortfolio(false)}
                      >
                        <a>Our Achievement</a>
                      </Link>
                    </li>
                  )}
                </div>

                <div>
                    <Link to="/career">
                  <li>
                    <a className="z-10 text-sm font-medium tracking-wider rounded-sm text-slate-100 hover:font-semibold">
                      CAREER
                    </a>
                  </li>
                </Link>
                </div>

                <div className=''>
                    <Link to="/contact">
                  <li>
                    <a className="bg-[#0d9488] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1e40af]">
                      CONTACT
                     
                    </a>
                   
                  </li>
                </Link>
                </div>
            </ul>
        )}
        </div>
        </div>
    </div>
  )
}

export default Nav
