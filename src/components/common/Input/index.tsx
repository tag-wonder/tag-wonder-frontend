import { ChangeEvent, useState } from 'react';

function Input() {
  const [value, setValue] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="id">
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </div>
  );
}

export default Input;
