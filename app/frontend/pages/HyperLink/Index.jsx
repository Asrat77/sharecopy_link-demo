import { Link, Head } from '@inertiajs/react'
import { Fragment } from 'react'
import HyperLink from './HyperLink'

export default function Index({ hyper_links, flash }) {
  return (
    <>
      <Head title="Hyper links" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Hyper links</h1>
          <Link
            href="/hyper_links/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New hyper link
          </Link>
        </div>

        <div className="min-w-full">
          {hyper_links.map((hyper_link) => (
            <Fragment key={hyper_link.id}>
              <HyperLink hyper_link={hyper_link} />
              <p>
                <Link
                  href={`/hyper_links/${hyper_link.id}`}
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                >
                  Show this hyper link
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
