import Link from 'next/link'

const Help = () => {
  return (
    <div>
      <h2 className="text-base-semi">Butuh bantuan?</h2>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Returns & Exchanges</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
