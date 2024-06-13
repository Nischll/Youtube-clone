import "../style/site.css"

function Web(){
    return(
        <>
        {/* header part */}
        <div className="header">
            <div className="headleft">
                <i className="material-symbols-outlined">menu</i>
                <img src ="https://english.onlinekhabar.com/wp-content/uploads/2020/12/YouTube-Logo-.jpg" alt="logo"></img>
            </div>
            <div className="headmid">
                <form>
                    <input type="text" placeholder="Search"></input>
                </form>
                <button className="search"><i className="material-symbols-outlined">search</i></button>
                
                <div className="mic">
                <i className="material-icons">mic</i>
                </div>
            </div>
            <div className="headright">
                <i className="material-symbols-outlined">video_call</i>
                <i id="notification" className="material-symbols-outlined">notifications_unread</i>
                <i id="account" className="material-symbols-outlined">account_circle</i>
            </div>
        </div>
        {/* header part */}

        {/* BODY PART */}

        <div className="body-container">
            <div className="sidebar">
                <div className="categories">
                    
                    {/* HOME SECTION */}
                    <div className="sub-category">
                        <i className="material-symbols-outlined">home</i>
                        <span>Home</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">subscriptions</i>
                        <span>Subcriptions</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">play_circle</i>
                        <span>Shorts</span>
                    </div>
                    <hr/>

                    {/* YOUR ACCOUNT DETAILS SECTION */}
                    <div className="sub-category">
                        <span className="you">You</span>
                        <i className="material-symbols-outlined">Navigate_next</i>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">Account_box</i>
                        <span>Your Channel</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">history</i>
                        <span>History</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">slideshow</i>
                        <span>Your Videos</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">schedule</i>
                        <span>Watch Later</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">vertical_align_bottom</i>
                        <span>Downloads</span>
                    </div>
                    <div className="sub-category">
                        <i className="ri-thumb-up-line"></i>
                        <span>Like Videos</span>
                    </div>
                    <hr/>

                    {/* SUBSCRIPTION SECTION */}
                    <div>
                        <p className="head">Subscriptions</p>
                    </div>
                    <div className="sub-category">
                        <img src="data:image/png;base64,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" alt="wwe logo"/>
                        <span>WWE</span>
                    </div>
                    <div className="sub-category">
                        <img src="data:image/jpeg;base64,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" alt="Dhruv Rathee"/>
                        <span>Dhruv Rathee</span>
                    </div>
                    <div className="sub-category">
                        <img src="data:image/png;base64,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" alt="COBWEB"></img>
                        <span>Cobweb Official</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">expand_more</i>
                        <span>Show more</span>
                    </div>
                    <hr/>

                    {/* Explore Section */}
                    <div>
                        <p className="head">Explore</p>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">mode_heat</i>
                        <span>Trending</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">music_note</i>
                        <span>Music</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">sports_esports</i>
                        <span>Gaming</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">emoji_events</i>
                        <span>Sport</span>
                    </div>
                    <hr/>

                    {/* Settings section */}
                    <div className="sub-category">
                        <i className="material-symbols-outlined">settings</i>
                        <span>Setings</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">Flag</i>
                        <span>Report History</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">help</i>
                        <span>Help</span>
                    </div>
                    <div className="sub-category">
                        <i className="material-symbols-outlined">feedback</i>
                        <span>Send Feedback</span>
                    </div>
                    <hr/>

                    {/* Copyright Section */}
                    
                </div>
            </div>
            <div className="video-container">

                <div className="div-res">
                    this is div for responsive test
                </div>
            </div>
        </div>



        {/* body part */}

        </>
    )
}

export default Web