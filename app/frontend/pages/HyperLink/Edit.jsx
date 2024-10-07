import { Link, Head } from '@inertiajs/react'
import Form from './Form'

export default function Edit({ hyper_link }) {
  return (
    <>
      <Head title="Editing hyper link" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing hyper link</h1>

        <Form
          hyper_link={hyper_link}
          onSubmit={(form) => {
            form.transform((data) => ({ hyper_link: data }))
            form.patch(`/hyper_links/${hyper_link.id}`)
          }}
          submitText="Update hyper link"
        />

        <Link
          href={`/hyper_links/${hyper_link.id}`}
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this hyper link
        </Link>
        <Link
          href="/hyper_links"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to hyper links
        </Link>
      </div>
    </>
  )
}
