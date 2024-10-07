import { Link, Head } from '@inertiajs/react'
import Form from './Form'

export default function Edit({ profile }) {
  return (
    <>
      <Head title="Editing profile" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing profile</h1>

        <Form
          profile={profile}
          onSubmit={(form) => {
            form.transform((data) => ({ profile: data }))
            form.patch(`/profiles/${profile.id}`)
          }}
          submitText="Update profile"
        />

        <Link
          href={`/profiles/${profile.id}`}
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this profile
        </Link>
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
