import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [statuscode,setStatusCode]=useState()
  const [flag,setFlag]=useState()
  const [serverdata,setServerData]=useState([])
  const [recordscount,setRecordsCount]=useState(5)
  // useEffect(()=>{
  //   const text= statuscode !== 200 ? "failed" : "success"
  //   setFlag(text)
    
  // },[statuscode])

  const FetchData=async (url)=>{
    // axios.get('http://localhost:9000').then((res)=>(setStatusCode(res.status.code))).catch(err => console.log(err))
    const data=await axios.get(url)
    const responsedata=data.data
    setServerData(responsedata.results)
    console.log(responsedata.results)
  }

  const RecordsHandler=(e)=>{
    console.log(e.target.value)
    setRecordsCount(e.target.value)
  }

  useEffect(()=>{
    const url=`https://randomuser.me/api?results=${recordscount}`
    FetchData(url)
  },[recordscount])

  return (
    <div className="App">
      {/* <p>{flag}</p> */}
      <button onClick={FetchData}>Click</button>
        <select onChange={(event)=>{RecordsHandler(event)}}>
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      {
        serverdata.length > 0 &&
          <table>
            {serverdata.map((person,index)=>(
              <tr>
                <td>{person.gender}</td>
                <td>{person.name.last}, {person.name.first}</td>
                <td>{person.city}</td>
              </tr>
            ))}
          </table>
      }
    </div>
  );
}

export default App;



// input ({ref}) --> ref.current.focus()
// input {onchange} -->

// function()()()


//i18n (languages)