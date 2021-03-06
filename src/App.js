import Detail from './Detail';
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {

  const [details, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      const response = await axios.get('https://api.enye.tech/v1/challenge/records');
      let detailList = []
      response.data.records.profiles.map(element => detailList.push(Object.values(element)));
      setDetail(detailList);
      setLoading(false);
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
