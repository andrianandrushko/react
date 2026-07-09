import { useSearchParams } from "react-router-dom";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg:'1'});

    return (
            <div>

                    <button className={'clock'} onClick={() =>{
                        const pg = query.get('pg')
                        if(pg){
                            let currentPage = +pg
                            setQuery({pg: (currentPage +1).toString()})
                        }
                    }}>next
                    </button>
                    <button className={'but'} onClick={()=>{
                    const pg = query.get('pg')
                    if(pg){
                    let currentPage = +pg
                    setQuery({pg: (currentPage -1).toString()})
                }
                }}>prev</button>
                </div>
    );
};

export default PaginationComponent;