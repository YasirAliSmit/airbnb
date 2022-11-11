import "./App.css";
import { Navbar } from "./component/Navbar";
import { MainContent } from "./component/group";
import { CardOne } from "./component/card";
import { Data } from "./component/data";
function App() {
  const getData = Data.map((data) => {
    console.log(data.data);
    return (
      <CardOne
        key={data.id}
        data={data}
      />
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <>
          <Navbar />
          <MainContent />
          <div style={{display: "flex", justifyContent:'space-evenly', flexWrap:'wrap'}}>

          {getData}
          </div>
        </>
      </header>
    </div>
  );
}

export default App;
