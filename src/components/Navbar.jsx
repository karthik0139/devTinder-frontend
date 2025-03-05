import { useSelector } from "react-redux";

export const Navbar = () => {
  const user = useSelector((store) => store.user);

  const profile = user?.profile;
  console.log(profile)
  return (
    <>
     <div className="navbar flex justify-between item-center bg-base-300">
      <div>
        <a className="btn btn-ghost text-xl">DevTinder</a>
      </div>
      {user && <div className="flex"> 
     
        <div className="dropdown dropdown-end mx-5">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {profile &&
              <img
                
                src={{ profile}}
              />}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>}
    </div>
    </>
   
  );
};
