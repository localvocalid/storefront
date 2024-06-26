import Button from '@modules/common/components/button'
import Link from 'next/link'

const SignInPrompt = () => {
  return (
    <div className="flex items-start justify-between">
      <div>
        <p className="text-base-regular text-gray-700 mt-2">Sudah punya akun?</p>
      </div>
      <div>
        <Link href="/account/login">
          <a>
            <Button variant="secondary">Masuk</Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
