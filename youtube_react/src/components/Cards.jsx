import './css/app.css'

const data1 = [
    
    
    { 
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
        icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        Name1: "name",
        views: "1.2M",
        channel: "Channel Name",
        date:"Date",

        },
        { 
            thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
            icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
            Name1: "name",
            views: "1.2M",
            channel: "Channel Name",
            date:"Date",

        },
        { 
            thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
            icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
            Name1: "name",
            views: "1.2M",
            channel: "Channel Name",
            date:"Date",

        },
        { 
            thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
            icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
            Name1: "name",
            views: "1.2M",
            channel: "Channel Name",
            date:"Date",
            
        }
    ] 
        const data2 = [

        { 
            thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",
            icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
            Name1: "name",
            views: "1.2M",
            channel: "Channel Name",
            date:"Date",
        },
        { 
            thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
            icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
            Name1: "name",
            views: "1.2M",
            channel: "Channel Name",
            date:"Date",
        },
        { 
            thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
            icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
            Name1: "name",
            views: "1.2M",
            channel: "Channel Name",
            date:"Date",
        },
        { 
            thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
            icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
            Name1: "name",
            views: "1.2M",
            channel: "Channel Name",
            date:"Date",
        }
    ]
    const data3 = [
        
        {
            thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
            icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
                Name1: "name",
                views: "1.2M",
                channel: "Channel Name",
                date:"Date",
            },
            {
                thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
                icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
                Name1: "name",
                views: "1.2M",
                channel: "Channel Name",
                date:"Date",
            },
            {
                thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
                icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
                Name1: "name",
                views: "1.2M",
                channel: "Channel Name",
                date:"Date",
            },
            {
                thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
                icon: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
                Name1: "name",
                views: "1.2M",
                channel: "Channel Name",
                date:"Date",
            }
    ]
        
    
  function Cards (){
    return (
<>

  <div className="suggestion">  
        <div className="suggest">
            <div className="videos">
                {data1.map((video,index) => (
                     <div className="bulbuli" key={index}>
                             <img src={data1.thumbnail} alt="video thumbnail" />
                            <div className="title">
                                    <img src={data1.icon} alt="video icon" />
                                    <div className="p">
                                       {data1.Name1}
                                    </div>
                            </div>
                     </div>
                           
                ))}
            </div>
        </div>
  </div>

</>

    )
}

export default Cards;