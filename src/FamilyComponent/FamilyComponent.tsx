import {simpsons} from "../data/simpsonList.ts";

function FamilyComponent() {
    return (
        <>
            {
                simpsons.map((simpson) => (
                    <div key={simpson.name} className='target'>
                        <h2> Name:{simpson.name}</h2>
                        <h3>Surname:{simpson.surname}</h3>
                        <h4>Age:{simpson.age}</h4>
                        <h5>Info:{simpson.info}</h5>
                        <img src={simpson.photo} alt={simpson.photo}/>
                    </div>))
            }
        </>
    );
}

export default FamilyComponent;