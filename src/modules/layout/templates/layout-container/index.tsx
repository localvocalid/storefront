import { FC, PropsWithChildren } from 'react'

const LayoutContainer: FC<PropsWithChildren<{ containerClassName?: string; maxWidth?: string; attribute?: any }>> = props => {
  const { containerClassName, maxWidth, children, attribute } = props
  return (
    <section className={`flex justify-center w-full ${containerClassName}`}>
      <div className="w-full" style={{ maxWidth: maxWidth || '1200px' }} {...attribute}>
        {children}
      </div>
    </section>
  )
}

export default LayoutContainer
