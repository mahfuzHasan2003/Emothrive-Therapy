import React from 'react';

const Login = () => {
    return (
        <div>
            <div className='lg:flex items-center min-h-screen'>
                {/* Left div */}
                <div
                    className='h-[1024px] w-1/2 flex justify-center items-center text-6xl font-bold'
                    style={{
                        background:
                            'linear-gradient(180deg, rgba(0, 255, 0, 0.40) 0%, rgba(10, 251, 10, 0.30) 76.04%, rgba(0, 255, 0, 0.20) 100%)',
                    }}
                >
                    safespace
                </div>

                <div style={{
                    background: 'linear-gradient(253deg, rgba(2, 191, 2, 0.20) 0%, rgba(0, 68, 0, 0.20) 100%)',
                }} className='h-[1024px] w-1/2 flex justify-center items-center'>
                    <div className='w-96'>
                        <h1 className='text-2xl font-semibold mb-2'>Hello Again!</h1>
                        <h1 className='text-[#333333]'>Welcome Back</h1>
                        <form className='mt-10 w-full'>
                            <i class="fa-solid fa-envelope"></i>
                            <input
                                className='p-3.5 rounded-lg border-none w-full bg-white mb-4'
                                type='text'
                                placeholder='Enter address'
                            />
                            <input
                                className='p-3.5 rounded-lg border-none w-full bg-white mb-4'
                                type='text'
                                placeholder='Password'
                            />
                            <button className='bg-[#018001] rounded-sm w-full text-white py-3.5 cursor-pointer mb-5'>
                                Sign in
                            </button>
                            <h3 className='text-center mb-5'>or continue with</h3>
                            <button className='bg-white rounded-sm w-full text-black py-3.5 cursor-pointer mb-4'>
                                Continue with Google
                            </button>
                            <button className='bg-white rounded-sm w-full text-black py-3.5 cursor-pointer'>
                                Continue with Facebook
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
