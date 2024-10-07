import { useForm } from '@inertiajs/react'

export default function Form({ hyper_link, onSubmit, submitText }) {
  const form = useForm({
    display_name: hyper_link.display_name || '',
    url: hyper_link.url || '',
    profile_id: hyper_link.profile_id || '',
  })
  const { data, setData, errors, processing } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      <div className="my-5">
        <label htmlFor="display_name">Display name</label>
        <input
          type="text"
          name="display_name"
          id="display_name"
          value={data.display_name}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('display_name', e.target.value)}
        />
        {errors.display_name && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.display_name.join(', ')}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="url">Url</label>
        <input
          type="text"
          name="url"
          id="url"
          value={data.url}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('url', e.target.value)}
        />
        {errors.url && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.url.join(', ')}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="profile">Profile</label>
        <input
          type="text"
          name="profile"
          id="profile"
          value={data.profile_id}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('profile_id', e.target.value)}
        />
        {errors.profile_id && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.profile_id.join(', ')}
          </div>
        )}
      </div>

      <div className="inline">
        <button
          type="submit"
          disabled={processing}
          className="rounded-lg py-3 px-5 bg-blue-600 text-white inline-block font-medium cursor-pointer"
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}
