import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
	FormInputsStyled,
	FormInputStyled,
	FormOrderStyled,
	FormPriceStyled,
	FormStyled
} from './FormOrder.styled.js'

const schema = yup
	.object({
		fullName: yup.string().required('Full name is required.'),
		phone: yup.string().required('Phone is required.'),
		address: yup.string().required('Address is required.')
	})
	.required()

const FormOrder = ({ price, handleSubmitOrder }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting }
	} = useForm({ resolver: yupResolver(schema) })
	const onSubmit = (data) => {
		handleSubmitOrder(data)
		reset()
	}

	return (
		<FormOrderStyled>
			<h2>Complete the form</h2>
			<FormStyled onSubmit={handleSubmit(onSubmit)}>
				<FormInputsStyled>
					<FormInputStyled>
						<label htmlFor="fullName">Full name:</label>
						<input id="fullName" type="text" {...register('fullName')} />
						{errors.fullName && <span>{errors.fullName.message}</span>}
					</FormInputStyled>
					<FormInputStyled>
						<label htmlFor="phone">Phone:</label>
						<input id="phone" type="tel" {...register('phone')} />
						{errors.phone && <span>{errors.phone.message}</span>}
					</FormInputStyled>
					<FormInputStyled>
						<label htmlFor="address">Address:</label>
						<input id="address" type="text" {...register('address')} />
						{errors.address && <span>{errors.address.message}</span>}
					</FormInputStyled>
				</FormInputsStyled>
				<FormPriceStyled>
					<span>{price},00 UAH</span>
					<button disabled={isSubmitting} type="submit">
						To Order
					</button>
				</FormPriceStyled>
			</FormStyled>
		</FormOrderStyled>
	)
}

export default FormOrder
