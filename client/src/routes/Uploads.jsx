import { useCallback, useState } from "react";
import "../styles/Uploads.css";

function Uploads() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = useCallback((e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prevFiles => [...prevFiles, ...droppedFiles]);
  }, []);

  return (
    <div className="uploads-container">
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
    </div>
  )
}

export default Uploads;