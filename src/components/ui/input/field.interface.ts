import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface IFeld extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	Icon?: IconType
	error?: string
}
