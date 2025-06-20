import emailIcon from '../assets/email.png'
import lockIcon from '../assets/lock.png'
import UserIcon from '../assets/user.png'
import downArrow from '../assets/down.png'
import {COUNTRY_CODE} from '../constants'
import lens from '../assets/lens1.png'
import UpperIcon from '../assets/up.png'

import { useEffect, useRef, useState } from 'react'

function SignupForm({setLoginPage}) {

    const [dropdown, setDropdown] = useState(false)
    const countryCodeRef = useRef(null);
    const [flag, setFlag] = useState("https://flagcdn.com/w40/in.png");
    const [arrow, setArrow] = useState(false);

    const [country, setCountry] = useState(COUNTRY_CODE);

    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: ""
    })

    function handleOutsideClick(event) {
        if (event) {
            if (countryCodeRef.current && !countryCodeRef.current.contains(event.target)) {
                setDropdown(false);
                setArrow(false)
            }
        } else {
            setDropdown(false);
            setArrow(false);
        }
    }

    function changeHandler(e) {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function handleChangeEvent(e) {
        console.log(e.target.value);
        const filteredCountry = COUNTRY_CODE.filter((c) => c.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setCountry(filteredCountry);
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
    }, [dropdown, flag])

  return (
    <div className='w-full flex justify-end items-center rounded-lg'>
        <form action="" className='w-[490px] p-10 bg-white gap-5 flex flex-col rounded-lg'>
            <div>
                <label className="relative flex items-center">
                    <input type="text" value={formData.fullName} name="fullName" placeholder="Full Name" className='pl-10 text-[14px] p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:shadow-lg focus:shadow-gray-400' onChange={changeHandler} required />
                    <img src={UserIcon} width={30} className='absolute pl-3 opacity-55' />
                </label>
            </div>

            <div ref={countryCodeRef}>
                <div className="relative flex gap-3 items-center rounded-md border border-gray-300">
                    <div className='flex hover:bg-blue-50 p-4 border-r border-gray-300' onClick={() => {
                        setDropdown((prev) => !prev)
                        setArrow((prev) => !prev)
                    }}>
                        <img src={flag} width={20} className='opacity-70'/>
                        <img src={arrow? UpperIcon: downArrow} className='opacity-50 w-2.5' />
                    </div>
                    <div className={`absolute top-13 bg-white z-10 -left-3 drop-shadow-2xl shadow-2xl ${dropdown? "flex": "hidden"} flex flex-col h-[250px] w-[300px] `}>
                        <div className='flex gap-2 p-4'>
                            <img src={lens} width={20} />
                            <input type="text"  placeholder='Search' className='text-[14px] pl-1 border-gray-400 border outline-none rounded-md p-1' onChange={handleChangeEvent}/>
                        </div>
                        <div className='flex flex-col gap-1 overflow-y-scroll'>
                            {country.map((country, idx) => (
                                <div key={idx} className={`flex gap-2 opacity-90 w-full hover:bg-gray-200 p-2 ${flag === country.flag? "bg-gray-200" : ""}`} onClick={() => {
                                    handleOutsideClick();
                                    setFlag(country.flag);
                                    setFormData((prev) => ({
                                        ...prev,
                                        phoneNumber: country.dial_code+" "
                                    }))
                                }}>
                                    <img src={country.flag} width={20} />
                                    <span className='text-[14px]'>{country.name}</span>
                                    <span className='text-[14px]'>{country.dial_code}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <input placeholder="Phone Number" name='phoneNumber' value={formData.phoneNumber} className='pl-1 text-[14px] p-3 rounded-md w-full  focus:outline-none' onChange={changeHandler} required/>
                    
                </div>
            </div>

            <div>
                <label className="relative flex items-center">
                    <input type="email" value={formData.email} onChange={changeHandler} name="email" placeholder="Email Address" className='pl-10 text-[14px] p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:shadow-lg focus:shadow-gray-400' />
                    <img src={emailIcon} width={30} className='absolute pl-3 opacity-55' />
                </label>
            </div>

            <div>
                <label className="relative flex items-center">
                    <input type="password" value={formData.password} onChange={changeHandler} name="password" placeholder="Password" className='pl-10 text-[14px] p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:shadow-lg focus:shadow-gray-400' required/>
                    <img src={lockIcon} width={30} className='absolute pl-3 opacity-55' />
                </label>
            </div>

            <div className='text-[12px] opacity-75'>
                <p>We may use your contact information to improve your experience. <span className='text-blue-600'>Learn more</span></p>
            </div>

            <div className='text-[12px] opacity-75'>
                <p>By clicking Sign Up, you agree to our <span className='text-blue-600'>Terms of Service</span>, <span className='text-blue-600'>Privacy Policy</span>, and <span className='text-blue-600'>Cookies Policy</span></p>
            </div>

            <div className=' mt-4 p-2 flex justify-center items-center bg-gradient-to-r from-[#A45BF7] to-[#F76CC9] rounded-md text-white text-[16px] font-semibold'>
                <button type='Submit'>Signup</button>
            </div>

            

            <div className='flex justify-center'>
                <span className='text-blue-600 hover:underline cursor-default text-[14px]' onClick={() => setLoginPage(true)}>Already have an account?</span>
            </div>
        </form>
    </div>
  )
}

export default SignupForm