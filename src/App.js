import { useEffect } from "react";

import { useSelector } from "react-redux"

import { ServiceFrom, ServicesList } from './components';

function App() {
  const services = useSelector((store) => store.services)

  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services))
  }, [services])

  return (
    <div className="App">
      <ServiceFrom />
      <ServicesList />
    </div>
  );
}

export default App;
