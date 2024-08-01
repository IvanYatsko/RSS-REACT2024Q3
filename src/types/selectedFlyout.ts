import { Datas } from 'react-csv-downloader/dist/esm/lib/csv';

interface ISelectedFlyout {
  selectedItems: number;
  onUnselectAll: () => void;
  generateDownloadData: () => Promise<Datas>;
}

export default ISelectedFlyout;
