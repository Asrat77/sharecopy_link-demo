import { Link, Head } from '@inertiajs/react'
import Form from './Form'

export default function New({ profile }) {
  return (
    <>
      <Head title="New profile" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New profile</h1>

        <Form
          profile={profile}
          onSubmit={(form) => {
            form.transform((data) => ({ profile: data }))
            form.post('/profiles')
          }}
          submitText="Create profile"
        />

        <Link
          href="/profiles"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to profiles
        </Link>
      </div>
    </>
  )
}
