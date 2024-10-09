export const DatePicker: React.FC<{
  indexDate: string,
  setIndexDate: React.Dispatch<React.SetStateAction<string>>;
}> = ({ indexDate, setIndexDate }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden mt-3 pl-2">
      <div className="pl-2 text-gray-6000">Date to index from:</div>
      <input
        title="Date to index from"
        value={indexDate}
        type="input"
        className="text-gray-600 pl-2 mt-2 mb-2"
        onChange={(e) => setIndexDate(e.target.value)}
        width="100%"
      />
    </div>
  );
};
