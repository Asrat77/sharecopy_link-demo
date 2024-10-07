import { Head, Link } from "@inertiajs/react";
import { Fragment } from "react";
import Profile from "./Profile";

export default function Index({ profiles, flash }) {
  return (
    <>
      <Head title="Profiles" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Profiles</h1>
          <Link
            href="/profiles/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New profile
          </Link>
        </div>

        <div className="min-w-full">
          {profiles.map((profile) => (
            <Fragment key={profile.id}>
              <Profile profile={profile} />
              <p>
                <Link
                  href={`/profiles/${profile.id}`}
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                >
                  Show this profile
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
