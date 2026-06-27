import {useSearchParams} from "react-router";



const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg:'1'});

    return (
            <div>

                    <button className={'clock'} onClick={() =>{
                        const pg = query.get('pg')
                        if(pg){
                            let currentPage = +pg
                            setQuery({pg: (++currentPage).toString()})
                        }
                    }}>next
                    </button>
                    <button className={'but'} onClick={()=>{
                    const pg = query.get('pg')
                    if(pg){
                    let currentPage = +pg
                    setQuery({pg: (--currentPage).toString()})
                }
                }}>prev</button>

                </div>

    );
};

export default PaginationComponent;