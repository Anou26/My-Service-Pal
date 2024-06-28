// src/Components/ServiceForm.js
import React, { useState, useEffect } from 'react';

const ServiceForm = ({ service, onSave }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (service) {
            setName(service.name);
            setDescription(service.description);
            setPrice(service.price);
        } else {
            setName('');
            setDescription('');
            setPrice('');
        }
    }, [service]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ name, description, price });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Description</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <button type="submit">{service ? 'Update' : 'Create'} Service</button>
        </form>
    );
};

export default ServiceForm;
