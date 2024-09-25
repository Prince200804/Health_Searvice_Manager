import React, { useState } from 'react';
import './App.css';
import ServicesList from './components/serviceList';
import ServiceForm from './components/serviceForm';

function App() {
  const [services, setServices] = useState([]);

  const addService = service => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  const updateService = updatedService => {
    setServices(services.map(service => service.id === updatedService.id ? updatedService : service));
  };

  const deleteService = serviceId => {
    setServices(services.filter(service => service.id !== serviceId));
  };

  return (
    <div className="App">
      <h1>Healthcare Services Manager</h1>
      <ServiceForm addService={addService} />
      <br></br>
      <ServicesList 
        services={services} 

        updateService={updateService} 
          
        deleteService={deleteService}
      />
    </div>
  );
}

export default App;
