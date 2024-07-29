import React from 'react'

const PostPage = () => {
  return (

    <>
        <div className='flex flex-col gap-5 w-full px-8 py-10'>
            <img src="https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className='h-72 '/>

            <h1>Created At : 4:32pm</h1>
            <div>
                <h1 className='text-2xl'>Title</h1>
            </div>
            <div className='text-xl'>
                Content
            </div>

        </div>
    
    </>
  )
}

export default PostPage