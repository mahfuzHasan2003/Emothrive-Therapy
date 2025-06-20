import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div >
            <div>
                <div className="navbar bg-[#FFFFFF99] blur-[300] shadow-sm lg:px-16">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><a>Home</a></li>
                                <li><a>About Us</a></li>
                                <li>
                                    <a>Types of Therapy</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a>Common Struggles</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Image src='/project-image/Group 1.svg'
                                alt='profile'
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[20px]">
                            <li><a className='font-semibold'>Home</a></li>
                            <li><a className='font-semibold'>About Us</a></li>
                            {/*First sub menu*/}
                            <li>
                                <details className='font-semibold'>
                                    <summary>Types of Therapy</summary>
                                    <ul className="p-2">
                                        <li><a>Cognitive Behavioral Therapy (CBT)</a></li>
                                        <li><a>Dialectical Behavior Therapy (DBT)</a></li>
                                        <li><a>Acceptance and Commitment Therapy (ACT)</a></li>
                                    </ul>
                                </details>

                            </li>
                            {/*Second sub menu*/}
                            <li>
                                <details className='font-semibold'>
                                    <summary>Common Struggles</summary>
                                    <ul className="p-2">
                                        <li><a>Loneliness</a></li>
                                        <li><a>Bullying</a></li>
                                        <li><a>Alcohol & Recovery</a></li>
                                        <li><a>Work-Life Balance</a></li>
                                        <li><a>Relationship Conflicts</a></li>
                                        <li><a>Procrastination</a></li>
                                        <li><a>Low Self-Esteem</a></li>
                                        <li><a>Life in General</a></li>

                                    </ul>
                                </details>

                            </li>

                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className='btn bg-[#018001] text-white rounded-[38px] py-[10px] px-[20px]'>Try Free AI Therapy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar