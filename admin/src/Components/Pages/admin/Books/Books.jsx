import React, { useState } from 'react';
import Axios from '../../../../Axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [title, setTitle] = useState('');
  const [chapter, setChapter] = useState('');
  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);
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
    formData.append('chapter', chapter);
    formData.append('pdf', pdf);
    formData.append('image', image);

    try {
      await axios.post('api/books/createBooks', formData);
      console.log('Book uploaded successfully!');
      showToastMessage()
      setTitle('');
      setChapter('');
      setPdf(null);
      setImage(null);
      
    } catch (error) {
      console.error('Error uploading book:', error);
    }
  };
  const showToastMessage = () => {
    toast.success('Successfully Added !', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  return (
    <div className="container">
      <h1 className="text-center">Add Books</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Number Of Chapter:</label>
          <input
            type="text"
            className="form-control"
            value={chapter}
            onChange={(e) => setChapter(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>PDF:</label>
          <input
            type="file"
            className="form-control-file"
            name="pdf"
            onChange={handleFileChange}
            accept=".pdf"
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="file"
            className="form-control-file"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
        </div>
        <ToastContainer />
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
};

export default App;
