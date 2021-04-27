import React from 'react'

const Search = ({serch,searchinput,handeSerach}) => {
    return (
        <div>
             <input type="text" value={serch} ref={searchinput} onChange={handeSerach}/>
        </div>
    )
}

export default Search