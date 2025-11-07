
import { Route, Routes } from 'react-router'
import './css/App.css'
import './css/Sidebar.css'
import Login from './pages/login/Login'
import { SuperAdminLayout } from './components/layout/Layout'
import ProtectedRoute from './components/layout/ProtectedRoute'

import SuperAdminDashboard from './pages/super-admin/dashboard/Dashboard'

import SuperAdminContinents from './pages/super-admin/continent/Continent'

import SuperAdminCountries from './pages/super-admin/countries/Countries'

import SuperAdminplace from './pages/super-admin/place/Place'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<SuperAdminLayout />}>
          <Route path='/superadmin/dashboard' element={
            <ProtectedRoute type="superadmin">
              <SuperAdminDashboard />
            </ProtectedRoute>
          } />

          <Route path='/superadmin/continents' element={
            <ProtectedRoute type="superadmin">
              <SuperAdminContinents />
            </ProtectedRoute>
          } />

          <Route path='/superadmin/countries' element={
            <ProtectedRoute type="superadmin">
              <SuperAdminCountries />
            </ProtectedRoute>
          } />

          <Route path='/superadmin/place' element={
            <ProtectedRoute type="superadmin">
              <SuperAdminplace />
            </ProtectedRoute>
          } />

        </Route>


      </Routes>
    </>
  )
}

export default App
