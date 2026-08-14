import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import FormValidators from "../validators/Form.Validators.tsx";
import {CreateCar} from "../services/api.service.ts";


interface IFormProps{
    id: number
    brand: string,
    price: number,
    year: number,
}
const FormComponent = () => {
   const {handleSubmit, register, formState:{errors, isValid}} = useForm<IFormProps>({
       mode:'all',
       resolver: joiResolver(FormValidators)
   });

   const customHandler = (forDataProps:IFormProps) => {
       console.log(forDataProps)
       customCar(forDataProps)
   }


   const customCar = (formProps:IFormProps) => {
       CreateCar(formProps)
           .then((car)=>{
               console.log('Створенна машина', car)
           })
           .catch((error)=>{
               console.log('Помилка створення машини', error)
           })
   }
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label className='label-brand'>
                    brand:
                    <input
                        className='brand'
                        type="text"
                        {...register("brand")} />
                        {errors.brand && <div>{errors.brand.message}</div>}
                </label>

                <label className='label-price'>
                    price:
                    <input
                        className='price'
                        type="number"
                        min={1000}
                        max={200000}
                        {...register("price")}
                    />
                    {errors.price && <div>{errors.price.message}</div>}
                </label>

                <label className='label-year'>
                    year:
                    <input
                        className='year'
                        type="number"
                        min={2000}
                        max={2026}
                        {...register("year")} />
                        {errors.year && <div>{errors.year.message}</div>}
                </label>

                <button className='button' type='submit' disabled={!isValid}>create car</button>
            </form>
        </div>
    );
};

export default FormComponent;