import { Upload } from 'lucide-react';
import { useCSVReader } from 'react-papaparse';

import { Button } from '@/components/ui/button';

type Props = {
  onUpload: (results: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  // TODO: Add a paywall

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (
        <div className="w-full">
          <Button {...getRootProps()} size="sm" className="w-full lg:w-auto">
            <Upload className="size-4 mr-2" />
            Import
          </Button>
        </div>
      )}
    </CSVReader>
  );
};
