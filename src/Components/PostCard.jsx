import React from 'react'
import appwriteService from '../appwrite/conf'
import { Link } from "react-router-dom"

function PostCard({ $id, featuredImage, title }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-800 text-white rounded-xl p-4 transform transition-transform duration-200 hover:scale-105 hover:bg-gray-700'>
        <div className='w-full justify-center mb-4'>
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title} 
            className='rounded-xl w-full h-48 object-cover' 
          />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
