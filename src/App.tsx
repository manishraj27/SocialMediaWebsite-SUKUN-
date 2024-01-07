import { Routes, Route } from 'react-router-dom'

import { Home } from './_root/pages'; //because of default in home we can add multiple pages
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import RootLayout from './_root/RootLayout';
import AuthLayout from './_auth/AuthLayout';


import './globals.css';
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* {public routes can be seen before sign in} */}
        <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SigninForm />}/>
        <Route path="/sign-up" element={<SignupForm />}/>
        </Route>




        {/* {private routes can be seen only after sign in} */}
        <Route element={<RootLayout />}>
        <Route index element={<Home />}/>
        </Route>

      </Routes>
    </main>
  )
}

export default App