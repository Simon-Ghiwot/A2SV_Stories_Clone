import { useState } from "react";

const Dropdown = ()=>{
  return (<>
       <div     className=" z-50 absolute  top-16 w-[160px] bg-slate-200 rounded-lg shadow-lg flex flex-col   tracking-tighter pt-3 pb-3">
                    <div className="hover:bg-slate-400 w-full p-5 ">Board Members</div>
                    <div className="hover:bg-slate-400 w-full p-5 ">Advisors/Mentors</div>
                    <div className="hover:bg-slate-400 w-full p-5 ">Executives</div>
                    <div className="hover:bg-slate-400 w-full p-5 ">Staff</div>
                    <div className="hover:bg-slate-400 w-full p-5 ">Placements</div>
                    <div className="hover:bg-slate-400 w-full p-5 ">Groups</div>
        </div>
  
  </>)
}

const Nav = () => {
  const [dVisible, setDVisible] = useState(false)
  return (
    <nav className="sticky top-0 left-0 flex w-full justify-between pr-10 bg-white items-center h-16 pl-10">
      <div>
        <img
          src={process.env.PUBLIC_URL + "/Images/a2sv_logo.jpg"}
          alt={"profile"}
          className="w-32"
        />
      </div>
      <ul className="flex justify-between gap-6 h-full  items-center">
        <li className="hover:bg-slate-50 h-full flex items-center p-4">
          <a href="#">Home</a>
        </li>
        <li className="hover:bg-slate-50 h-full flex items-center p-4" onMouseOver={()=>setDVisible(true)} onMouseLeave={()=>setDVisible(false)}>
          <a href="#" className="flex w-20 items-center">
            Team
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>
          </a>
          { dVisible && <Dropdown /> }
        </li>
        <li className="hover:bg-slate-50 h-full flex items-center p-4">
          <a href="#">Succes Stories</a>
        </li>
        <li className="hover:bg-slate-50 h-full flex items-center p-4">
          <a href="#">About Us</a>
        </li>
        <li className="hover:bg-slate-50 h-full flex items-center p-4">
          <a href="#">Get Involved</a>
        </li>
      </ul>
      <button className="bg-blue-600  text-white rounded-md pr-10 pl-10 h-10 w-29">Donate</button>
    </nav>
  );
};
export default Nav;
