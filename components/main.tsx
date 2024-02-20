import Info from "@/components/globals/info"


export function Main() {
  return (
    <section className="py-2">
      <div className="flex justify-center border border-gray-200 mt-8 p-6  rounded-md gap-6 my-4">
        <textarea className="bg-gray-100 text p-4 rounded-md" cols={100} rows={10} placeholder="Hey this is a textarea"></textarea>
      </div>
      <Info />
    </section>
  )
}
