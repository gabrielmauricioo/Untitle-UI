
interface ItemLauchProps{
  title: string
  title2:string
  text:string

}

export function ItemLauch( {title, title2, text}: ItemLauchProps){
  return(
    <div className="w-full text-center">
      <h3 className="text-6xl font-semibold text-brand-600">{title}</h3>
      <h4 className=" text-lg font-medium text-gray-900 mt-3 mb-2">{title2}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  )
}