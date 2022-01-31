import { useEffect, useState } from "react";
import { homeService } from "../../services/homeService";
import Dashboard from "../../components/dashboard";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Home() {

  const [isError, setIsError] = useState(null);
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    homeService
      .getDashboard()
      .then(data => {
        if (data != undefined) {
          setDashboardData(data);
        }
      })
      .catch((error) => {
        console.log("error in home index on getAllBoats: ", error);
        setIsError(true);
      });
  }, []);

  return (
    <div>
      <h2>Home View</h2>
      <p>Current Ship Status.</p>
      <Container>
        <Row>
          <Dashboard lanes={dashboardData} />
        </Row>
      </Container>

    </div>
  );
}

export default Home