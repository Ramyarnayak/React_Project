import React,{useState } from 'react'
import './Logout.css'





const handleSave=()=>{
    // const newTasks=tasks.filter(el=>el.id!==taskId);
    // setTasks([...newTasks]);
    // setDisplayDeleteModal(false);  //To close DeleteModal once task is saved 
};


function Logout() {
    
// const [logout, setLogout] = useState(true)
const handleCancel=()=>{
    // setDisplayDeleteModal(false);   //To close DeleteModal once task is canceled
};

    return (
    
             <>
       <div id='ModalContainer'>
    
        < div className="DeleteContainer">
            <div className="ModalTitle">
                <div className="Title">Logout</div>
            </div>
            <div className="DeleteStatement">
                Are you sure you want to <strong>Logout</strong> this account?
            </div>
            <div className="ModalActions" >
                < div className="CancelBtn" type={'button'} onClick={handleCancel} >Cancel</div>
                <div className="DeleteBtn" type={'button'} onClick={handleSave} >Logout</div>
            </div>
        </div>
    </div>
    </>
        
    )
}

export default Logout


 
    
        

