
const SmallBar = () => {
  return (
    <>
        <div className="sidebar">
                <a href="">
                    <nav>
                    <img src="/images/user.png" alt="" /><p>user</p>
                    </nav>
                </a>
                <a href="/market">
                    <nav>
                       <img src="/images/store.png" alt="" /><p>market</p>
                    </nav>
                </a>
                <a href="/myads">
                    <nav><img src="/images/social-media.png" alt="" /><p>myAds</p></nav>
                </a>
                <a href="">
                    <nav>
                        <img src="/images/content-marketing.png" alt="" /><p>response</p>
                    </nav>
                </a>
                <a href="">
                    <nav><img src="/images/user (1).png" alt="" /><p>logout</p></nav>
                </a>
            </div> 
    </>
  )
}

export default SmallBar
