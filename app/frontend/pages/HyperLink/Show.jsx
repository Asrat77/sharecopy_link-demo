import { Link, Head } from '@inertiajs/react'
import HyperLink from './HyperLink'

export default function Show({ hyper_link, flash }) {
  const onDestroy = (e) => {
    if (!confirm('Are you sure you want to delete this hyper link?')) {
      e.preventDefault()
    }
  }

  return (
    <>
      <Head title={`Hyper link #${hyper_link.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Hyper link #{hyper_link.id}</h1>

          <HyperLink hyper_link={hyper_link} />

          <Link
            href={`/hyper_links/${hyper_link.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this hyper link
          </Link>
          <Link
            href="/hyper_links"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to hyper links
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/hyper_links/${hyper_link.id}`}
              onClick={onDestroy}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this hyper link
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
