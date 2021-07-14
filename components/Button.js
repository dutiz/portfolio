import Link from 'next/link'

export default function Button({ className, href, children }) {
  return (
    <Link href={href}>
      <a className={`${className} px-3 py-2 inline-block border-2 rounded-lg`}>{children}</a>
    </Link>
  )
}
