import React,{useState, useEffect} from 'react'

function TextArea({lineheight,css,item,row, placeholder, disabled}) {
  // eslint-disable-next-line
  const [minRows, setMinRows] = useState(row);
  // eslint-disable-next-line
  const [maxRows, setMaxRows] = useState(100);
  const [rows, setRows] = useState(row);
  const [value,setValue] = useState(item);

  useEffect(() => {
    setValue(item);
  }, [item]);

  const handleChange = (e)=>{
      console.log(e.target.value);
      let textareaLineHeight = lineheight;
      let previousRows = e.target.rows;
      e.target.rows = minRows;
      let currentRows =  Math.floor(e.target.scrollHeight / textareaLineHeight);

      if (currentRows === previousRows) {
          e.target.rows = currentRows;
      }

      if (currentRows >= maxRows) {
          e.target.rows = maxRows;
      }

      setValue(e.target.value);
      setRows(currentRows < maxRows ? currentRows : maxRows)
  }

  return (
    <div>
        <textarea name="text" rows={rows} value={value} onChange={handleChange} placeholder={placeholder} className={css} disabled = ""/>       
    </div>
  )
}

export default TextArea