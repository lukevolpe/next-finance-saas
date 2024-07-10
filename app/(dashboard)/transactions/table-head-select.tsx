import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  columnIndex: number;
  selectedColumns: Record<string, string | null>;
  onChange: (columnIndex: number, value: string | null) => void;
};

const options = ['amount', 'payee', 'date']; // These are the options you will be able to change via the drop-down

const TableHeadSelect = ({ columnIndex, selectedColumns, onChange }: Props) => {
  const currentSelection = selectedColumns[`column_${columnIndex}`];

  return (
    <Select
      value={currentSelection || ''}
      onValueChange={(value) => onChange(columnIndex, value)}
    >
      <SelectTrigger
        className={cn(
          'focus:ring-offset-0 focus:ring-transparent outline-none border-none bg-transparent capitalize',
          currentSelection && 'text-blue-500'
        )}
      >
        <SelectValue placeholder="Skip" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="cursor-pointer" value="skip">
          Skip
        </SelectItem>
        {options.map((option, index) => {
          const disabled =
            Object.values(selectedColumns).includes(option) &&
            selectedColumns[`column_${columnIndex}`] !== option;

          return (
            <SelectItem
              key={index}
              value={option}
              disabled={disabled}
              className="capitalize cursor-pointer"
            >
              {option}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default TableHeadSelect;
