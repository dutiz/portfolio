import Image from 'next/image'

export default function AboutSection() {
  return (
    <div id="about" className="bg-gray-700">
      <div className="container my-20">
        <div className="row">
          <div className="col-5">
            <Image src="./images/about-img.png" alt="about-img" className="w-full h-auto" />
          </div>
          <div className="offset-1 col-6">
            <h1 className="text-4xl font-medium text-white">About Me</h1>
            <p className="mt-10 text-gray-200">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which dont
              look even slightly believable. If you are going to use a passage of Lorem Ipsum,
            </p>
            <button type="button">Hello</button>
          </div>
        </div>
      </div>
    </div>
  )
}
