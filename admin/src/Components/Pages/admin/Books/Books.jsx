import React, { useState } from 'react';
import Axios from "../../../../Axios";

const App = () => {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');
  const [pdf, setPdf] = useState();
  const [image, setImage] = useState();
  const axios = Axios();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const name = event.target.name;

    if (name === 'pdf') {
      setPdf(file);
    } else if (name === 'image') {
      setImage(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('owner', owner);
    formData.append('pdf', pdf);
    formData.append('image',image)

    try {
      await axios.post('api/books/createBooks',formData);
      console.log('Book uploaded successfully!');
      // Reset the form fields
      setTitle('');
      setOwner('');
      setPdf(null);
      setImage(null);
    } catch (error) {
      console.error('Error uploading book:', error);
    }
  };
  return (
    <div>
      <h1>Book Store</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <br />
        <label>Owner:</label>
        <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} required />
        <br />
        <label>PDF:</label>
        <input type="file" name="pdf" onChange={handleFileChange} accept=".pdf" required />
        <br />
        <label>image:</label>
        <input type="file" name="image" onChange={handleFileChange} accept=" " required />
        <br />
      
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default App;
