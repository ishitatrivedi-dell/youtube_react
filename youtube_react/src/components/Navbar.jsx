import './css/app.css';

const Navbar = () => {
  return (
    <>
    <div>
      <div className="navbar">
        {/* Search bar */}
        <div className="navbar-search">
          <input type="text" placeholder="Search" className="search-input" />
          <button
            className="search-btn"
            style={{
              height: "60px",
              width: "70px",
              marginRight: "10px",
            }}
          >
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
              alt="Search"
            />
          </button>
          <button
            className="mic-btn"
            style={{
              height: "60px",
              width: "50px",
              marginLeft: "10px",
              marginRight: "350px",
            }}
          >
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
              alt="Mic"
            />
          </button>
        </div>

        {/* Right-side icons */}
        <div className="navbar-icons">
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
            alt="Upload"
            className="navbar-icon"
          />
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
            alt="Menu"
            className="navbar-icon"
          />
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
            alt="Notifications"
            className="navbar-icon"
          />
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true"
            alt="Profile"
            className="navbar-icon profile"
          />
        </div>
      </div>

    <hr style={{
        marginTop:'-90vh'
    }}/>
    <div className="trending">
                    <div className="comp">All</div>
                    <div className="comp">Cook Studio</div>
                    <div className="comp">UX</div>
                    <div className="comp">Case Study</div>
                    <div className="comp">Music</div>
                    <div className="comp">Bangla Lofi</div>
                    <div className="comp">Tour</div>
                    <div className="comp">Saintmartian</div>
                    <div className="comp">Tech</div>
                    <div className="comp">iphone 13</div>
                    <div className="comp">User Interface Design</div>
                    <div className="comp">Computer</div>
                    <div>
                        <img style={
                            {
                                height: '40px',
                                width: '40px',
                                borderRadius: '40%',
                                marginLeft: '10px',
                                marginTop: '10px',
                            }
                        } src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/leftBottom.png?raw=true" alt="" />
                    </div>
                </div>
                <hr style={
                    {
                        marginTop: '10px',
                    }
                }/>


               
      </div>
    </>
  );
};

export default Navbar;