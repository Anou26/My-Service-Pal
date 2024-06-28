// src/Pages/Services.js
import React, { useEffect, useState } from 'react';
import { getServices, createService, updateService, deleteService } from '../api';
import ServiceForm from '../Components/ServiceForm';

const Services = () => {
    const [services, setServices] = useState([]);
    const [editingService, setEditingService] = useState(null);

    const fetchServices = async () => {
        try {
            const data = await getServices();
            setServices(data);
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const handleCreateOrUpdate = async (service) => {
        if (editingService) {
            await updateService(editingService._id, service);
        } else {
            await createService(service);
        }
        setEditingService(null);
        fetchServices();
    };

    const handleDelete = async (id) => {
        await deleteService(id);
        fetchServices();
    };

    return (
        <div>
            <h1>Services Page</h1>
            <ServiceForm service={editingService} onSave={handleCreateOrUpdate} />
            <ul>
                {services.map(service => (
                    <li key={service._id}>
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                        <p>${service.price}</p>
                        <button onClick={() => setEditingService(service)}>Edit</button>
                        <button onClick={() => handleDelete(service._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
