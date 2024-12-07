import './css/app.css'

function Cards(){
    
    
            const box = [
            {id:1, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-8.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(1).png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
            {id:2, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-9.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(2).png", para:'Infinix Note 12                AMOLED Helio G88 SoC!   '},
            {id:3, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-10.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(3).png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
            {id:4, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-11.png", elii:"", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
            {id:5, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-4.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(4).png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
            {id:6, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-5.png", elii:"", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
            {id:7, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-6.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(5).png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
            {id:8, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-7.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(6).png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
            {id:9, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail.png",   elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
            {id:10, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-1.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
            {id:11, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-2.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
            {id:12, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-3.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
        ]
    return (
        <>
        

        <div className="section4">
            {/* <div className="icons">
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-8.png" alt="" />
                <div className="ellipse">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(1).png" alt="" />
                    <p>Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita</p>

                </div>
            </div>
            <div className="icons">
                <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-8.png" alt="" />
                <div className="ellipse">
                    <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(1).png" alt="" />
                    <p>Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita</p>

                </div>
            </div> */}
            {box.map((res)=>
               ( <div key={res.id} className="icons">
                <img src={res.tbh} />
                <div className="ellipse">
                    <img src={res.elii} alt=""/>
                    <p>{res.para}</p>

                </div>
            </div>)
        

            )}
        </div>
        </>
    )
}

export default Cards;