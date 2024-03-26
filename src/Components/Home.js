import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 style ={{textAlign: "center"}}><i>Home Page</i></h1>
      <p style ={{textAlign: "center"}}>This Task Manager App is a software application that helps with organizing, streamlining, and prioritizing tasks. It can also help with scheduling, tracking dependencies, resources, and milestones.</p>
      <img style ={{width: "100%", display:"flex", alignItems:"center"}} src="https://images.pexels.com/photos/1097930/pexels-photo-1097930.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid" alt="intro_img"></img>
    </div>
  )
}
