import Detail from './Detail';
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {

  const [details, setDetail] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoad(true);
      const response = await axios.get('https://api.enye.tech/v1/challenge/records');
      let detailList = []
      response.data.records.details.map(element => detailList.push(Object.values(element)));
      setDetail(detailList);
      setLoad(false);
    };
    fetchDetails();
 }, [])

  return (
    <div className="App">
    {
      loading ? <h3 style={{textAlign:"center"}}>Details loading...</h3> : <Detail details={details}/>
    }
    </div>
  );
}

export default App;
