import React from 'react'

const Error = ({mensaje}) => {
    return(
        <div>
            <p className='my-3 p-4 text-center alert alert-primary'>
                {mensaje}
            </p>
        </div>
    )
}

export default Error