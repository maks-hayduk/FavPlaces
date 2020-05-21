import * as React from 'react';

import { IFileInfo } from 'types';

interface IFileBase64 {
  isMultiple?: boolean;
  onChange: (images: IFileInfo[]) => void;
}

export const FileBase64: React.FC<IFileBase64> = ({ isMultiple, onChange }) => {
  const handleChange = React.useCallback((e: any) => {
    const files = e.target.files;

    const allFiles: IFileInfo[] = [];

    Array.from(files).forEach((file: any) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const fileInfo = {
          file,
          name: file.name,
          type: file.type,
          size: `${Math.round(file.size / 1000)} kb`,
          base64: reader.result
        };

        allFiles.push(fileInfo);
      };
    });

    onChange(allFiles);
  }, []);

  return (
    <input
      type="file"
      onChange={handleChange}
      accept="image/*"
      multiple={Boolean(isMultiple)} 
    />
  );
};
