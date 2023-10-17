import React, { useState } from 'react';

function Deliver() {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleAddAddress = () => {
    setAddresses([...addresses, newAddress]);
    setNewAddress({
      street: '',
      city: '',
      state: '',
      zip: '',
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Add a New Address</h1>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <form>
          <div className="mb-4">
            <label htmlFor="street" className="block text-gray-700 font-medium mb-2">
              Street Address
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={newAddress.street}
              onChange={handleAddressChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={newAddress.city}
              onChange={handleAddressChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={newAddress.state}
              onChange={handleAddressChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="zip" className="block text-gray-700 font-medium mb-2">
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={newAddress.zip}
              onChange={handleAddressChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <button
            type="button"
            onClick={handleAddAddress}
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 w-full"
          >
            Add Address
          </button>
        </form>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Saved Addresses</h2>
      <ul>
        {addresses.map((address, index) => (
          <li key={index} className="bg-white shadow p-4 mb-4">
            <strong>Address {index + 1}:</strong> {address.street}, {address.city}, {address.state} - {address.zip}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Deliver;

