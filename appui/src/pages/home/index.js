import { useEffect, useState } from "react";
import { dashboardService } from "../../services/dashboardService";
import Dashboard from "../../components/dashboard";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Home() {

  const [isError, setIsError] = useState(null);
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    dashboardService
      .getDashboard()
      .then(data => {
        if (data != undefined) {
          setDashboardData(data);
        }
      })
      .catch((error) => {
        console.log("error in home index on getAllBoats: ", +error);
        setIsError(true);
      });
  }, []);

  return (
    <div>
      <h2>Fishfry Tours</h2>
      <h3>Current boat status dashboard</h3>
      <Container>
        <Row>
          <Dashboard lanes={dashboardData} />
        </Row>
      </Container>

    </div>
  );
}

export default Home