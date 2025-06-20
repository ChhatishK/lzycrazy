import { useState } from "react"
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Logo from '../assets/Logo.png'
import lens from '../assets/lens.png'

const NAVIGATION = ["About Us", "LzyCrazy Services", "LzyCrazy Marketplace", "We Are Hiring", "LzyCrazy News"]

function HomePage() {

    const [loginPage, setLoginPage] = useState(true);

  return (
    <div className="w-11/13 h-screen mx-auto grid grid-cols-2">
        <div className="flex flex-col mt-24 items-center gap-10">
            <img src={Logo} width={220} className="opacity-85" />
            
            <div className="relative flex items-center rounded-full w-[500px]">
                <input type="text" placeholder="Search here..."  className="shadow-lg border focus:outline-none border-[#d7d7d7] rounded-full pl-12 p-4 text-[14px] w-full"/>
                <img src={lens} width={40} className="absolute pl-5 opacity-65" />
            </div>

            <div className="flex flex-wrap gap-3 items-center justify-center w-[500px] p-5">
                {NAVIGATION.map((tag, index) => (
                    <div key={index} className="p-2 px-3 hover:bg-gray-100 transition-all duration-200 cursor-default border border-[#d7d7d7] shadow-lg rounded-full bg-white flex justify-center items-center">
                        <span className="text-[14px] font-semibold text-gray-600">{tag}</span>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex w-full justify-center items-center">
            {loginPage ? <LoginForm setLoginPage={setLoginPage} /> : <SignupForm setLoginPage={setLoginPage} />}
        </div>
    </div>
  )
}

export default HomePage