import React from 'react'
import AdminHeader from '../AdminComp/AdminHeader'
import AdminFooter from '../AdminComp/AdminFooter'
import MyAccountcomp from '../AdminComp/MyAccountcomp'

const MyAccount = () => {
  return (
    <div>
      <AdminHeader/>
      <MyAccountcomp/>
      <AdminFooter/>
    </div>
  )
}

export default MyAccount
