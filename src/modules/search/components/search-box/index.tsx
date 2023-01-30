import X from '@modules/common/icons/x'
import { FormEvent } from 'react'
import SearchBoxWrapper, { ControlledSearchBoxProps } from '../search-box-wrapper'

const ControlledSearchBox = ({ inputRef, isSearchStalled, onChange, onReset, onSubmit, placeholder, value, ...props }: ControlledSearchBoxProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    event.stopPropagation()

    if (onSubmit) {
      onSubmit(event)
    }

    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  const handleReset = (event: FormEvent) => {
    event.preventDefault()
    event.stopPropagation()

    onReset(event)

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div {...props} className="w-full">
      <form action="" noValidate onReset={handleReset} onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <input
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            className="text-base-regular placeholder:transition-colors placeholder:text-gray-500 focus:placeholder:text-gray-900 focus:outline-none flex-1 bg-transparent"
            onChange={onChange}
            placeholder={placeholder}
            ref={inputRef}
            spellCheck={false}
            type="search"
            value={value}
          />
          {value && (
            <button className="h-5 w-5 rounded-full flex items-center justify-center text-gray-900 bg-gray-200" onClick={handleReset} type="button">
              <X size={12} />
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      {props => {
        return (
          <>
            <ControlledSearchBox {...props} />
          </>
        )
      }}
    </SearchBoxWrapper>
  )
}

export default SearchBox
