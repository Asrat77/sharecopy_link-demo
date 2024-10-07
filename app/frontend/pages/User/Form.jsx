import { useForm } from '@inertiajs/react'

export default function Form({ user, onSubmit, submitText }) {
  const form = useForm({
    name: user.name || '',
    password: user.password || '',
  })
  const { data, setData, errors, processing } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      <div className="my-5">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={data.name}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('name', e.target.value)}
        />
        {errors.name && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.name.join(', ')}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="password">Password</label>
        <textarea
          name="password"
          id="password"
          value={data.password}
          rows="4"
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('password', e.target.value)}
        />
        {errors.password && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.password.join(', ')}
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
