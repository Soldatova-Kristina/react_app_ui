const MySelect = ({options, defoultValue, value, onChange}) => {
    return (
        <>
      <select 
      value={value}
      onChahge={e => onChange(e.target.value)}>
        <option disabled value={defoultValue}>Сортировка</option>
        {
            options.map(option => 
            <option key={option.value} value={option.value}>
                {option.name}
                </option>
                )
        }
      </select>
     </>
    )
}

export default MySelect;