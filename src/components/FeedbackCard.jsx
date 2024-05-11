

export default function FeedbackCard({title, children}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <hr className="border-none w-1 h-6 bg-alt" />
        <h4 className="font-semibold text-xl">{title}</h4>
      </div>
      <p className="italic">{children}</p>
    </div>
  )
}
