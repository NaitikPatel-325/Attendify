import React, { useState,useEffect,useContext } from 'react';
import QRCode from 'react-qr-code';
import axios from 'axios';
import UserContext from '../../../context/create';  


export const QR = () => {

  const { username } = useContext(UserContext);
  

  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log("using effect");
    // console.log(username);
    // let dt = moment().format('yyyy-mm-DDThh:mm:ss.ss') + 'z';
    // console.log(dt);
    axios.post("http://localhost:5000/get_student_data",{username:username }).then((res) => {
       // setUserdata(res); 
       console.log(res.data.data);
       setData(res.data.data);
    //    data.forEach((item) => {
    //       var dateLimit = moment(item.endDate.limit)
    //       var now = moment()
    //       console.log(now)
    //       console.log(dateLimit)
    //       if (item.endDate.limit != null || item != ' ' && now == dateLimit) {
    //       }
    //   })
      //  console.log(pastEvents);
      //  console.log(currentEvents);
      //  console.log("then");
    }).catch((err) => {
       console.log(err);
       console.log("catch");
    })
 },[]);

  return (
    <div style={{ background: 'white', padding: '16px' }}>
      {/* {data.map(({ name, startTime, endTime }) => ( */}
        <div key={name} style={{ margin: '10px' }}>
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '200px' }}
            value={`https://localhost:5000/checkin?${ data.map((event,i) => ('event=' + event.name) + '&')} \nuser: ${username}`}
            viewBox={`0 0 256 256`}
          />
        </div>
      {/* ))} */}
    </div>
  );
};
