import React from 'react'

export const ContainerBox = ({greeting}) => {
  return (
    <>
    <div className='container mt-4 'style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}> {greeting} </div>
    <div className="container d-flex justify-content-center">
          <img src="/img/jesus-bailando.gif" alt="" />
        </div>
    </>

  
  )
}
