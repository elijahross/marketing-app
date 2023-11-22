import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Prices from './pages/prices.jsx'
import Contact from './pages/contact.jsx'
import Blog from './pages/Blog.jsx'
import Http404 from './pages/Http404.jsx'
import FAQ from './pages/FAQ.jsx'
import How from './pages/How.jsx'
import Terms from './pages/Terms.jsx'
import Partner from './pages/Partner.jsx'
import Newsletter from './pages/Newsletter.jsx'
import './index.css'
import { defer, RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { query, endpoint } from './services/index-en.js'
import request from 'graphql-request'
import Article from './components/Article.jsx'
import Impressum from './pages/impressum.jsx'
import Career from './pages/Career.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>} errorElement={<Http404/>} >
      <Route index element={<Home/>} errorElement={<Http404/>} />
      <Route path="/about" element={<Home/>} errorElement={<Http404/>} />
      <Route path="/services" element={<Prices/>} errorElement={<Http404/>} />
      <Route path="/blog" loader = { async () => {
            const data = await request(endpoint, query);
            return defer({data}); }} 
          element={<Blog/>} id="blog" errorElement={<Http404/>} />
      <Route path="/blog/:linkId" element={<Article />} errorElement={<Http404/>} />
      <Route path="/contact" element={<Contact/>} errorElement={<Http404/>} />
      <Route path="/faq" element={<FAQ/>} errorElement={<Http404/>} />
      <Route path="/terms" element={<Terms/>} errorElement={<Http404/>} />
      <Route path="/steps" element={<How/>} errorElement={<Http404/>} />
      <Route path="/partners" element={<Partner/>} errorElement={<Http404/>} />
      <Route path="/news" element={<Newsletter/>} errorElement={<Http404/>} />
      <Route path="/impressum" element={<Impressum/>} errorElement={<Http404/>} />
      <Route path="/career" element={<Career/>} errorElement={<Http404/>} />
      <Route path="/*" element={<Http404/>} errorElement={<Http404/>} />
    </Route> 
  ));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}>
        </RouterProvider>
  </React.StrictMode>,
)
