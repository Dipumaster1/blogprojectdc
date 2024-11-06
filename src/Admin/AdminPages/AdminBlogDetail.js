import React from 'react'
import AdminHeader from '../AdminComp/AdminHeader'
import AdminFooter from '../AdminComp/AdminFooter'
import AdminBlogDetailComp from '../AdminComp/AdminBlogDetailComp'

const AdminBlogDetail = () => {
  return (
    <div>
        <AdminHeader/>
        <AdminBlogDetailComp/>
        <AdminFooter/>
    </div>
  )
}

export default AdminBlogDetail
