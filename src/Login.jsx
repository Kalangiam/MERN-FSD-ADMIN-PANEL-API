import React from 'react'
import { Link } from 'react-router-dom'
// import { Formik } from 'formik'
// import { useNavigate } from 'react-router-dom'


// function Login() {
//   const navigate = useNavigate()

//   let initialValues = {
//     username: "",
//     password: "",
//   }

//   let validate = (values) => {
//     if (values.username != "Jack") {
//       return { username: "username is incorrect" }
//     }
//     if (values.password != "Daniel") {
//       return { content: "password is incorrect" }
//     }
//   }

//   let onSubmit = () => {
//     navigate("/portal/blogs")

//   }

//   return (


//     <div className="row justify-content-center">

//       <div className="col-xl-10 col-lg-12 col-md-9">

//         <div className="card o-hidden border-0 shadow-lg my-5">
//           <div className="card-body p-0">

//             <div className="row justify-content-center">
//               <div className="col-lg-6">
//                 <div className="p-5">
//                   <div className="text-center">
//                     <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
//                   </div>
//                   <Formik initialValues={initialValues}
//                     validate={validate}
//                     onSubmit={onSubmit}
//                     className='user'>

//                     {({ values, errors, handleChange, handleSubmit }) => {
//                       return (

//                         <form onSubmit={handleSubmit}>
//                           <div className="form-group">
//                             <input type="text" className="form-control form-control-user"
//                               name='username'
//                               value={values.username}
//                               onChange={handleChange}
//                               id="exampleInputEmail" 
//                               placeholder="Enter Email Address..." />
//                           </div>
//                           {errors.username && <div>{errors.username}</div>}
//                           <div className="form-group">
//                             <input type="text" className="form-control form-control-user"
//                               name='password'
//                               value={values.password}
//                               onChange={handleChange}
//                               id="exampleInputPassword" placeholder="Password" />
//                           </div>
//                           {errors.password && <div>{errors.password}</div>}

//                           <input type='submit' value={"login"}className="btn btn-primary btn-user btn-block">
//                             Login
//                           </input>
//                           <hr />

//                         </form>
//                       )
//                     }}

//                   </Formik>
//                   <hr />
//                   <div className="text-center">
//                     <Link to="/forgetpassword" className="small" >Forgot Password?</Link>
//                   </div>
//                   <div className="text-center">
//                     <Link to="/register" className="small" >Create an Account!</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>

//     </div>

//   )
// }


function Login() {
  return (
    <div className="row justify-content-center">

      <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">

            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4 font-weight-bold">Click to Demo Login</h1>
                  </div>
                  <form className="user">
                    {/* <div class="form-group">
                      <input type="email" class="form-control form-control-user"
                        id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter Email Address..." />
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-user"
                        id="exampleInputPassword" placeholder="Password" />
                    </div> */}
                
                    <Link to ="/portal/dashboard" class="btn btn-danger btn-user btn-block">
                      Login
                    </Link>
                   
                
                  </form>
                  <hr />
                  {/* <div class="text-center">
                  <Link to="/forgetpassword" className="small" >Forgot Password?</Link>
                  </div>
                  <div class="text-center">
                  <Link to="/register" className="small" >Create an Account!</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}


export default Login