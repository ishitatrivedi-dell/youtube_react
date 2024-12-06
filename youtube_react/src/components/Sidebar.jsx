import './css/app.css'

const detail1 = [
    {img: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/home.png" , title: "Home"},
    {img: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/explore.png" , title: "Explore"},
    {img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" , title:"Shorts"},
    {img: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/subscription.png",title: " subscription"},
    {img: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/library.png", title: "Library"},
    {img: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/history.png", title: "History"},
    {img: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/your_video.png", title: "Your videos"},
    {img: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/watch_later.png", title: "Watch later"},
    {img: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/liked.png", title: "Liked"},
    {img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true", title: "Nadir On The Go"},
    {img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", title:"Coke Studio Bangla"},
    {img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" , title: "MKBHD"},
    {img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" , title: "Figma"},
    {img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true", title: "ATC Andriod Toto"},
    {img: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" , title: "Alux.com"}

]




function Side() {
    
    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="Hamburger Icon" />
                    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="YouTube Logo" />
                </div>

                <div className="Shorts">
                   <img src= {detail1.img} />
                   <p> { detail1.tile}</p>
                </div>

                <hr />

                <div className="Shorts">
                    <img src={detail1.img}/>
                    <p>{detail1.title}</p>
                </div>
              
                <hr />
                
                <div className="subscription">
                    <p>SUBSCRIPTION</p>
                </div>

                    <div className="Shorts">
                        <img src={detail1.img}  />
                         <p> {detail1.title}</p>
                    </div>
            </div>
        </>
    );
}

export default Side;