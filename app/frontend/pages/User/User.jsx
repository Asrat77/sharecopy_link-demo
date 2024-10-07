export default function User({ user }) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Name:</strong>
        {user.name?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Password:</strong>
        {user.password?.toString()}
      </p>
    </div>
  )
}
