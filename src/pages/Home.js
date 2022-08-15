import React, { useEffect } from "react";
import Homepage from "../components/pages/homePage";
import Entry from "../components/entry/entry"
import { userEntry } from "../context/EntryContext";
import Skeleton from 'react-loading-skeleton'
import getCsrf from "../service/auth/csrf"
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {
  const {post} = userEntry()

  useEffect(() => {getCsrf()},[])
  return (
    
    <div className="flex  bg-home w-full">
      <Homepage />
      <div className="w-auto h-auto absolute left-48 m-1">
        {!post ?  <Skeleton />  : post.map((d,a) => <Entry key={a} link={d[1]._id} title={d[1].title}/>)}
      </div>
    </div>
  );
}
