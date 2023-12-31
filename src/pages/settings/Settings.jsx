import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account Settings</span>
            <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>{""}
                </label>
                <input id="fileInput" type="file" style={{display: "none"}} className="settingsPPInput" />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Safak" />
            <label>Email</label>
            <input type="email" placeholder="safak@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
