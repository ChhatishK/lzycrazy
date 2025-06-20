import emailIcon from '../assets/email.png'
import lockIcon from '../assets/lock.png'
import Google from '../assets/google.png'
import Facebook from '../assets/facebook.png'

function LoginForm({setLoginPage}) {
  return (
    <div className='w-full flex justify-end items-center rounded-lg'>
        <form action="" className='w-[490px] p-10 bg-white gap-5 flex flex-col rounded-lg'>
            <div>
                <label htmlFor="email" className="relative flex items-center">
                    <input type="email" id="email" name="email" placeholder="Email Address" className='pl-10 text-[14px] p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:shadow-lg focus:shadow-gray-400' />
                    <img src={emailIcon} width={30} className='absolute pl-3 opacity-55' />
                </label>
            </div>
            <div>
                <label htmlFor="password" className="relative flex items-center">
                    <input type="password" id="password" name="password" placeholder="Password" className='pl-10 text-[14px] p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:shadow-lg focus:shadow-gray-400'/>
                    <img src={lockIcon} width={30} className='absolute pl-3 opacity-55' />
                </label>
            </div>
        
            <div className='flex justify-end'>
                <span className='text-blue-600 hover:underline cursor-default text-[14px]'>Forget Password?</span>
            </div>

            <div className=' mt-4 p-2 flex justify-center items-center bg-gradient-to-r from-[#A45BF7] to-[#F76CC9] rounded-md text-white text-[16px] font-semibold'>
                <button>Login</button>
            </div>

            <div className='flex gap-2 w-full items-center mt-3'>
                <div className='bg-gray-400 w-full h-[1.5px]'></div>
                <span className='text-[14px] text-gray-400 w-full text-center'>or continue with</span>
                <div className='bg-gray-400 w-full h-[1.5px]'></div>
            </div>

            <div className='flex w-full gap-5 mt-3'>
                {/* google */}
                <div className='flex gap-2 justify-center items-center w-full bg-white shadow-2xl rounded-md p-2 border border-[#d7d7d7]'>
                    <img src={Google} width={15} />
                    <span className='text-[16px] font-semibold opacity-90'>Google</span>
                </div>

                {/* facebook */}
                <div className='hover:bg-blue-600 cursor-default flex gap-2 justify-center items-center w-full bg-white shadow-2xl rounded-md p-2 border border-[#d7d7d7]'>
                    <img src={Facebook} width={20} />
                    <span className='text-[16px] font-semibold opacity-90'>Facebook</span>
                </div>
            </div>

            <div className='cursor-default mt-2 p-2 w-[200px] mx-auto flex justify-center items-center bg-gradient-to-r from-[#A45BF7] to-[#F76CC9] rounded-md text-white text-[16px] font-semibold' onClick={() => setLoginPage(false)}>
                <button>Create Account</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm