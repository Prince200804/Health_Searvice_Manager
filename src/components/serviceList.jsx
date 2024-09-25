import React from 'react';
import ServiceItem from './serviceItem';

function ServicesList({ services, updateService, deleteService }) {
  return (
    <div>
      {services.map(service => (
        <ServiceItem 
          key={service.id} 
          service={service} 
          updateService={updateService} 
          deleteService={deleteService}
        />
      ))}
    </div>
  );
}

export default ServicesList;
