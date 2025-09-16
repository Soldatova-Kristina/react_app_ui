const MySelect = ({options, defoultValue}) => {
    return (
        <>
      <select>
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