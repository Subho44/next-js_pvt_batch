import Link from "next/link"

const Homepage = () => {

  return <>
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-x-4">
            <h1 className="mb-5 text-4xl font-bold text-slate-900 md:text-5xl">Modern Next.js Ecommerce website</h1>
            <p className="mb-8 text-lg text-slate-600">
              Beginner friendly product add, view nice shop modern look kolkata
            </p>

            <Link href="/products" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-slate-800">View Product</Link>
            <Link href="/admin/products" className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-slate-700">Admin Panel</Link>


          </div>
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <h2 className="mb-4 text-2xl font-bold text-slate-900">Project Feature</h2>
            <ul className="space-y-3 text-slate-700">
              <li>Product Add</li>
              <li>Product View</li>
              <li>Product Update</li>
              <li>Product Delete</li>
              <li>Admin Product Panel</li>
              <li>Responsive design</li>
            </ul>
          </div>
        </div>

      </div>

    </section>


  </>
}

export default Homepage