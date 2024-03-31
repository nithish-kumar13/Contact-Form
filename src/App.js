import "./styles/App.css";
import Logo from "./assets/logohms.png";
import Form from "./components/Form";

function App() {
  const formData = [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "mobile", label: "Mobile Number", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "message", label: "Message", type: "textarea", required: true },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <img src={Logo} alt="logo" />
        </div>
      </header>

      <main className="App-main">
        <div className="container">
          <h1 className="heading"> Contact us </h1>
          <Form formData={formData} />
        </div>
      </main>
    </div>
  );
}

export default App;
