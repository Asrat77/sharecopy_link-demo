export default function Profile({ profile }) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Note:</strong>
        {profile.note?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Phone:</strong>
        {profile.phone?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Email:</strong>
        {profile.email?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">User:</strong>
        {profile.user_id?.toString()}
      </p>
    </div>
  )
}
