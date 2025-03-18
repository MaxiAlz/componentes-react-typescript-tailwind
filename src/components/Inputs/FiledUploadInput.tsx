import { useState } from "react";
import { FaFileAlt, FaFilePdf, FaImage } from "react-icons/fa";
import { IoMdAdd, IoMdClose } from "react-icons/io";

interface FiledUploadInputProps {
  limit: number;
  acceptedTypes?: string;
}

const FiledUploadInput: React.FC<FiledUploadInputProps> = ({
  limit,
  acceptedTypes,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const updatedFiles = [...files, ...newFiles].slice(0, limit);
      setFiles(updatedFiles);
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const getFileIcon = (file: File) => {
    if (file.type.includes("pdf"))
      return <FaFilePdf className="text-red-500" size={40} />;
    if (file.type.includes("image"))
      return <FaImage className="text-blue-500" size={40} />;
    return <FaFileAlt className="text-gray-500" size={40} />;
  };

  const truncateName = (name: string, maxLength = 15) => {
    return name.length > maxLength
      ? name.substring(0, maxLength) + "..."
      : name;
  };
  return (
    <div className="flex flex-wrap gap-4">
      {files.map((file, index) => (
        <div
          key={index}
          className="relative flex size-24 flex-col items-center justify-center rounded-md border p-2 text-center shadow-md"
        >
          {getFileIcon(file)}
          <p className="mt-2 text-xs text-gray-700">
            {truncateName(file.name)}
          </p>
          <button
            onClick={() => removeFile(index)}
            className="absolute right-1 top-1 rounded-full bg-white p-1 shadow-md dark:text-black"
          >
            <IoMdClose size={16} />
          </button>
        </div>
      ))}

      {files.length < limit && (
        <label className="flex size-24 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-2 text-center text-gray-500 shadow-md hover:bg-gray-100">
          <input
            type="file"
            multiple
            accept={
              Array.isArray(acceptedTypes)
                ? acceptedTypes.join(",")
                : acceptedTypes
            }
            onChange={handleFileUpload}
            className="hidden"
          />
          <IoMdAdd size={32} />
          <p className="text-xs">Agregar archivo</p>
        </label>
      )}
    </div>
  );
};

export { FiledUploadInput };
