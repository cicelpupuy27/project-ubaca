import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{display: 'flex',  justifyContent:'center', flexDirection:'column', alignItems:'center', height: '100vh'}}>
      <h1 style={{color: '#3EB489'}} >404</h1>
      <h2 style={{color: '#3EB489'}}>Page Not Found</h2>
      <p>The page you are looking for doesn't exist</p>
      <Button style={{backgroundColor: '#3EB489'}} onClick={() => navigate("/")}>
        Back to Home page
        </Button>
      </div>
  );
};

export default NotFound;