import cn from 'clsx'
import { forwardRef } from 'react'

import { IFeld } from './field.interface'

// import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IFeld>(
	(
		{ placeholder, error, className, type = 'text', style, Icon, ...rest },
		ref
	) => {
		return (
			<div className={cn('mb-4', className)} style={style}>
				<label>
					<span className='mb-1 block'>
						{Icon && <Icon className='mr-3' />} {placeholder}
					</span>
					<input
						ref={ref}
						type={type}
						{...rest}
						placeholder={placeholder}
						className={cn(
							'px-4 py-2 w-full outline-none border border-gray border-solid focus:border-primary transition-all placeholder:text-grey rounded-lg',
							{
								'border-red': !!error
							}
						)}
					/>
				</label>
				{error && <div className='text-red mt-1 text-sm '>{error}</div>}
			</div>
		)
	}
)

export default Field
