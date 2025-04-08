import React, { useRef, useState } from 'react';
import { IoMdAdd, IoMdClose } from 'react-icons/io';

interface UploadedImage {
  url: string;
  descripcion: string;
}

interface ImgModalUploaderProps {
  limit: number;
}

const ImgModalUploader: React.FC<ImgModalUploaderProps> = ({ limit }) => {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [descripcion, setDescripcion] = useState('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setShowModal(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirm = () => {
    if (!previewUrl || !descripcion) return;

    if (editIndex !== null) {
      const updatedImages = [...images];
      updatedImages[editIndex] = { url: previewUrl, descripcion };
      setImages(updatedImages);
    } else {
      setImages((prev) => [...prev, { url: previewUrl, descripcion }]);
    }

    resetModal();
  };

  const resetModal = () => {
    setPreviewUrl(null);
    setDescripcion('');
    setShowModal(false);
    setEditIndex(null);
  };

  const handleEditImage = (index: number) => {
    const image = images[index];
    setPreviewUrl(image.url);
    setDescripcion(image.descripcion);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDeleteImage = (index: number) => {
    const filtered = images.filter((_, i) => i !== index);
    setImages(filtered);
  };

  const handleOpenPicker = () => {
    setEditIndex(null);
    fileInputRef.current?.click();
  };

  return (
    <div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
        {images.map((img, i) => (
          <div
            key={i}
            className='group relative cursor-pointer overflow-hidden rounded border shadow'
            onClick={() => handleEditImage(i)}
          >
            <img
              src={img.url}
              alt={`imagen-${i}`}
              className='h-55 w-full object-cover'
            />
            <p className='truncate p-2 text-xs'>{img.descripcion}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteImage(i);
              }}
              className='absolute right-1 top-1 rounded-full bg-white p-1 dark:text-black'
              title='Eliminar imagen'
            >
              <IoMdClose />
            </button>
          </div>
        ))}

        {images.length < limit && (
          <button
            onClick={handleOpenPicker}
            className='flex h-55 w-full items-center justify-center rounded border-2 border-dashed border-gray-400 text-gray-500 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800'
          >
            <div className='flex flex-col items-center justify-center'>
              <IoMdAdd size={30} />
              <span className='text-center text-sm'>Agregar Imagen</span>
            </div>
          </button>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        className='hidden'
        onChange={handleImageChange}
      />

      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center  bg-black/60'>
          <div className='w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900'>
            <h2 className='mb-4 text-lg font-semibold'>
              {editIndex !== null ? 'Editar imagen' : 'Agregar imagen'}
            </h2>

            {previewUrl && (
              <img
                src={previewUrl}
                alt='preview'
                className='mb-4 size-full rounded object-contain'
              />
            )}

            <textarea
              placeholder='Descripción de la imagen'
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className='mb-4 w-full resize-none rounded border p-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white'
            />

            <div className='flex w-full space-x-2 md:justify-end'>
              <button
                onClick={resetModal}
                className='w-full rounded bg-gray-300 px-4 py-2 text-sm hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600'
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                className=' w-full rounded bg-primary px-4 py-2 text-sm text-white hover:bg-blue-900'
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { ImgModalUploader };
