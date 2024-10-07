import { useForm } from '@inertiajs/react'

export default function Form({ profile, onSubmit, submitText }) {
  const form = useForm({
    note: profile.note || '',
    phone: profile.phone || '',
    email: profile.email || '',
    user_id: profile.user_id || '',
  })
  const { data, setData, errors, processing } = form

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="contents">
      <div className="my-5">
        <label htmlFor="note">Note</label>
        <textarea
          name="note"
          id="note"
          value={data.note}
          rows="4"
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('note', e.target.value)}
        />
        {errors.note && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.note.join(', ')}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={data.phone}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('phone', e.target.value)}
        />
        {errors.phone && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.phone.join(', ')}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={data.email}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('email', e.target.value)}
        />
        {errors.email && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.email.join(', ')}
          </div>
        )}
      </div>

      <div className="my-5">
        <label htmlFor="user">User</label>
        <input
          type="text"
          name="user"
          id="user"
          value={data.user_id}
          className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-2 w-full"
          onChange={(e) => setData('user_id', e.target.value)}
        />
        {errors.user_id && (
          <div className="text-red-500 px-3 py-2 font-medium">
            {errors.user_id.join(', ')}
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
