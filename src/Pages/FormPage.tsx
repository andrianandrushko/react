import {type FormEvent, useState} from "react";
import { CreateCar } from "../services/api.service.ts";



interface IFormProps{
    id: number;
    brand: string,
    price: number,
    year: number,
}
const FormPage = () => {
    const [formState, setFormState] = useState<IFormProps>({
        id:0,
        brand:'',
        price:0,
        year:0
    })


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = {
            brand: formState.brand,
            price: formState.price,
            year: formState.year
        }
        console.log(user)

        CreateCar(formState)
            .then((car)=>{
                console.log('Створенна машина', car)
            })
        .catch((error)=>{
            console.log('Помилка створення машини', error)
        })
    };


    const handleInputChange = (e:FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.name)
        setFormState({...formState, [input.name]: input.value})
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className='label-brand'>
                    brand:
                <input  className='brand' type="text" name={'brand'} value={formState.brand} onChange={handleInputChange}/>
                </label>

                <label className='label-price'>
                    price:
                <input  className='price' type="number" name={"price"} value={formState.price} onChange={handleInputChange}/>
                </label>

                <label className='label-year'>
                    year:
                <input  className='year' type="number" name={'year'} value={formState.year} onChange={handleInputChange}/>
                </label>

                <button className='button' type='submit'>create car</button>
            </form>
        </div>
    );
};

export default FormPage;