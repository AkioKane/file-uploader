import { useCallback, useEffect, useState } from "react";
import "../styles/Uploads.css";
import { useOutletContext } from "react-router-dom";

async function postFiles(files) {
  const formData = new FormData();

  for (let i=0; i < files.length; i++) {
    formData.append('files', files[i]);
  }

  try {
    const response = await fetch('/api/add-files/', {
      method: 'POST',
      body: formData
    });
    
    const result = await response.json();
    console.log("Result: ", result);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function Uploads() {
  const { cookie } = useOutletContext();
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const handleChange = useCallback(async (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 0) {
      setFiles(Array.from(selectedFiles));
      try {
        await postFiles(selectedFiles);
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(async (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFiles(Array.from(droppedFiles));
      try {
        await postFiles(droppedFiles);
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const checkAuth = () => {
    if (cookie?.authenticated) return true;
    else return false;
  }

  const uploadsContent = () => {
    return (
      <>
        <div className="uploads">
          <div 
            className={`save-file ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input 
              type="file" 
              id="file-input" 
              className="file-input"
              onChange={handleChange}
              multiple 
            />
            <label htmlFor="file-input">
              {isDragging ? 'Drop files here' : 'Drag and drop files or click to select'}
            </label>
          </div>
          
          <div className="line"></div>

          <div className="check-uploads">
            {/* {files.length > 0 && (
              <div className="file-list">
                <h4>Выбранные файлы:</h4>
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name} - {(file.size / 1024).toFixed(2)} KB</li>
                  ))}
                </ul>
              </div>
            )} */}
          </div>
        </div>
      </>
    )
  }

  const logInContent = () => {
    return (
      <>
        <div className="log-in-content">
          <h3>To use uploads you need to be logged in to the site.</h3>
        </div>
      </>
    )
  }

  return (
    <div className="uploads-container">
      { checkAuth() ? uploadsContent() : logInContent()}
      
    </div>
  )
}

export default Uploads;