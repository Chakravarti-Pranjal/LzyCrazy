import Sidebar from "./Sidebar"
import { RxCross2 } from "react-icons/rx";


// eslint-disable-next-line react/prop-types
const Modal = () => {

  return (
    <>
        <div className="modal-wrapper"></div>
        <div className="modal-container">
          <h2 className="header">POST YOUR ADD</h2>
          <RxCross2 className="cross" />
          <hr />
          <div className="modal-content">
            <Sidebar />
          </div> 

        </div>
    </>
  )
}

export default Modal
