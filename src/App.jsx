import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'
import Background from 'three/src/renderers/common/Background.js'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
  },[])

  const handleLogin = (email, password) => {
    if (authData) {
      const admin = authData.admin.find((e) => email == e.email && password == e.password);
      const employee = authData.employees.find((e) => email == e.email && password == e.password);
      if (admin) {
        setUser('admin')
        setLoggedInUserData(admin);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }))
      } else if (employee) {
        setUser('employee')
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      } else {
        alert("invalid")
      }
    }
  }

    return (
      <>
        {!user ? <Login handleLogin={handleLogin} /> : ''}
        {user == 'admin' ? <AdminDashboard setUser={setUser} data={loggedInUserData} /> : user == 'employee' ? <EmployeeDashboard setUser={setUser} data={loggedInUserData} /> : null}
      </>
    )
  }

  export default App