import { Col } from "react-bootstrap"
const Jerry = () => {
  return (
    <div className="two-column-container">
      <div className="column">
        {/* Contenido de la primera columna */}
        <h2>Columna 1</h2>
        <p>Contenido de la primera columna...</p>
      </div>
      <div className="column">
        {/* Contenido de la segunda columna */}
        <h2>Columna 2</h2>
        <p>Contenido de la segunda columna...</p>
      </div>
    </div>
  );
}

export default Jerry