"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./imagePicker.module.css";

const ImagePicker = ({ name }) => {
  const imagePickerRef = useRef();
  const [pickedImage, setPickedImage] = useState();
  const [pickedImageName, setPickedImageName] = useState("");

  const handleImagePick = () => {
    imagePickerRef.current.click();
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      setPickedImageName("");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setPickedImageName(file.name);
  };

  return (
    <div className={styles.picker}>
      <div className={styles.controls}>
        <div className={styles.imagePreview}>
          {!pickedImage && <p>Choose an image</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="preview of the image picked by the user."
              fill
            />
          )}
        </div>
        <div>
          <input
            type="file"
            id={name}
            name={name}
            accept="image/png, image/jpeg"
            ref={imagePickerRef}
            onChange={handleImagePreview}
            required
          />
          <button
            type="button"
            className={styles.button}
            onClick={handleImagePick}
          >
            Choose Image
          </button>
          <p className={styles.imgName}>{pickedImageName}</p>
        </div>
      </div>
    </div>
  );
};

export default ImagePicker;
