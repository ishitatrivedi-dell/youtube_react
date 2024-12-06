import './css/app.css';

function Navbar() {
  return (
    <>
    <div className="mainpage">


    <div className="searchbar">
          <div className="search">
               <input type="text" name="search" placeholder="Search" />
              <img
              src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/search.png"
              alt="Search Icon"
              />
          </div>
          <div className="mic">
            <img
              src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/mic.png"
              alt="Mic Icon"
            />
          </div>
          <div className="acc">
            <div>
              <img
                src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/create.png"
                alt="Create Icon"
              />
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/more.png"
                alt="More Icon"
              />
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/bell.png"
                alt="Notification Bell"
              />
            </div>
            <div>
              <img
                src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png"
                alt="User Avatar"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="line" />

      {/* Option Buttons */}
      <div className="option">
        <div>All</div>
        <div>Cook Studio</div>
        <div>UX</div>
        <div>Case Study</div>
        <div>Music</div>
        <div>Bangla Life</div>
        <div>Tour</div>
        <div>Saint Martin</div>
        <div>Tech</div>
        <div>iPhone 13</div>
        <div>User Interface Design</div>
        <div>Computer</div>
      </div>
     
    </>
  );
}

export default Navbar;
