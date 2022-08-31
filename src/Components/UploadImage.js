import React, { useState, useEffect } from "react";
import ImageUploading from 'react-images-uploading';

export default function UploadImage(props) {
    const [images, setImages] = React.useState([]);
    const maxNumber = 1;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
      };

      useEffect(() => {
        console.log("seasea", images[0]?.base64);
      }, [images]);

      
      return (
        <div className="App">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="base64"
          >
            {({
              onImageUpload,
              isDragging,
              dragProps,
              onImageRemoveAll,
            }) => (          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            <button onClick={onImageRemoveAll}>Remove all images</button>
          </div>
        )}
      </ImageUploading>
      <>
      <div> { images ? (<img src={`${images[0]?.base64}`} />) : null} </div>
      </>
    </div>
  );

}