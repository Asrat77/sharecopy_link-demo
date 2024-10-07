import { useState } from "react";
import { Head, Link } from "@inertiajs/react";

export default function Show({ user_name, hyper_links, profile, flash }) {
  const [showContact, setShowContact] = useState(false);

  const onDestroy = (e) => {
    if (!confirm("Are you sure you want to delete this profile?")) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Head title={`Profile #${profile.id}`} />
      <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          {flash.notice && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              {flash.notice}
            </div>
          )}

          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
              {user_name.charAt(0)}
            </div>
            <h1 className="text-3xl font-bold mb-2">{user_name}</h1>
            <p className="text-gray-600">{profile.note}</p>
          </div>

          <div className="space-y-4">
            {hyper_links.map((link) => (
              <a
                key={link.id}
                href={link.url.startsWith("http") ? link.url : `http://${link.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 bg-gray-100 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                {link.display_name}
              </a>
            ))}
          </div>

          <div className="mt-8">
            <button
              onClick={() => setShowContact(!showContact)}
              className="w-full p-4 bg-gray-100 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors duration-200 flex justify-between items-center"
            >
              <span>Contact Info</span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${showContact ? "rotate-180" : ""}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {showContact && (
              <div className="mt-4 space-y-2">
                <ContactInfo icon="email" value={profile.email} />
                <ContactInfo icon="phone" value={profile.phone} />
              </div>
            )}
          </div>

          <div className="mt-8 space-y-4">
            <LinkButton href={`/profiles/${profile.id}/edit`} icon="edit">
              Edit Profile
            </LinkButton>
            <LinkButton href="/profiles" icon="arrow-left">
              Back to Profiles
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactInfo({ icon, value }) {
  return (
    <p className="flex items-center text-gray-600">
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d={icon === "email" ? "M3 8l7.89 5.26a2 2 0 002.22 0L21 8" : "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}></path>
      </svg>
      {value}
    </p>
  );
}

function LinkButton({ href, icon, children }) {
  return (
    <Link
      href={href}
      className="block w-full p-4 bg-gray-100 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors duration-200"
    >
      <svg
        className="w-5 h-5 inline-block mr-2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d={icon === "edit" ? "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" : "M10 19l-7-7m0 0l7-7m-7 7h18"}></path>
      </svg>
      {children}
    </Link>
  );
}
