import SmallBar from "../components/SmallBar"

export const Response = () => {
  return (
    <>
      <div className="container">
        <SmallBar />

        <div className="msg-container">
            <div className="msg1">
                <p>All Responses</p>
                <span className="zero">0</span>
            </div>
            <div className="msg2">
                <button className="btn1 spBtn">ALL DOWNLOAD</button>
                <button className="btn1">TOTAL LISTING</button>
            </div>
        </div>

      </div> 
    </>
  )
}


