import "./MainMenu.css"

function Mainmenu(){

    const top = [
        {id:1, title:'All'},
        {id:2, title:'Cook Studio'},
        {id:3, title:'UX'},
        {id:4, title:'Case Study'},
        {id:5, title:'Music'},
        {id:6, title:'Bnagla Lofi'},
        {id:7, title:'Tour'},
        {id:8, title:'Saintmartin'},
        {id:9, title:'Tech'},
        {id:10, title:'iPhone 13'},
        {id:11, title:'User Interface Design'},
        {id:12, title:"Computer.."}
    ]

   
  return (
    <>
    <div className="container1">
        <div className="topbar">
            <div className="search">
                <input type="text" name="text" id="text" placeholder="Search" />
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/search.png" alt="" />
            </div>
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/mic.png" alt="" />
            <div className="topicon">
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/create.png" />
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/more.png" />
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/bell.png" />
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png" />
            </div>
        </div>
        <div className="hr"></div>
    </div>
    
    
    
    </>
  )
}

export default Mainmenu