import { ErrorMessage } from '@hookform/error-message'
import Eye from '@modules/common/icons/eye'
import EyeOff from '@modules/common/icons/eye-off'
import clsx from 'clsx'
import React, { useEffect, useImperativeHandle, useState } from 'react'
import { get } from 'react-hook-form'

type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> & {
  label: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
  name: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ type, name, label, errors, touched, required, ...props }, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [inputType, setInputType] = useState(type)

  useEffect(() => {
    if (type === 'password' && showPassword) {
      setInputType('text')
    }

    if (type === 'password' && !showPassword) {
      setInputType('password')
    }
  }, [type, showPassword])

  useImperativeHandle(ref, () => inputRef.current!)

  const hasError = get(errors, name) && get(touched, name)

  return (
    <div>
      <div className="relative z-0 w-full text-base-regular">
        <input
          className={clsx('pt-4 pb-1 block w-full rounded-full px-4 mt-0 bg-transparent border appearance-none focus:outline-none focus:ring-0 focus:border-gray-400 border-gray-200', {
            'border-rose-500 focus:border-rose-500': hasError,
          })}
          name={name}
          placeholder=" "
          type={inputType}
          {...props}
          ref={inputRef}
        />
        <label
          className={clsx('mx-3 px-1 transition-all absolute duration-300 top-3 -z-1 origin-0 text-gray-500', {
            '!text-rose-500': hasError,
          })}
          htmlFor={name}
          onClick={() => inputRef.current?.focus()}
        >
          {label}
          {required && <span className="text-rose-500">*</span>}
        </label>
        {type === 'password' && (
          <button className="text-gray-400 px-4 focus:outline-none transition-all duration-150 outline-none focus:text-gray-700 absolute right-0 top-3" onClick={() => setShowPassword(!showPassword)} type="button">
            {showPassword ? <Eye /> : <EyeOff />}
          </button>
        )}
      </div>
      {hasError && (
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => {
            return (
              <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
                <span>{message}</span>
              </div>
            )
          }}
        />
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
