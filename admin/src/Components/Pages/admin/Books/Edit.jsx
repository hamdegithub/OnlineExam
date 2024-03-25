
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";
import Axios from "../../../../Axios";

const Edit = ({ books, onUpdate }) => {
  const [userData] = useContext(UserContext);
  const axios = Axios();
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [chapter, setChapter] = useState('');
  const [pdf, setPdf] = useState(null);
  const [image, setImage] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const name = event.target.name;

    if (name === 'pdf') {
      setPdf(file);
    } else if (name === 'image') {
      setImage(file);
    }
  };

  useEffect(() => {
    handleEdit();
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('chapter', chapter);
    formData.append('pdf', pdf);
    formData.append('image', image);

    try {
      await axios.put(`api/books/editbooks${books.id}`, formData);
      console.log('Book uploaded successfully!');
      setTitle('');
      setChapter('');
      setPdf(null);
      setImage(null);
      handleUpdate()
    } catch (error) {
      console.error('Error uploading book:', error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setTitle(books.title);
    setChapter(books.chapter);
    setPdf(books.pdf);
    setImage(books.image); // Set the initial form values to the existing question data
  };

  const handleUpdate = () => {
     // Call the onUpdate callback to refetch the updated question data
  };
  return (
    <div className="container">
      <h1 className="text-center">Edit Books</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={books.title||''}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Number Of Chapter:</label>
          <input
            type="text"
            className="form-control"
            value={books.chapter||''}
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
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default Edit;