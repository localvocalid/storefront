import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren<{ className?: string; maxWidth?: string; attribute?: any }>> = props => {
  const { className: containerClass, maxWidth, children, attribute } = props
  return (
    <section className={`flex justify-center w-full ${containerClass}`}>
      <div className="w-full" style={{ maxWidth: maxWidth || '1200px' }} {...attribute}>
        {children}
      </div>
    </section>
  )
}

export default Container
