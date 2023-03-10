import React from 'react';

export default function Auth() {
  async function submitHandler(e) {
    e.preventDefault();
    const res = await fetch('/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (res.status === 200) window.location = '/';
  }
  return (
    <div className='row'>
      <div className='col d-flex justify-content-center'>
        <form onSubmit={submitHandler}>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Email address
              <input
                name='email'
                type='email'
                className='form-control'
                aria-describedby='emailHelp'
              />
            </label>
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Password
              <input name='password' type='password' className='form-control' />
            </label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
