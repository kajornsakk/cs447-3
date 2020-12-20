import Axios from 'axios'
import { useState } from 'react'

function App() {

  const [namebuilt, setNamebuilt] = useState("");
  const [nameroom, setNameroom] = useState("");
  const [problem, setProblem] = useState("");

  const [problemList, setproblemList] = useState([]);

  const getproblem = () => {
    Axios.get('http://localhost:3002/report').then((response) => {
      setproblemList(response.data);
    });
  }
  const addproblems =() =>{
    Axios.post('http://localhost:3002/create',{
      namebuilt: namebuilt,
      nameroom: nameroom,
      problem:problem
    }).than(() => {
     setproblemList([ ...problemList,{
      namebuilt: namebuilt,
      nameroom: nameroom,
      problem:problem
    }])
    })
  }
  
  return (
    <div className="App container">
      <h1>แจ้งปัญหา</h1>
      <div className="information">
        <form action="" >
          <div className="mb-3">
            <label htmlfor="Name_built" className="form-label">
              ชื่ออาคาร
           </label>
            <input type="text" className="form-control" placeholder="Enter namebuild"
              onChange={(event) => {
                setNamebuilt(event.target.value)
              }} />

          </div>
          <div className="mb-3">
            <label htmlfor="Nameroom" className="form-label">
              ชื่อห้อง
           </label>
            <input type="text" className="form-control" placeholder="Enter namroom"
              onChange={(event) => {
                setNameroom(event.target.value)
              }} />

          </div>
          <div className="mb-3">
            <label htmlfor="problem" className="form-label">
              ปัญหา
           </label>
            <input type="text" className="form-control" placeholder="Enter problem"
              onChange={(event) => {
                setProblem(event.target.value)
              }} />

          </div>
          <button className="btn btn-success" onClick= {addproblems}>submit</button>
        </form>
      </div>
      <hr />
      <div className="status">
        <button className="btn btn-primary" onClick={getproblem}>Show</button>
        <br></br><br></br>
        {problemList.map((val, key) => {
          return (
            <div className="problem card">
              <div className="card-doby text-left">
                <p className="card-text"> Namebuild: {val.namebuilding}</p>
                <p className="card-text"> Namebuild: {val.room_NO}</p>
                <p className="card-text"> Namebuild: {val.problem}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
