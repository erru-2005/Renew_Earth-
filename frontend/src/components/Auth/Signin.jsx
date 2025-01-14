import React from 'react';

const Signin = () => {
  return (
    <>
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
     <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
       <h1 className="text-2xl font-bold text-green-600 text-center mb-6">Plant Donation Sign In</h1>
       <form className="space-y-4">
         {/* Name Field */}
         <div>
           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
           <input
             type="text"
             id="name"
             name="name"
             placeholder="Enter your name"
             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
             required
           />
         </div>

         {/* Date of Birth Field */}
         <div>
           <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
           <input
             type="date"
             id="dob"
             name="dob"
             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
             required
           />
         </div>

         {/* Email Field */}
         <div>
           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
           <input
             type="email"
             id="email"
             name="email"
             placeholder="Enter your email"
             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
             required
           />
         </div>

         {/* Password Field */}
         <div>
           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
           <input
             type="password"
             id="password"
             name="password"
             placeholder="Enter your password"
             className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
             required
           />
         </div>

         {/* Sign In Button */}
         <button
           type="submit"
           className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
         >
           Sign In
         </button>
       </form>

       {/* Or Divider */}
       <div className="my-4 text-center text-gray-500">or</div>

       {/* Social Sign In Buttons */}
       <div className="flex flex-col space-y-4">
         <button
           className="w-full flex items-center justify-center bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
         >
           Sign Up with Facebook
         </button>
         <button
           className="w-full flex items-center justify-center bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
         >
           Sign Up with Google
         </button>
       </div>

       {/* Footer Text */}
       <p className="mt-6 text-sm text-center text-gray-500">
         By signing in, you agree to our <span className="text-green-600 hover:underline">Terms of Service</span> and <span className="text-green-600 hover:underline">Privacy Policy</span>.
       </p>
     </div>
   </div>
     </>
  );
};

export default Signin;
