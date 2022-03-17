

import React, { useEffect, useRef, useState } from 'react'

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({data: null, loading: true, error: null});

    useEffect(() => {
     
        /**cuando se desmonte */
      return () => {
        isMounted.current = false;
      }
    }, [])

    useEffect ( ()=>{

        setstate({
            data: null, loading: true, error: null
        })
        
        fetch ( url )
            .then(resp => resp.json())
            .then(data =>{
                /**
                 * si es true quiere decir que el componente esta montaddo entonces hace
                 * la peticion, si es false el componente se desmonto y no hace la peticion
                 */
                if(isMounted){
               
                    setstate({
                        loading:false,
                        error: null,
                        data
                    })
                }               
            } )
    },[url])

    return state;
}
