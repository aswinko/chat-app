import React from 'react'
import GenderCheckBox from './GenderCheckBox'

export const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Signup
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form action="" className="">
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Narendra  Modi"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="modi@123"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="" className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label htmlFor="" className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckBox />

          <a href="#" className='text-sm hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
            </a>

            <div>
              <button className='btn btn-block btn-sm mt-2'>Sign up</button>
            </div>
        </form>
      </div>
    </div>
  )
}


//STARTER CODE FOR SIGNUP PAGE

// import React from 'react'
// import GenderCheckBox from './GenderCheckBox'

// export const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Signup
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form action="" className="">
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               id="fullname"
//               name="fullname"
//               placeholder="Narendra  Modi"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               placeholder="modi@123"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               id="confirmpassword"
//               name="confirmpassword"
//               placeholder="Confirm Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <GenderCheckBox />

//           <a href="#" className='text-sm hover:text-blue-600 mt-2 inline-block'>
//             Already have an account?
//             </a>

//             <div>
//               <button className='btn btn-block btn-sm mt-2'>Sign up</button>
//             </div>
//         </form>
//       </div>
//     </div>
//   )
// }

