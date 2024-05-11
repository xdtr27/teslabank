

export default function BlogCard({img, title, children}) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <img src={img} alt="Imagem do Card" className="w-full h-[300px]"/>
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm">{children}</p>
    </div>
  )
}
