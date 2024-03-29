import React, { useEffect } from 'react';
import { Formik } from 'formik';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function BlogCreate() {
  
  const navigate = useNavigate();
  let initialValues = {
    title: "",
    content: "",
  }

  let validate = (values) => {
    if (values.title === "") {
      return { title: "title is required" }
    }
    if (values.content === "") {
      return { content: "content is required" }
    }
  }

  let onSubmit = async (values) => {
    try {
      axios.post("https://65c8dadaa4fbc162e1124bb4.mockapi.io/bank", values)
      navigate("/portal/blogs")
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='p-6'>
            <h1 className='h4 text-gray-900 mb-4 font-weight-bold'>Create a BLog!</h1>
          </div>
          <Formik initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            className='user'>

            {({ values, errors, handleChange, handleSubmit }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <input type='text'
                      name='title'
                      value={values.title}
                      onChange={handleChange}
                      className={`form-control form-control-user ${errors.title ? 'border-danger' : 'border-primary'}`}
                      id="exampleFirstName"
                      placeholder='Blogtitle' />
                  </div>
                  {errors.title && <div>{errors.title}</div>}
                  <div className='form-group'>
                    <textarea className={`form-control form-control-user ${errors.title ? 'border-danger' : 'border-primary'}`}
                      name='content'
                      value={values.content}
                      onChange={handleChange}
                      id="exampleFirstDescription"
                      placeholder='BlogDescription'></textarea>
                    {errors.content && <div>{errors.content}</div>}
                  </div>
                  <div className='form-group'>
                    <input type='submit' className='btn btn-dark ' value={"create blog"} />
                  </div>
                </form>
              )
            }}

          </Formik>
        </div>
      </div>
    </div>
  )
}

export default BlogCreate