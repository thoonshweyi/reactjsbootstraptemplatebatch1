import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router"

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

import Dashboard from "./pages/Dashboard";

import AccountSettings from "./pages/AccountSettings";
import Analytics from "./pages/Analytics";
import Calendar from "./pages/Calendar";

import Products from "./pages/Products";
import ProfileSettings from "./pages/ProfileSettings";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

import Logout from "./pages/Logout";


function App() {

  return (
	<Router>

		<div className='containers'>

			{/* Sidebar */}
			<Sidebar/>
			
			<div className='main-contents sidebar-open'>
				{/* Header */}
				<Header/>

				<div className='content-wrappers'>
					<Routes>
						<Route path='/' element={<Dashboard/>}></Route>
						<Route path='/dashboard' element={<Dashboard/>}></Route>
						
						<Route path='/acountSettings' element={<AccountSettings/>}></Route>
						<Route path='/analytics' element={<Analytics/>}></Route>
						<Route path='/calendar' element={<Calendar/>}></Route>

						<Route path='/products' element={<Products/>}></Route>
						<Route path='/profileSettings' element={<ProfileSettings/>}></Route>
						<Route path='/reports'Reports element={<Reports/>}></Route>
						<Route path='/settings' element={<Settings/>}></Route>
						<Route path='/users' element={<Users/>}></Route>

						<Route path='/logout' element={<Logout/>}></Route>

					</Routes>
				</div>

			</div>

		</div>
      
    </Router>
  )
}

export default App
