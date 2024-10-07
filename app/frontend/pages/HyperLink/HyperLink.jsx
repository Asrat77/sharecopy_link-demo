export default function HyperLink({ hyper_link }) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Display name:</strong>
        {hyper_link.display_name?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Url:</strong>
        {hyper_link.url?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">Profile:</strong>
        {hyper_link.profile_id?.toString()}
      </p>
    </div>
  )
}
