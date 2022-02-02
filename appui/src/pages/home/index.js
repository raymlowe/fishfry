import { useEffect, useState } from "react";
import { dashboardService } from "../../services/dashboardService";
import Dashboard from "../../components/dashboard";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const HomeStyled = styled.div`
  h2{
    font-weight:bold;
  }
  h3{
    font-weight:bold;
  }
  div.pageBanner{
    padding-left:20px;
  }
`

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
    <HomeStyled>
    <div>
      <div className='pageBanner'>
        <h2>Fishfry Tours</h2>
        <h3>Current boat status dashboard</h3>
      </div>
      <Container>
        <Row>
          <Dashboard lanes={dashboardData} />
        </Row>
      </Container>
    </div>
    </HomeStyled>
  );
}

export default Home