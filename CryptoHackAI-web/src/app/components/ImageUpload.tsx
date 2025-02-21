"use client"
import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange }) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      onImageChange(file);
    } else {
      setImage(null);
      onImageChange(null);
    }
  };

  return (
    <div style={styles.uploadContainer}>
      <Image src="/Image.svg" alt='image-upload' height={100} width={100} />
      <label htmlFor="image-upload" style={styles.uploadLabel}>
        AI Generated Image
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={styles.uploadInput}
      />
      {image && <Image src={image || "/placeholder.svg"} alt="Preview" style={styles.imagePreview} />}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  uploadContainer: {
    width: '120px',
    padding: '20px',
    textAlign: 'start',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  uploadLabel: {
    fontSize: '12px',
    color: '#333',
    cursor: 'pointer',
  },
  uploadInput: {
    display: 'none',
  },
  imagePreview: {
    width: '100px',
    marginTop: '10px',
    height: '100px',
    objectPosition: 'center',
    objectFit: 'cover'
  },
};

export default ImageUpload;
