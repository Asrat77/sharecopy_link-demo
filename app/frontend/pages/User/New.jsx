import { Link, Head } from '@inertiajs/react'
import Form from './Form'

export default function New({ user }) {
  return (
    <>
      <Head title="New user" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New user</h1>

        <Form
          user={user}
          onSubmit={(form) => {
            form.transform((data) => ({ user: data }))
            form.post('/users')
          }}
          submitText="Create user"
        />

        <Link
          href="/users"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to users
        </Link>
      </div>
    </>
  )
}
