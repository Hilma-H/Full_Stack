import React from 'react';

const filterChange = filter => {
    return {
        type: 'FILTER',
        filter
    }
}
 
const Filter = ({store}) => {
    const handleChange= (event) => {
        store.dispatch(filterChange(event.target.value))
    }
    const style = {
        marginBottom: 10
    }
    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter

