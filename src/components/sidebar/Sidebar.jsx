import "./sidebar.css";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
      <span className="sidebarTitle"> ABOUT ME </span>
      <img className="sidebarImg" src="https://img.freepik.com/free-photo/3d-green-palm-leaves-arrangement_23-2149015443.jpg?w=740&t=st=1685477108~exp=1685477708~hmac=9e08544fe6cc9b41598639398f7da2c2e61a799eea542da8303ad4085947fbc2" alt=""/>

      <p>
        TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTd
        ddddddddddddddddddddddddddddddddd
        dddddg
      </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocialContent">
            <i className=" sidebarIcon fa-brands fa-pinterest"></i>
            <i className=" sidebarIcon fa-brands fa-instagram"></i>
            <i className=" sidebarIcon fa-brands fa-facebook"></i>
            <i className=" sidebarIcon fa-brands fa-twitter"></i>

        </div>
      </div>

    </div>
  )
}
