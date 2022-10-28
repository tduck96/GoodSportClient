import Spinner from 'react-bootstrap/Spinner';

const Spin = () => {
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  return (
    <div style = {style}>
    <Spinner animation="border" variant = "success" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}

export default Spin;