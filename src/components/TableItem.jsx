import React, {useState} from 'react';
import './table.css';
import Loading from './Loading';

function Tabledata({data, accept, cancel, hapus}) {

    var n = new Date(data.created_at);
    var date = n.toLocaleString("en-GB", {dateStyle:"full"});
    
    if(data.length === 0){
        return <Loading/>
    }
    return (
            <tr className="table-data">
                <th scope="row"><input type="checkbox"
                    onChange={()=> {}}
                /></th>
                <td contenteditable="true">{data.nama}</td>
                <td>{data.service.title}</td>
                <td>{data.address}</td>
                <td>{data.phone}</td>
                <td>{data.notes}</td>
                <td>{data.status}</td>
                
                {/* <td style={{color:colorText}}>{data.status}</td> */}
                <td>{date}</td>
                <td>
                    <button 
                        type="button"
                        className="btn btn-danger rounded-pill m-1"
                        onClick={() => hapus(data.id)}><i className="fa fa-trash-o" aria-hidden="true"></i></button>
                    <button type="button" className="btn btn-success rounded-pill m-1" onClick={() => accept(data.id)}>acc</button>
                    <button type="button" className="btn btn-warning rounded-pill m-1" onClick={() => cancel(data.id)}>
                        <i class="fa fa-ban" aria-hidden="true"></i>
                    </button>
                </td>
          </tr>
    );
}

export default Tabledata;

//styling
let status = null;
let colorText;
if(status === "request"){
    colorText = "yellow"
}else if(status === "accepted"){
    colorText = "green";
}else{
    colorText = "red";
}
//styling
// const [editing, setEditing] = useState(false)
//     const [status, setStatus] = useState(null)
    
//     const handleEdit = () => {
//         setEditing(!editing);
//     }
//     const onChangeStatus = (event) =>{
//         setStatus({
//             status: event.target.value
//         })
//     }

//     const handleSubmit = (id) => {
//         if(status === "accepted"){
//             accept(id)
//         }
//         if(status === "canceled"){
//             cancel(id)
//         }
//         setStatus(null)
//     }
// editing?
// (<td contenteditable="true">
//     <form onSubmit={handleSubmit(data.id)}>
//         <select onChange={onChangeStatus} name="status">
//                 <option value="accepted" selected>
//                     Accepted
//                 </option>
//                 <option value="request">Request</option>
//                 <option value="canceled">Canceled</option>
            
//         </select>
//     </form>
// </td>)
// :
// {
//     editing?
//     (
//         <button type="submit" className="btn btn-secondary rounded-pill m-1">
//             <i class="fa fa-check-circle" aria-hidden="true" style={{animation: "blink 2s linear infinite", color:"yellow"}}></i>
//         </button>):
//     (
//         <button type="button" className="btn btn-secondary rounded-pill m-1" onClick={handleEdit}>
//             <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
//         </button>
//     )
// }