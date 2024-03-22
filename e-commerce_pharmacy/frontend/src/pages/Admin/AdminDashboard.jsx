import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 mt-5">
            <div className="card" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">{auth?.user?.name}</h5>
                <h5 className="card-title">{auth?.user?.email}</h5>
                <h5 className="card-title">{auth?.user?.phone}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard
