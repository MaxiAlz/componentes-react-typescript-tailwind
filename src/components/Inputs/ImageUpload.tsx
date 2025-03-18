import { useState } from 'react';
import { IoMdAdd, IoMdClose } from 'react-icons/io';

interface ImageUploadProps {
  limit: number;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ limit }) => {
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newImages = Array.from(event.target.files);
      const updatedImages = [...images, ...newImages].slice(0, limit);
      setImages(updatedImages);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <div className='flex flex-wrap gap-4'>
      {images.map((image, index) => (
        <div
          key={index}
          className='relative size-24 overflow-hidden rounded-md border'
        >
          <img
            src={URL.createObjectURL(image)}
            alt='Uploaded'
            className='size-full object-cover'
          />
          <button
            onClick={() => removeImage(index)}
            className='absolute right-1 top-1 rounded-full bg-white p-1 dark:text-black'
          >
            <IoMdClose size={16} />
          </button>
        </div>
      ))}

      {images.length < limit && (
        <label className='flex size-24 cursor-pointer items-center justify-center rounded-md border-2 border-dashed'>
          <input
            type='file'
            multiple
            accept='image/*'
            onChange={handleImageUpload}
            className='hidden'
          />
          <IoMdAdd size={32} />
        </label>
      )}
    </div>
  );
};

export { ImageUpload };
