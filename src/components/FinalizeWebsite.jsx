
import React from 'react';
import { useSelector } from 'react-redux';

const FinalizeWebsite = () => {
  const websiteDetails = useSelector((state) => state.website);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-4">Finalize Your Website</h1>
        
        <section className="flex flex-col md:flex-row md:space-x-4 mb-4">
          <div className="flex-1 p-4 border border-gray-300 rounded shadow-md">
            <h2 className="text-xl font-semibold">Website Details</h2>
            <p><strong>Title:</strong> {websiteDetails.title}</p>
            <p><strong>Category:</strong> {websiteDetails.category}</p>
            <p><strong>Subdomain:</strong> {websiteDetails.subdomain}</p>
            
          </div>

          <div className="flex-1 p-4 border border-gray-300 rounded shadow-md">
            <h2 className="text-xl font-semibold">Elements</h2>
            {websiteDetails.elements.length > 0 ? (
              websiteDetails.elements.map((element) => (
                <div key={element.id} className="mb-2">
                  <h3 className="font-medium">{element.label}</h3>
                 
                </div>
              ))
            ) : (
              <p>No elements added yet.</p>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>Address: {websiteDetails.address}</p>
          <p>Phone: {websiteDetails.phoneNumber}</p>
          <p>&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FinalizeWebsite;
