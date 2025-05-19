import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../services/appwrite/config'

function PostCard({ $id, title, fetaturedImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-100 bg-secondary rounded-5 p-4'>
        <div className='d-flex w-100 justify-content-center'>
          <img src={`${appwriteService.getFilePreview(fetaturedImage)}`}
           alt={title}
           className='rounded-3'/>
        </div>
        <h2
        className='fs-4 fw-bold'
        >{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
